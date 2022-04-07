import styled from "@emotion/styled";
import Text from "../Text";
import Counter from "../Counter";

const StyledCardItem = styled.div`
  background-color: #FFFFFF;
  height: 5.125rem;
  border-radius: 1.25rem;
  box-shadow: 0rem 0.625rem 2.5rem rgba(0, 0, 0, 0.03);
  display: flex;
  align-items: center;
  padding: 1.25rem;
  gap:1.25rem;
  max-width: 19.7rem;
`

const StyledImage = styled.img`
  height: 3.875rem;
  width: 3.875rem;
  border-radius: 100%;
  object-fit: scale-down;
  box-shadow: 0rem 1.25rem 1.25rem rgba(0, 0, 0, 0.2);
`
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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