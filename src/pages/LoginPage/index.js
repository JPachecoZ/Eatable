import { useFormik } from "formik";
import { useState } from "react";
import FormikForm from "../../components/FormikForm";
import { useAuth } from "../../context/auth-context";
import { validateAuthentication } from "../../utils/validateAuth";

function LoginPage() {
  const { login } = useAuth();
  const [serverError, setServerError] = useState(null);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: validateAuthentication,
    onSubmit: (values) => {
      login(values).catch((e) => setServerError(e.message));
    },
  });

  return (
    <FormikForm
      formik={formik}
      types={{ email: "email", password: "password" }}
      labels={{ email: "Email address" }}
      submit="Login"
      serverError={serverError}
    />
  );
}

export default LoginPage;
