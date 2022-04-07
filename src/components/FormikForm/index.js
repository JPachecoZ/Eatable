// below comment line is required
// it tells babel how to convert properly
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import InputField from "../InputField";

function Form({ formik, types = {}, labels = {}, submit }) {
  const style = css`
    padding: 3.125rem;
    padding-bottom: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 3.75rem;
  `;

  const buttonStyle = css``;

  const fields = Object.keys(formik.values);

  return (
    <form css={style}>
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

      <input type="submit" value={submit || "Submit"} css={buttonStyle} />
    </form>
  );
}

export default Form;
