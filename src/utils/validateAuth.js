export function validateAuthentication({ email, password }) {
  const EMAIL_REGEX = /.+@.+\.[A-Za-z]+$/;
  const errors = {};

  if (!email) errors.email = "Required field";
  if (!EMAIL_REGEX.test(email)) errors.email = "Invalid email";

  if (!password) errors.password = "Required field";
  if (password.length < 6)
    errors.password = "The password should be at least 6 characters";

  return errors;
}
