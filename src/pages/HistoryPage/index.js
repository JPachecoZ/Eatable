import styled from "@emotion/styled";
import TotalCart from "../../components/TotalCart";
import Text from "../../components/Text";
import Order from "../../components/Order";
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from "react-router-dom";
import Back from "../../components/Back";


const Container = styled.section`
  max-width: 26rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 3.125rem;
  gap: 1.25rem;
  min-height: 100vh;
`

const Title = styled.div`
  text-align: center;
  margin-bottom: 1.25rem;
  display:flex;
  align-items: center;
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
    },
    {
      "id": 4,
      "items_count": 2,
      "total": 15625,
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

  return(
    <Container>
      <div>
      <Title>
        <Back/>
        <Text bold size="l">History</Text>
        <div></div>
      </Title>

      {DATA.map((order) => {
        return (
          <Order key={order.id} order={order}/>
        )
      })}
      
      </div>
    </Container>
  )
}