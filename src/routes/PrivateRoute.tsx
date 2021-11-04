import React, { useMemo } from "react";
import { Route, Navigate, RouteProps, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "../redux";
import { ROUTES } from ".";
import { signOut } from "../usecases/auth";
import * as authSelectors from "../redux/auth/selectors";
import SideNav from "../components/SideNav";

export const PrivateRoute = ({
  element,
}: {
  element: RouteProps["element"];
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthed = useSelector(authSelectors.isAuthed);
  const items = useMemo(
    () => [
      {
        title: "Home",
        onClick: () => navigate(ROUTES.HOME),
      },
      {
        title: "Sign out",
        onClick: () => {
          signOut(dispatch, () => navigate(ROUTES.SIGN_IN));
        },
      },
    ],
    [dispatch, navigate]
  );
  return isAuthed ? (
    <>
      <SideNav items={items} />
      {element}
    </>
  ) : (
    <Navigate to={ROUTES.SIGN_IN} state={{ from: location }} />
  );
};
