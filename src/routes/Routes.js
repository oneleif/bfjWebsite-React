import React from "react";
import { Route, Switch } from "react-router-dom";

import { UserProvider } from "../contexts/UserContext";

//  IMPORT ROUTES

import Landing from "../pages/Landing";

//  RENDER
export const Routes = () => {
  return (
    <UserProvider>
      <Switch>
        <Route path="/" component={Landing} />
      </Switch>
    </UserProvider>
  );
};
