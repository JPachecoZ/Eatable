import styled from "@emotion/styled";
import Text from "./Text";

export default function TotalCart(){

  const TotalContainer = styled.div`
    display: flex;
    justify-content: space-between;
  `

  return (
    <TotalContainer>
      <Text size="m">Total</Text>
      <Text size="xl">$97.90</Text>
    </TotalContainer>
  )
}