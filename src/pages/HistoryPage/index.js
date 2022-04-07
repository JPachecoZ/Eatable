import styled from "@emotion/styled";
import TotalCart from "../../components/TotalCart";
import Text from "../../components/Text";
import Button from "../../components/Button";
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const Container = styled.section`
  max-width: 25.94rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100vh;
  padding: 3.125rem;
  gap: 1.25rem;
`

const Footer = styled.div`
  width: 100%;
  display:flex;
  flex-direction: column;
  gap: 32px;
`

const Title = styled.div`
  text-align: center;
  margin-bottom: 1.25rem;
  display:flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const DataDetails = styled.div`
  background-color: var(--bg-2);
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 1.25rem;
  padding: 1.5625rem 3.25rem 1.25rem 1.875rem;
  display: flex;
  flex-direction: column;
  width: 19.6875rem;
  gap:0.625rem;
`

const LineDiv = styled.div`
  height: 0.03rem;
  opacity: 30%;
  background-color: #000000;
  width: 100%;
`

const TotalContainer = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
`

export default function HistoryPage(){

  const DATA = [
    {
      "id": 1,
      "items_count": 3,
      "total": 18812,
      "delivery_address": "Lima-Peru",
      "created_at": "2022-04-06T05:58:10.221Z",
      "order_details": [
        {
          "id": 1,
          "quantity": 1,
          "subtotal": 3313,
          "product_id": 1,
          "product_name": "green cream"
        },
        {
          "id": 2,
          "quantity": 1,
          "subtotal": 4039,
          "product_id": 4,
          "product_name": "zucchini cream"
        },
        {
          "id": 3,
          "quantity": 5,
          "subtotal": 11460,
          "product_id": 10,
          "product_name": "nachos chips"
        }
      ]
    },
    {
      "id": 4,
      "items_count": 2,
      "total": 11625,
      "delivery_address": "Lima-Peru",
      "created_at": "2022-04-06T19:22:41.964Z",
      "order_details": [
        {
          "id": 7,
          "quantity": 1,
          "subtotal": 2816,
          "product_id": 1,
          "product_name": "green cream"
        },
        {
          "id": 8,
          "quantity": 1,
          "subtotal": 8809,
          "product_id": 4,
          "product_name": "zucchini cream"
        }
      ]
    }
  ]

  function getDate(date) {
    let newDate = new Date(date);
    newDate = newDate.toDateString().split(" ")
    return newDate[0] + ", " + newDate[1] + " " + newDate[2] + ", " + newDate[3];
    ;
  }

  const active = true;

  return(
    <Container>
      <div>
      <Title>
        <IoIosArrowBack/>
        <Text bold size="l">History</Text>
        <div></div>
      </Title>

      {DATA.map((order) => {
        return (
        <DataDetails>
        <Text size="m">{getDate(order.created_at)}</Text>
        <TotalContainer>
          <Text size="s">{order.items_count} items</Text>
          <Text color="var(--accent-color)" size="s">$ {order.total/100}</Text>
        </TotalContainer>
        {!active ? "": <>
          <Text bold size="m">Order</Text>

          {order.order_details.map((detail) => {
            return (
          <TotalContainer>
            <Text size="s">{detail.quantity} - {detail.product_name}</Text>
            <Text size="s">$ {detail.subtotal/100}</Text>
          </TotalContainer>
          )})}
          <LineDiv/>
          <Text bold size="m">Delivery</Text>
          <Text size="s">{order.delivery_address}</Text>
          
          </>
        }
        <TotalContainer>
          <div></div>
          {active ? <IoIosArrowUp/> : <IoIosArrowDown/>}
        </TotalContainer>
        </DataDetails>
        )
      })}
      
      </div>
    </Container>
  )
}