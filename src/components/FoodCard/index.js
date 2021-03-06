import styled from "@emotion/styled";
import Text from "../Text";
import { Link } from "react-router-dom";

const FoodCardStyled = styled.div`
  position: relative;
  width: 156px;
  height: 250px;
`;

const ConteinerLink = styled(Link)`
  text-decoration: none;
  color: var(--gray-300);
`;

const CustomImg = styled.div`
  .img {
    width: 130px;
    height: 130px;
    border-radius: 100%;
    box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
    z-index: 1;
    position: absolute;
    left: 8.33%;
    right: 8.33%;
    object-fit: cover;
  }
`;
const Description = styled.div`
  position: absolute;
  width: 156px;
  height: 212px;
  top: 15.2%;
  background: #ffffff;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
  border-radius: 30px;
  text-align: center;
  padding: 0.75rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  .description__product {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    padding: 0px;
  }
`;

function FoodCard({ product }) {
  return (
    <ConteinerLink to={"/product/" + product.id}>
      <FoodCardStyled>
        <CustomImg>
          <img src={product.picture_url} alt="img-food" className="img" />
        </CustomImg>
        <Description>
          <div className="description__product">
            <Text size="l" bold>
              {product.name}
            </Text>
            <Text size="l" bold color="#FA4A0C">{`$ ${
              Math.round(product.price * 0.01 * 100) / 100
            }`}</Text>
          </div>
        </Description>
      </FoodCardStyled>
    </ConteinerLink>
  );
}

export default FoodCard;
