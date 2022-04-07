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

  const active = true;

  return(
    <Container>
      <div>
      <Title>
        <IoIosArrowBack/>
        <Text bold size="l">History</Text>
        <div></div>
      </Title>
      <DataDetails>
        <Text size="m">Wed, Mar 20, 2021</Text>
        <TotalContainer>
          <Text size="s">3 items</Text>
          <Text color="var(--accent-color)" size="s">$64.90</Text>
        </TotalContainer>
        <TotalContainer>
          <div></div>
          <IoIosArrowDown/>
        </TotalContainer>
      </DataDetails>

      <DataDetails>
        <Text size="m">Wed, Mar 20, 2021</Text>
        <TotalContainer>
          <Text size="s">2 items</Text>
          <Text color="var(--accent-color)" size="s">$97.90</Text>
        </TotalContainer>

        <Text bold size="m">Order</Text>
        <TotalContainer>
          <Text size="s">5 - Veggie tomato mix</Text>
          <Text size="s">$75.45</Text>
        </TotalContainer>
        <TotalContainer>
          <Text size="s">1 - Fishwith mix orange...</Text>
          <Text size="s">$12.45</Text>
        </TotalContainer>
        <LineDiv/>

        <Text bold size="m">Delivery</Text>
        <Text size="s">Calle Rosales 123, urb El Jardin</Text>

        <TotalContainer>
          <div></div>
          {active ? <IoIosArrowUp/> : <IoIosArrowDown/>}
        </TotalContainer>
      </DataDetails>
      </div>
    </Container>
  )
}