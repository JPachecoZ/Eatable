import styled from "@emotion/styled";
import Button from "../../components/Button";
import Text from "../../components/Text";

const Wrapper = styled.div`
  padding: 3.31rem 2.56rem;
  margin: 0 auto;
  min-height: 100vh;
`;

const FoodCard = styled.div`
  display: flex;
  gap: 5.68rem;
  flex-direction: column;
`;

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
`;

const NameProduct = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 1.68rem;
`;

function FoodPage() {
  return (
    <Wrapper>
      <FoodCard>
        <CustomImg>
          <img
            src="https://img.freepik.com/free-photo/top-view-green-cream-soups_23-2148519096.jpg"
            alt="img-food"
            className="img"
          />
        </CustomImg>

        <div>
          <NameProduct>
            <Text size="xl" bold>
              Green cream
            </Text>
            <Text size="xl" bold color="#FA4A0C">
              $ 33.13
            </Text>
          </NameProduct>
          <Text size="m" bold>
            Description
          </Text>
          <Text size="s">
            Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi
            welsh onion daikon amaranth tatsoi tomatillo melon azuki bean
            garlic.
          </Text>
        </div>
        <Button fullWidth>Add to Cart</Button>
      </FoodCard>
    </Wrapper>
  );
}

export default FoodPage;
