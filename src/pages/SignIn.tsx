import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import Button from "../components/Button";
import Form from "../components/Form";
import { signIn } from "../redux/auth/operations";
import { ROUTES } from "../routes/";

const wrapperStyle: React.CSSProperties = {
  display: "flex",
  width: "100vw",
  height: "100vh",
  alignItems: "center",
  justifyContent: "center",
};

const style: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: "300px",
};

const Page: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(
        signIn(values.name, values.password, () => {
          history.push(ROUTES.HOME);
        })
      );
    },
  });
  return (
    <div style={wrapperStyle}>
      <div style={style}>
        <Form
          label="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <Form
          label="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <Button onClick={formik.submitForm} title="Sign in" />
      </div>
    </div>
  );
};

export default Page;
