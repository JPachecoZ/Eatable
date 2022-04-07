import styled from "@emotion/styled";
import Text from "./Text";
import Counter from "./Counter";

const StyledCardItem = styled.div`
  background-color: #FFFFFF;
  height: 82px;
  border-radius: 20px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  display: flex;
  align-items: center;
  padding: 20px;
  gap:20px;
  max-width: 315px;
`

const StyledImage = styled.img`
  height: 62px;
  width: 62px;
  border-radius: 100%;
  object-fit: scale-down;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
`
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`
export default function CardItem(){
  return (
    <StyledCardItem>
      <StyledImage src="https://www.thespruceeats.com/thmb/c57iCi93U2l6xHJ1Af4kz6OLo38=/3661x3661/smart/filters:no_upscale()/hawaiian-pizza-4691857-hero-01-1a8f6764c70e4113bbf31bd1a73aca2e.jpg"/>
      <StyledContainer>
        <Text bold >Veggie tomato mix</Text>
        <Text bold size="m" color="var(--accent-color)">$15.45</Text>
      </StyledContainer>
      <Counter/>
    </StyledCardItem>
  )
}