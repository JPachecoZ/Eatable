import styled from "@emotion/styled";
import CardItem from "../../components/CardItem";
import TotalCart from "../../components/TotalCart";
import Text from "../../components/Text";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from "react-router-dom";

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

export default function CartPage(){

  const navigate = useNavigate();

  function handleBack(e){
    e.preventDefault();
    navigate(-1);
  }

  return(
    <Container>
      <CardList>
        <Title>
          <IoIosArrowBack style={{cursor: "pointer"}} onClick={(e) => handleBack(e)}/>
          <Text bold size="l">Cart</Text>
          <div></div>
        </Title>
        <CardItem/>
        <CardItem/>
      </CardList>
      <Footer>
        <TotalCart total="$97.90"/>
        <Link to="/checkout" style={{textDecoration: "none"}}><Button fullWidth>Checkout</Button></Link>
      </Footer>
    </Container>
  )
}