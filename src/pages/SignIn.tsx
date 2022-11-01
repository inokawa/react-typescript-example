import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { Button } from "../components/Button";
import { Form } from "../components/Form";
import { signIn } from "../usecases/auth";
import { ROUTES } from "../routes/";
import { useSetRecoilState } from "recoil";
import { authState } from "../recoil";
import { innerStyle, wrapperStyle } from "./SignIn.css";

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
      <div className={innerStyle}>
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
        <Button onClick={formik.submitForm} label="Sign in" />
      </div>
    </div>
  );
};

export default Page;
