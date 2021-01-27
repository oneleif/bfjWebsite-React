import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { Routes } from './routes/Routes';
import { UserProvider } from './contexts/UserContext';

const history = createBrowserHistory();

const App = () => {
    return (
        <div>
            <UserProvider>
                <Router history={history}>
                    <Routes />
                </Router>
            </UserProvider>
        </div>
    );
};

export default App;
