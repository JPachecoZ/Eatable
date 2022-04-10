import { useFormik } from "formik";
import { useState } from "react";
import FormikForm from "../../components/FormikForm";
import { useAuth } from "../../context/auth-context";
import { validateAuthentication } from "../../utils/validateAuth";

function SignupPage() {
  const { signup } = useAuth();
  const [serverError, setServerError] = useState(null);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: validateAuthentication,
    onSubmit: (values) => {
      signup(values).catch((error) => {
        setServerError(error.message);
      });
    },
  });

  return (
    <FormikForm
      formik={formik}
      types={{ email: "email", password: "password" }}
      labels={{ email: "Email address" }}
      submit="Signup"
      serverError={serverError}
    />
  );
}

export default SignupPage;
