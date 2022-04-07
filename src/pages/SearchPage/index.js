import {BiSearch} from "react-icons/bi"
import {BiCart} from "react-icons/bi"
import styled from "@emotion/styled";
import Text from "../../components/Text";
import InputSearch from "../../components/InputSearch";

const Wrapper = styled.div`
  padding: 3.31rem 2.56rem;
  margin: 0 auto;
  height: 100vh;
`;

const ContentInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 3.12rem;
  .content__search {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .custtom__icon--size{
    width: 18px;
    height: 18px;
  }
  .custtom__icon {
    color: var(--gray-200);
    width: 24px;
    height: 24px;
  }
`
const ContentCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 2fr));
  justify-items: center;
  gap: 1.25rem;
`
const FoodCard = styled.div`
  position: relative;
  width: 156px;
  height: 250px;
`

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
  }
`

const Description = styled.div`
  position: absolute;
  width: 156px;
  height: 212px;
  top: 15.2%;
  background: #FFFFFF;
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
`
const Category = styled.p`
  display: flex;
  gap: 2.12rem;
  flex-wrap: wrap;
  justify-content: flex-end;
  color: var(--gray-400);
  padding-bottom: 2.18rem;
  width: 100%;
`
const type = [ 
  {category: "Italian"},
  {category: "Mexican"},
  {category: "Snacks"},
  {category: "Indian"},
]

function SearchPage({products, onhandleChange}){

  // function handleSubmit(event){
  //   event.preventDefault();
  //   const { query } = event.target.elements;
  //   // onFormSubmit()
  //   // const name = products.filter((item)=>{return item.name === query})
  //   // console.log(name)
  //   onFormSubmit(query.value);
  // }

  return (
    <Wrapper>
      <ContentInput>
        <div className="content__search">
          <BiSearch className="custtom__icon--size"/>
          {/* <form > */}
            <InputSearch 
              id="query"
              name="query"
              placeholder="Search"
              onChange={({target}) => onhandleChange(target.value) }
            />
          {/* </form> */}
        </div>
        <BiCart className="custtom__icon"/>
      </ContentInput>
      <Category>
        {type.map((item)=>
          <div key={item.category}>{item.category}</div>
        )}
      </Category>
      <ContentCard>
        {products ? products.map((products) => 
        <FoodCard>
          <CustomImg>
            <img 
            src={products.picture_url} 
            alt="img-food"
            className="img"
            />
          </CustomImg>
          <Description >
            <div className="description__product">
              <Text size="l" bold>{products.name}</Text>
              <Text size="l" bold color="#FA4A0C">{`$ ${Math.round((products.price * 0.01) * 100)/100}`}</Text>
            </div>
          </Description>
        </FoodCard>) : "No hay data"}
      </ContentCard>
    </Wrapper>
    
  )
}

export default SearchPage;
