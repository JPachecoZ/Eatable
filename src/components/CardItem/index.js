import styled from "@emotion/styled";
import Text from "../Text";
import Counter from "../Counter";
import { useState } from "react";

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
  object-fit: cover;
  box-shadow: 0rem 1.25rem 1.25rem rgba(0, 0, 0, 0.2);
`
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
export default function CardItem({data, quantity, onSetQuantity}){

  return (
    <StyledCardItem>
      <StyledImage src={data.picture_url}/>
      <StyledContainer>
        <Text cartList bold >{data.name}</Text>
        <Text cartList bold size="m" color="var(--accent-color)">$ {(data.price/100 * quantity).toFixed(2)}</Text>
      </StyledContainer>
      <Counter key={data.id} id={data.id} quantity={quantity} onSetQuantity={onSetQuantity}/>
    </StyledCardItem>
  )
}