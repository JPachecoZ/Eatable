// below comment line is required
// it tells babel how to convert properly
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Button from "../Button";
import InputField from "../InputField";
import Text from "../Text";

function Form({ formik, types = {}, labels = {}, submit, serverError }) {
  const style = css`
    padding: 3.125rem;
    padding-bottom: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 3.75rem;
  `;

  const fields = Object.keys(formik.values);

  return (
    <form css={style} onSubmit={formik.handleSubmit}>
      {serverError && (
        <Text size="xs" color="var(--error)" centered>
          {serverError}
        </Text>
      )}
      {fields.map((field) => (
        <InputField
          key={field}
          id={field}
          type={types[field]}
          label={labels[field]}
          fieldProps={formik.getFieldProps(field)}
          touched={formik.touched[field]}
          errors={formik.errors[field]}
        />
      ))}

      <Button type="submit" fullWidth>
        {submit || "Submit"}
      </Button>
    </form>
  );
}

export default Form;
