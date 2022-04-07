import styled from "@emotion/styled";
import TotalCart from "../../components/TotalCart";
import Text from "../../components/Text";
import Button from "../../components/Button";
import { IoIosArrowBack } from 'react-icons/io'

const Container = styled.section`
  max-width: 415px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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

const Title = styled.div`
  text-align: center;
  margin-bottom: 20px;
  display:flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const DetailsHeading = styled.div`
  display:flex;
  margin-top: 30px;
  margin-bottom: 20px;
  justify-content: space-between;
  width: 100%;
`

const DataDetails = styled.div`
  background-color: var(--bg-2);
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  padding: 25px 52px 20px 30px;
  display: flex;
  flex-direction: column;
  gap:10px;
`

const LineDiv = styled.div`
  height: 0.5px;
  opacity: 30%;
  background-color: #000000;
  width: 100%;
`

export default function CheckoutPage(){
  return(
    <Container>
      <div>
      <Title>
        <IoIosArrowBack/>
        <Text bold size="l">Checkout</Text>
        <div></div>
      </Title>
      <Text bold size="xl">Delivery</Text>
      <DetailsHeading>
        <Text bold size="m">Address details</Text>
        <Text bold size="s" color="var(--accent-color)">change</Text>
      </DetailsHeading>
      <DataDetails>
        <Text bold size="m">Margarita Flores</Text>
        <LineDiv/>
        <Text size="m">Calle Rosales 123, urb El Jardin</Text>
        <LineDiv/>
        <Text size="m">987654321</Text>
      </DataDetails>
      </div>
      <Footer>
        <TotalCart total="$27.90"/>
        <Button fullWidth>Complete Order</Button>
      </Footer>
    </Container>
  )
}