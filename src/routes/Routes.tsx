import React from "react";
import { Switch, Route } from "react-router-dom";
import { ROUTES } from "./";
import SignIn from "../pages/SignIn";
import Main from "../pages/Main";
import { PrivateRoute } from "./PrivateRoute";

export const Routes = () => {
  return (
    <Switch>
      <Route path={ROUTES.SIGN_IN}>
        <SignIn />
      </Route>
      <PrivateRoute path={ROUTES.HOME}>
        <Main />
      </PrivateRoute>
    </Switch>
  );
};
