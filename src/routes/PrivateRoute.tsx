import { useMemo } from "react";
import { Navigate, RouteProps, useNavigate } from "react-router";
import { ROUTES } from ".";
import { signOut } from "../usecases/auth";
import { authState, isAuthedSelector } from "../store/auth";
import { SideNav } from "../components/SideNav";
import { useAtomValue, useSetAtom } from "jotai";

export const PrivateRoute = ({
  element,
}: {
  element: RouteProps["element"];
}) => {
  const navigate = useNavigate();
  const isAuthed = useAtomValue(isAuthedSelector);
  const setToken = useSetAtom(authState);
  const items = useMemo(
    () => [
      {
        title: "Home",
        onClick: () => {
          navigate(ROUTES.HOME);
        },
      },
      {
        title: "Sign out",
        onClick: async () => {
          const res = await signOut();
          if (!(res instanceof Error)) {
            setToken("");
            navigate(ROUTES.SIGN_IN);
          }
        },
      },
    ],
    [navigate, setToken],
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
