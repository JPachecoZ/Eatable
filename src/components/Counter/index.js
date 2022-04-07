import styled from "@emotion/styled";
import Text from "../Text";
import { FaMinus } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa'

const StyledCounter = styled.div`
  background-color: var(--accent-color);
  border-radius: 1.875rem;
  height: 1.25rem;
  width: 3.25rem;
  align-self: flex-end;
  color: var(--bg-2);
  display: flex;
  gap: 0.375rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.05rem;
`

const StyledIcon = styled.div`
  height: 0.75rem;
  width: 0.75rem;
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