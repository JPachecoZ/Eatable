import styled from "@emotion/styled";
import { fonts, typography } from "../styles";

export const Text = styled.p`
  font-family: ${fonts.primary};
  ${(props) => typography[props.size] || typography.text.s}
  font-weight: ${(props) => props.weight || "400"};
`;

export const Heading = styled.p`
  color: red;
  font-family: ${fonts.primary};
  ${(props) => typography.head[props.size] || typography.head.s};
  font-weight: ${(props) =>props.weight || "600"};
  color: ${(props) => props.color || "inherit"};
`;
