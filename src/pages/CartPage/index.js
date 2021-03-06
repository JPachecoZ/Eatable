import styled from "@emotion/styled";
import CardItem from "../../components/CardItem";
import TotalCart from "../../components/TotalCart";
import Text from "../../components/Text";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Back from "../../components/Back";

const Container = styled.section`
  max-width: 415px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  padding: 50px;
  gap: 20px;
`;

const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const CardList = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px 0px;
`;

const Title = styled.div`
  text-align: center;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export default function CartPage({onHandleCart, cartData}){

  const navigate = useNavigate();
  const [total, setTotal] = useState(0);

  useEffect(()=>{    
    const newCartData = [...cartData]; 
    const newNewData = newCartData.map((value) => {
      value["quantity"] = 1;
      return value;
    }).sort((value) => value.id);
    const total = newNewData.reduce((acc, obj) => {return acc + (obj.quantity * obj.price)},0);
    setTotal(total);
    onHandleCart(newNewData);
  }, []);

  function handleSetQuantity(event, id, count){
    const newCartData = [...cartData];
    const index = newCartData.findIndex((value) => value.id === id);
    if (newCartData[index]["quantity"] === 1 && count < 0){
      return;
    }
    newCartData[index]["quantity"] += count;
    const total = newCartData.reduce((acc, obj) => {return acc + (obj.quantity * obj.price)},0);
    setTotal(total);
    onHandleCart(newCartData);
  }
  
  function handleBack(e){
    e.preventDefault();
    navigate(-1);
  }
  
  return(
    <Container>
      <CardList>
        <Title>
          <Back />
          <Text bold size="l">
            Cart
          </Text>
          <div></div>
        </Title>
        {cartData.map((data) => {          
          return (<CardItem key={data.id} data={data} quantity={data.quantity} onSetQuantity={handleSetQuantity}/>)
        })}
      </CardList>
      <Footer>

        <TotalCart total={"$"+(total/100).toFixed(2)}/>
        <Link to="/checkout" style={{textDecoration: "none"}}><Button fullWidth>Checkout</Button></Link>
      </Footer>
    </Container>
  );
}
