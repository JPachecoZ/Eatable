import styled from "@emotion/styled";

// const Label = Text.withComponent("label");

const StyledInput = styled.input`
  padding: 0.5rem;
  border-radius: 1rem;
  border: none;
  background-color: white;
  color: var(--gray-200);
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

// const Error = styled(Text)`
//   color: red;
//   padding-left: 1rem;
// `;

function InputSearch({
  id,
  name,
  type = "text",
  placeholder,
  label,
  error,
  ...rest
}) {
  name ||= id;

  return (
    <InputContainer>
      {/* {label && <Label htmlFor={id}>{label}</Label>} */}
      <StyledInput
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
      {/* {error && <Error size="sm">{error}</Error>} */}
    </InputContainer>
  );
}

export default InputSearch;