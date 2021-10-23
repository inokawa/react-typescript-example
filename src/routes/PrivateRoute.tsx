import React, { useMemo } from "react";
import { Route, Redirect, RouteProps, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "../redux";
import { ROUTES } from ".";
import { signOut } from "../usecases/auth";
import * as authSelectors from "../redux/auth/selectors";
import SideNav from "../components/SideNav";

export const PrivateRoute = ({ children, ...rest }: RouteProps) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isAuthed = useSelector(authSelectors.isAuthed);
  const items = useMemo(
    () => [
      {
        title: "Home",
        onClick: () => history.push(ROUTES.HOME),
      },
      {
        title: "Sign out",
        onClick: () => {
          signOut(dispatch, () => history.push(ROUTES.SIGN_IN));
        },
      },
    ],
    [history]
  );
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthed ? (
          <>
            <SideNav items={items} />
            {children}
          </>
        ) : (
          <Redirect
            to={{
              pathname: ROUTES.SIGN_IN,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
