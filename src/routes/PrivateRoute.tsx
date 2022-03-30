import { useMemo } from "react";
import { Navigate, RouteProps, useNavigate } from "react-router-dom";
import { ROUTES } from ".";
import { signOut } from "../usecases/auth";
import { authState, isAuthedSelector } from "../recoil/auth";
import SideNav from "../components/SideNav";
import { useRecoilValue, useSetRecoilState } from "recoil";

export const PrivateRoute = ({
  element,
}: {
  element: RouteProps["element"];
}) => {
  const navigate = useNavigate();
  const isAuthed = useRecoilValue(isAuthedSelector);
  const setToken = useSetRecoilState(authState);
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
    [navigate, setToken]
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
