import styled from "@emotion/styled";
import TotalCart from "../../components/TotalCart";
import Text from "../../components/Text";
import Button from "../../components/Button";
import { completeOrder } from "../../services/products-service";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from 'react-icons/io'
import { useAuth } from "../../context/auth-context";
import Back from "../../components/Back";

const Container = styled.section`
  max-width: 25.94rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  min-height: 100vh;
  padding: 3.125rem;
  gap: 1.25rem;
`;

const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Title = styled.div`
  text-align: center;
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const DetailsHeading = styled.div`
  display: flex;
  margin-top: 1.875rem;
  margin-bottom: 1.25rem;
  justify-content: space-between;
  width: 100%;
`;

const DataDetails = styled.div`
  background-color: var(--bg-2);
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 1.25rem;
  padding: 1.5625rem 3.25rem 1.25rem 1.875rem;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  min-width: 19.7rem;
`;

const LineDiv = styled.div`
  height: 0.03rem;
  opacity: 30%;
  background-color: #000000;
  width: 100%;
`;


export default function CheckoutPage({cartData}){

  const { user } = useAuth();
  const navigate = useNavigate();

  const newCartData = [...cartData];
  const total = newCartData.reduce((acc, obj) => {return acc + (obj.quantity * obj.price)},0);
  const orderDetails = newCartData.map((value) => {return {id: value.id, quantity: value.quantity}})

  const orderData = {
    delivery_address: user.address,
    items: orderDetails
  }

  function handleBack(e){
    e.preventDefault();
    navigate(-1);
  }

  function handleCompleteOrder(e){
    e.preventDefault();
    completeOrder(orderData);
  }

  return(
    <Container>
      <div>
      <Title>
        <Back/>
        <Text bold size="l">Checkout</Text>
        <div></div>
      </Title>
      <Text bold size="xl">Delivery</Text>
      <DetailsHeading>
        <Text bold size="m">Address details</Text>
        <Text bold size="s" color="var(--accent-color)">change</Text>
      </DetailsHeading>
      <DataDetails>
        <Text bold size="m">{user.name}</Text>
        <LineDiv/>
        <Text size="m">{user.address}</Text>
        <LineDiv/>
        <Text size="m">{user.phone}</Text>
      </DataDetails>
      </div>
      <Footer>
        <TotalCart total={"$"+(total/100).toFixed(2)}/>
        <Button fullWidth onClick={(e) => handleCompleteOrder(e)}>Complete Order</Button>
      </Footer>
    </Container>
  );
}
