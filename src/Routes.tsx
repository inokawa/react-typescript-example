import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./pages/Main";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/">
        <Main />
      </Route>
    </Switch>
  );
};
