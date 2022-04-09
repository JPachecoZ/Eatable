import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import Text from '../Text'
import styled from '@emotion/styled'
import { useState } from 'react'

const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const DataDetails = styled.div`
  background-color: var(--bg-2);
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 1.25rem;
  padding: 1.55rem 3.25rem 1.25rem 1.85rem;
  display: flex;
  flex-direction: column;
  width: 20rem;
  gap:0.625rem;
`

const LineDiv = styled.div`
  height: 0.03rem;
  background-color: var(--gray-300);
  width: 100%;
`

function getDate(date) {
  let newDate = new Date(date);
  newDate = newDate.toDateString().split(" ")
  return newDate[0] + ", " + newDate[1] + " " + newDate[2] + ", " + newDate[3];
  ;
}

export default function Order({order}){
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen(e) {
    e.preventDefault();
    setIsOpen(!isOpen);
  }

  return (
    <DataDetails>
      <Text size="m">{getDate(order.created_at)}</Text>
      <TotalContainer>
        <Text size="s">{order.items_count} items</Text>
        <Text color="var(--accent-color)" size="s">$ {order.total/100}</Text>
      </TotalContainer>
      {isOpen && <>
        <Text bold size="m">Order</Text>

        {order.order_details.map((detail) => {
          return (
        <TotalContainer key={detail.id}>
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
        {isOpen ? <IoIosArrowUp style={{cursor: "pointer"}} onClick={(e) => toggleOpen(e)}/> : <IoIosArrowDown style={{cursor: "pointer"}} onClick={(e) => toggleOpen(e, order.opened)}/>}
      </TotalContainer>
    </DataDetails>
  )
}

