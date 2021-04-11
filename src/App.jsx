import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { Routes } from './routes/Routes';
import { UserProvider } from './contexts/UserContext';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';

const history = createBrowserHistory();

const App = () => {
    return (
        <div>
            <UserProvider>
                <Router history={history}>
                    <Navbar />
                    <Routes />
                    <Footer />
                </Router>
            </UserProvider>
        </div>
    );
};

export default App;
