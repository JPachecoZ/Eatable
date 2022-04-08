import {BiSearch} from "react-icons/bi"
import {BiCart} from "react-icons/bi"
import styled from "@emotion/styled";
import InputSearch from "../../components/InputSearch";
import capitalize from "./utils";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/products-service";
import FoodCards from "../../components/FoodCard";
import { useSearchParams } from "react-router-dom";

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
`;

const ContentCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 2fr));
  justify-items: center;
  gap: 1.25rem;
`;

const Category = styled.p`
  display: flex;
  gap: 2.12rem;
  flex-wrap: wrap;
  justify-content: flex-end;
  color: var(--gray-400);
  padding-bottom: 2.18rem;
  width: 100%;
`;

function SearchPage(){

  const [products, setProducts] = useState([]); // data estatica
  const [search, setSearch] = useState([]); // data dinámica
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams)

  useEffect(() => {
    getProducts()
    .then(response => {
      setProducts(response);
      setSearch(response)})
      .catch((error) => console.log(error));
  }, []);

  console.log(products)
  console.log(search)

  // function handleChange(value){
  //   setQuery(value);
  //   filtrar(value)
  // }

  function handleChange(e){
    e.preventDefault();
    setSearchParams({query: e.target.value});
    console.log(e.target.value)
    filtrar(e.target.value)
  }

  const filtrar=(value)=>{
    // if(!value) return true;
    var results = search.filter((item)=>{
      return item.name.includes(value.toLowerCase());
    })
    setProducts(results)
  }
  
  //Filter category
  const category = products.map((item) => item.category )
  const TypeCategory = [...new Set(category)]

  return (
    <Wrapper>
      <ContentInput>
        <div className="content__search">
          <BiSearch className="custtom__icon--size"/>
          {/* <form > */}
            <InputSearch 
              // id="query"
              // name="query"
              value={searchParams.get("query") ?? ""}
              placeholder="Search"
              onChange={handleChange }
              // onChange={({target}) => handleChange(target.value) }
            />
          {/* </form> */}
        </div>
        <BiCart className="custtom__icon"/>
      </ContentInput>
      <Category>
        {TypeCategory.map((item)=>
          <div key={item}>{capitalize(item)}</div>
        )}
      </Category>
      <ContentCard>
        <FoodCards DataProducts={products}/>
      </ContentCard>
    </Wrapper>
    
  )
}

export default SearchPage;
