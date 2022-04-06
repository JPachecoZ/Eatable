import styled from "@emotion/styled"

export const StyledText = styled.p`
  padding: 0px;
  margin: 0px;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: ${props => props.size || "18px"};
  line-height: 23px;
  font-weight: ${props => props.weight || "600"};
  color: ${props => props.color || "auto"};
`
