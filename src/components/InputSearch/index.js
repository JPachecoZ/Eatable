import styled from "@emotion/styled";

const StyledInput = styled.input`
  padding: 0.5rem;
  border-radius: 1rem;
  border: none;
  background-color: var(--bg-2);
  color: var(--gray-300);
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

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
      <StyledInput
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
    </InputContainer>
  );
}

export default InputSearch;