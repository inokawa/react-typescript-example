import React from "react";
import { useNavigate } from "react-router-dom";
import { css } from "linaria";
import { useFormik } from "formik";
import Button from "../components/Button";
import Form from "../components/Form";
import { signIn } from "../usecases/auth";
import { ROUTES } from "../routes/";
import { useSetRecoilState } from "recoil";
import { authState } from "../recoil";

const wrapperStyle = css`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const style = css`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Page = () => {
  const navigate = useNavigate();
  const setToken = useSetRecoilState(authState);
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    onSubmit: async (values) => {
      const res = await signIn(values.name, values.password);
      if (!(res instanceof Error)) {
        setToken(res);
        navigate(ROUTES.HOME);
      }
    },
  });
  return (
    <div className={wrapperStyle}>
      <div className={style}>
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
