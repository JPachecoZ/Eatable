import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import Text from "../../components/Text"
import Back from "../../components/Back"
import { showProducts } from "../../services/products-service";
import LoandingIcon from "../../components/LoadingIcon"

const Wrapper = styled.div`
  padding: 3.31rem 2.56rem;
  margin: 0 auto;
  min-height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5.68rem;
`
const ContainerLoading = styled.div`
  height: 100vh;
  display: grid;
  place-content: center;
`

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
    object-fit: cover;  
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

function FoodPage({onHandleCart, cartData}){
  const params = useParams();
  const [dataFood, setDataFood] = useState({});
  const [loading, setLoading] = useState(null)
  const [productInCart, setProductInCart] = useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
    setLoading(true)
    const id = +params.productId;
    showProducts(id).then(response => {
      setLoading(false)
      setDataFood(response)
      setDataFood(response);
      setProductInCart(!!cartData.find((value) => value.id === response.id));
    })
    .catch((error)=> console.log(error))
  }, [params.productId]);

  function handleAddToCart(e){
    e.preventDefault();
    console.log(dataFood);
    onHandleCart([...cartData, dataFood]);
    setProductInCart(true);
//    navigate("/home");
  }

  return (
    <Wrapper>
      <Back/>
      {loading ? <ContainerLoading><LoandingIcon/></ContainerLoading> :
      <Container>
        <FoodCard>
          <CustomImg>
            <img 
              src={dataFood.picture_url} 
              alt="img-food"
              className="img"
            />
          </CustomImg>
          <div>
            <NameProduct>
              <Text size="xl" bold>{dataFood.name}</Text>
              <Text size="xl" bold color="#FA4A0C">{`$ ${Math.round((dataFood.price * 0.01) * 100)/100}`}</Text>
            </NameProduct>
            <Text size="m" bold>Description</Text>
            <Text size="s">{dataFood.description}</Text>
          </div>
        </FoodCard>
        <Button 
          fullWidth 
          onClick={(e) => handleAddToCart(e)} 
          style={productInCart ? { opacity: "0.6"} : { opacity: "1" }}
          disabled={productInCart}>
            {!productInCart ? "Add to Cart" : "Added to Cart"}
        </Button>
      </Container> }
    </Wrapper>
  );
}

export default FoodPage;
