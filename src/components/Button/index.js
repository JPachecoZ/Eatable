import styled from "@emotion/styled";
import Text from "../Text"

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  background-color: var(--accent-color);
  font-weight: 600;
  color: var(--bg-2);
  border: none;
  cursor: pointer;
  border-radius: 1rem;
  width: ${(props) => (props.fullWidth ? "100%" : "fit-content")};
`;

function Button(props) {
  return (
    <StyledButton {...props}>
      {props.Icon && <props.Icon />}
      <Text size="m" bold>{props.children}</Text>
    </StyledButton>
  );
}

export default Button;