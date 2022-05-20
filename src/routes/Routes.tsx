import { Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "./";
import { Main, SignIn } from "../pages";
import { PrivateRoute } from "./PrivateRoute";

export default () => {
  return (
    <Routes>
      <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
      <Route path={ROUTES.HOME} element={<PrivateRoute element={<Main />} />} />
      <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
    </Routes>
  );
};
