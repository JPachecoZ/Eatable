import Input from "../components/Input";
import {BiSearch} from "react-icons/bi"
import {BiCart} from "react-icons/bi"
import styled from "@emotion/styled";
import { colors } from "../styles";
import { Heading } from "../components/text";

const Wrapper = styled.div`
  padding: 3.31rem 2.56rem;
  margin: 0 auto;
  height: 100vh;
`;

const ContentInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .content__search {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .custtom__icon {
    color: ${colors.gray.dark}
  }
`
const FoodCard = styled.div`
  position: absolute;
  width: 156px;
  height: 250px;
  /* left: 41px;
  top: 2px; */
`

const CustomImg = styled.div`
  
  .img {
    width: 130px;
    height: 130px;
    border-radius: 100%;
    box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
    z-index: 2;
    position: absolute;
    left: 8.33%;
    right: 8.33%;
    top: 0%;
    bottom: 48%;
    z-index: 2;
    
  }
`

const Description = styled.div`
  /* width: 156px;
  height: 212px;
  display:flex;
  flex-direction: column;
  gap: 0.75rem;
  background: #FFFFFF;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
  border-radius: 30px;
  align-items: center;
  justify-content: flex-end;
  position: relative; */
  position: absolute;
  width: 156px;
  height: 212px;
  left: 0%;
  right: 0%;
  top: 15.2%;
  bottom: 0%;
  background: #FFFFFF;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
  border-radius: 30px;
  .description__product {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;

    position: absolute;
    /* width: 130px;
    height: 68px; */
    left: calc(50% - 130px/2);
    top: calc(50% - 68px/2 + 65px);


  }
`

function SearchPage(){
  return (
    <Wrapper>
      <ContentInput>
        <div className="content__search">
          <BiSearch/>
          <Input placeholder="Search"/>
        </div>
        <BiCart className="custtom__icon"/>
      </ContentInput>
      <FoodCard>
        <CustomImg>
          <img 
            src="https://img.freepik.com/free-photo/top-view-green-cream-soups_23-2148519096.jpg" 
            alt="img-food"
            className="img"
            />
        </CustomImg>
        
        <Description >
          <div className="description__product">
            <Heading size="lg">Green cream</Heading>
            <Heading size="lg">$ 33.13</Heading>
          </div>
        </Description>
      </FoodCard>
    </Wrapper>
    
  )
}

export default SearchPage;
