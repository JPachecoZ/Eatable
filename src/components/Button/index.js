import styled from "@emotion/styled";


const StyledButton = styled.button`
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  background-color: var(--accent-color);
  font-weight: 600;
  color: var(--bg-2);
  border: none;
  font-size: 1.125rem;
  cursor: pointer;
  border-radius: 1.875rem;
  width: ${(props) => (props.fullWidth ? "100%" : "fit-content")};
`;

function Button(props) {
  return (
    <StyledButton {...props}>
      {props.Icon && <props.Icon />}
      {props.children}
    </StyledButton>
  );
}

export default Button;