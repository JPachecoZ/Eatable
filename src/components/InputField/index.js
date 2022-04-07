// below comment line is required
// it tells babel how to convert properly
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Text from "../Text";

function InputField({ id, type, label, fieldProps, touched, errors }) {
  const inputStyle = css`
    width: 100%;
    padding-bottom: 0.3125rem;
    margin-block: 0.3125rem;
    border: none;
    border-bottom: 0.0625rem solid var(--gray-300);
  `;

  const labelPrompt =
    id.slice(0, 1).toUpperCase() + id.slice(1, id.length).toLowerCase();

  return (
    <label htmlFor={id}>
      <Text size="xs" bold color="var(--gray-200)">
        {label ?? labelPrompt}
      </Text>
      <input id={id} type={type || "text"} {...fieldProps} css={inputStyle} />
      {touched && errors && (
        <Text size="xs" color="var(--error)">
          {errors}
        </Text>
      )}
    </label>
  );
}

export default InputField;
