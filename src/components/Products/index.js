import styled from "@emotion/styled";
import { useOutletContext } from "react-router-dom";
import FoodCards from "../FoodCard";
import Text from "../Text";

function Products() {
  const { products } = useOutletContext();

  const ContentCard = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 2fr));
    justify-items: center;
    gap: 1.25rem;
  `;

  return (
    <ContentCard>
      {products?.map((product) => (
        <FoodCards key={product.id} {...{ product }} />
      )) || (
        <Text size="l" centered bold>
          No products found
        </Text>
      )}
    </ContentCard>
  );
}

export default Products;
