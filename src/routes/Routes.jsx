import React from 'react';
import { Route, Switch } from 'react-router-dom';

//  IMPORT ROUTES
import Landing from '../pages/Landing';

//  RENDER
export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Landing} />
        </Switch>
    );
};
