import styled from "@emotion/styled";
import { colors, fonts, typography } from "../styles";

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  background-color: ${colors.orange};
  ${typography.head.m};
  font-weight: 600;
  color: ${colors.white};
  border: none;
  cursor: pointer;
  border-radius: 1rem;
  font-family: ${fonts.primary};
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