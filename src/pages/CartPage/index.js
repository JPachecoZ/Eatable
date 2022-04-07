import styled from "@emotion/styled";
import CardItem from "../../components/CardItem";
import TotalCart from "../../components/TotalCart";
import Text from "../../components/Text";

const Container = styled.section`
  max-width: 415px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 50vh;
  padding: 50px;
  gap: 20px;
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
`

export default function CartPage(){
  return(
    <Container>
      <CardList>
        <Title>
          <Text bold size="l">Cart</Text>
        </Title>
        <CardItem/>
        <CardItem/>
      </CardList>
      <TotalCart/>
    </Container>
  )
}