import styled from "@emotion/styled";
import { StyledText } from "./Text";

export default function TotalCart(){

  const TotalContainer = styled.div`
    display: flex;
    justify-content: space-between;
  `

  return (
    <TotalContainer>
      <StyledText weight="400">Total</StyledText>
      <StyledText size="28px">$97.90</StyledText>
    </TotalContainer>
  )
}