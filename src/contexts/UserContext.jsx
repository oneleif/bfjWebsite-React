import React, { useContext, useEffect, useState } from 'react';
import { setCookie, getCookie } from '../utils/cookiesManager';

const UserContext = React.createContext([undefined, undefined]);

function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const sessionUser = getCookie();
        if (sessionUser && !user) {
            setUser(sessionUser);
            console.log(sessionUser);
        }
    }, [user]);

    useEffect(() => {
        setCookie(user);
    }, [user]);

    return <UserContext.Provider value={[user, setUser]}>{children}</UserContext.Provider>;
}

function useUser() {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error('User must be accessed from within the UserProvider');
    }

    return context;
}

export { UserProvider, useUser };
