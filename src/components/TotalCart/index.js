import styled from "@emotion/styled";
import Text from "../Text";

export default function TotalCart(props){

  const TotalContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
  `

  return (
    <TotalContainer>
      <Text size="m">Total</Text>
      <Text bold size="xl">{props.total}</Text>
    </TotalContainer>
  )
}