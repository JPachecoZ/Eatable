import { useFormik } from "formik";
import FormikForm from "../../components/FormikForm";
import { validateAuthentication } from "../../utils/validateAuth";

function LoginPage() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: validateAuthentication,
    onSubmit: (values) => console.log(JSON.stringify(values, null, 2)),
  });

  return (
    <FormikForm
      formik={formik}
      types={{ email: "email", password: "password" }}
      labels={{ email: "Email address" }}
      submit="Login"
    />
  );
}

export default LoginPage;
