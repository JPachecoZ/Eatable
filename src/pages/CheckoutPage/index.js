import styled from "@emotion/styled";
import CardItem from "../../components/CardItem";
import TotalCart from "../../components/TotalCart";
import Text from "../../components/Text";
import Button from "../../components/Button";
import { IoIosArrowBack } from 'react-icons/io'

const Container = styled.section`
  max-width: 415px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  padding: 50px;
  gap: 20px;
`

const Footer = styled.div`
  width: 100%;
  display:flex;
  flex-direction: column;
  gap: 32px;
`

const CardList = styled.div`
  display:flex;
  align-items: center;
  flex-direction: column;
  gap: 20px 0px;
`

const Title = styled.div`
  text-align: center;
  margin-bottom: 20px;
  display:flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`



export default function CheckoutPage(){
  return(
    <Container>
      <Title>
        <IoIosArrowBack/>
        <Text bold size="l">Checkout</Text>
        <div></div>
      </Title>
      <Footer>
        <TotalCart/>
        <Button fullWidth>Complete Order</Button>
      </Footer>
    </Container>
  )
}