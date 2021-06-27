import React from 'react';
import { Route, Switch } from 'react-router-dom';

//  IMPORT ROUTES
import LandingView from '../pages/LandingView';
import StoriesView from '../pages/StoriesView';
import IndividualStoryView from '../pages/IndividualStoryView';

//  RENDER
export const Routes = () => {
    return (
        <Switch>
            <Route path="/stories/:id" component={IndividualStoryView} />
            <Route path="/stories" component={StoriesView} />
            <Route exact path="/" component={LandingView} />
        </Switch>
    );
};
