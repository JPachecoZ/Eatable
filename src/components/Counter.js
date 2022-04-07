import styled from "@emotion/styled";
import Text from "./Text";
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
      <Text bold size="m">1</Text>
      <StyledIcon><FaPlus/></StyledIcon>
    </StyledCounter>
  )
}