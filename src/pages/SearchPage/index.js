import { BiArrowBack, BiSearch } from "react-icons/bi";
import { BiCart } from "react-icons/bi";
import styled from "@emotion/styled";
import InputSearch from "../../components/InputSearch";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/products-service";
import { Link, Outlet, useParams, useSearchParams } from "react-router-dom";
import CategoriesLinks from "../../components/CategoriesLinks";

const Wrapper = styled.div`
  padding: 3rem 2.5rem;
  margin: 0 auto;
  min-height: 100vh;
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
  .custtom__icon--size {
    width: 18px;
    height: 18px;
  }
  .custtom__icon {
    color: var(--gray-200);
    width: 24px;
    height: 24px;
  }
`;

function SearchPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useParams();
  const query = searchParams.get("query");
  const currentCategory = params.category;

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const filteredByCategory = currentCategory
      ? products.filter((product) => {
          return product.category === currentCategory;
        })
      : products;

    let timeOutId;
    if (query) {
      timeOutId = setTimeout(() => {
        setFilteredProducts(filtrar(query, filteredByCategory));
      }, 300);
    } else {
      setFilteredProducts(filteredByCategory);
    }
    return () => {
      clearTimeout(timeOutId);
    };
  }, [query, products, currentCategory]);

  function handleChange(event) {
    setSearchParams({ query: event.target.value });
  }

  const filtrar = (value, arrToSearch) => {
    const results = arrToSearch.filter((item) => {
      return item.name.toLowerCase().includes(value.toLowerCase());
    });
    return results;
  };

  const categories = [
    ...new Set(products.map((item) => item.category.toLowerCase())),
  ];

  return (
    <Wrapper>
      <ContentInput>
        <label htmlFor="query" className="content__search">
          {query ? (
            <BiArrowBack onClick={() => setSearchParams({})} />
          ) : (
            <BiSearch className="custtom__icon--size" />
          )}
          <InputSearch
            id="query"
            value={searchParams.get("query") ?? ""}
            placeholder="Search"
            onChange={handleChange}
          />
        </label>
        <Link to="/cart">
          <BiCart className="custtom__icon" />
        </Link>
      </ContentInput>
      <CategoriesLinks {...{ categories }} />
      <Outlet context={{ products: filteredProducts }} />
    </Wrapper>
  );
}

export default SearchPage;
