import styled from "@emotion/styled";
import capitalize from "./utils";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/products-service";
import FoodCards from "../../components/FoodCard";
import ContentSearch from "../../components/ContentSearch"
import { Link, useSearchParams } from "react-router-dom";
import Text from "../../components/Text";


const Wrapper = styled.div`
  display: flex;
  flex-direction:column;
  gap: 2.18rem;
  padding: 3rem 2.5rem;
  margin: 0 auto;
  min-height: 100vh;
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
  width: 100%;
`;

function SearchPage(){

  const [products, setProducts] = useState([]); // Todo la data
  const [search, setSearch] = useState([]); // Data filtrada
  const [searchParams, setSearchParams] = useSearchParams();
  const querySearch = searchParams.get("query");

  useEffect(() => {
    getProducts()
    .then(response => {
      setProducts(response);

      if(querySearch){
        setSearch(filtrar(querySearch, response))
      } else {
        setSearch(response)
      }})
      .catch((error) => console.log(error));
  }, [querySearch]);

  function handleChange(e){
    setSearchParams({query: e.target.value});
    filtrar(e.target.value, search)
  }

  const filtrar=(value, search)=>{
    if(!search) return true;
    var results = search.filter((item)=>{
      return item.name.toLowerCase().includes(value.toLowerCase());
    })
    setProducts(results)
  }
  
  const category = products.map((item) => item.category )
  const TypeCategory = [...new Set(category)]
  
  // const filterCategory = products.filter((item)=> item.category === "peruvian")

  return (
    
    <Wrapper>
      <ContentSearch querySearch={querySearch} onhandleChange={handleChange}/>
      {querySearch ? 
        <Text size="xl" bold centered>{`Found ${products.length} results`}</Text> : 
        <Category>
          {TypeCategory.map((item)=>
            <Link to={item} key={item}>{capitalize(item)}</Link>
          )}
        </Category>
      }
      <ContentCard>
        <FoodCards products={products}/>
      </ContentCard>
    </Wrapper>
  );
}

export default SearchPage;
