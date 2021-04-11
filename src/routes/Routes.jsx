import React from 'react';
import { Route, Switch } from 'react-router-dom';

//  IMPORT ROUTES
import LandingView from '../pages/LandingView';
import StoriesView from '../pages/StoriesView';

//  RENDER
export const Routes = () => {
    return (
        <Switch>
            <Route path="/stories" component={StoriesView} />
            <Route exact path="/" component={LandingView} />
        </Switch>
    );
};
