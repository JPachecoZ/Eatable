import styled from "@emotion/styled";
import Button from "../components/button";
import { Heading } from "../components/text";
import { colors } from "../styles";

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
  display:flex;
  gap: 5.68rem;
  flex-direction: column;
`

const CustomImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  .img {
    width: 241px;
    height: 241px;
    border-radius: 100%;
    box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
  }
`

const NameProduct = styled.div`
  display:flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
  justify-content: space-around;

`

function FoodPage(){
  return (
    <Wrapper>
      {/* <ContentInput>
        <div className="content__search">
          
        </div>
      </ContentInput> */}
      <FoodCard>
        <CustomImg>
          <img 
            src="https://img.freepik.com/free-photo/top-view-green-cream-soups_23-2148519096.jpg" 
            alt="img-food"
            className="img"
            />
        </CustomImg>
        
        <div >
          <NameProduct>
            <Heading size="lg">Green cream</Heading>
            <Heading size="lg">$ 33.13</Heading>
          </NameProduct>
          <p>Description</p>
          <p>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.</p>
        </div>
        <Button fullWidth>Add to Cart</Button>
      </FoodCard>
    </Wrapper>
    
  )
}

export default FoodPage;
