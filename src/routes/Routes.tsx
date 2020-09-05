import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ROUTES } from "./";
import SignIn from "../pages/SignIn";
import Main from "../pages/Main";
import { PrivateRoute } from "./PrivateRoute";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.SIGN_IN}>
        <SignIn />
      </Route>
      <PrivateRoute exact path={ROUTES.HOME}>
        <Main />
      </PrivateRoute>
      <Route path="*">
        <Redirect to={ROUTES.HOME} />
      </Route>
    </Switch>
  );
};
