import styled from "@emotion/styled";
import { FaMinus } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa'

const StyledCounter = styled.div`
  background-color: #FA4A0C;
  border-radius: 30px;
  height: 20px;
  width: 52px;
  align-self: flex-end;
  color: #FFFFFF;
  display: flex;
  gap: 6px;
  justify-content: center;
  align-items: center;
  margin-bottom: 1px;
`

const StyledText = styled.p`
  padding: 0px;
  margin: 0px;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 18px;
  line-height: 23px;
  font-weight: 600;
  color: #ffffff;
`

const StyledIcon = styled.div`
  height: 12px;
  width: 12px;
  display:flex;
  align-items:center;
  justify-content: center;
`

export default function Counter(){
  return (
    <StyledCounter>
      <StyledIcon><FaMinus/></StyledIcon>
      <StyledText>1</StyledText>
      <StyledIcon><FaPlus/></StyledIcon>
    </StyledCounter>
  )
}