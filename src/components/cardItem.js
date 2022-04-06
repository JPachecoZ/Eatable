import styled from "@emotion/styled";

const StyledCardItem = styled.div`
  background-color: #FFFFFF;
  height: 102px;
  border-radius: 20px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  display: flex;
  align-items: center;
  padding: 20px;
`

const StyledImage = styled.img`
  height: 62px;
  width: 62px;
`

const StyledText = styled.p`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 16px;
  line-height: 20px;
  color: #333333;
`

const StyledPrice = styled.p`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 18px;
  line-height: 23px;
  color: #fa4a0c;
`

export default function CardItem(){
  return (
    <StyledCardItem>
      <StyledImage src="https://papajohns.com.pe/_ipx/f_webp,q_85,s_300x300/img/promociones/Chicken-BBQ_carta_300x300.webp"/>
    </StyledCardItem>
  )
}