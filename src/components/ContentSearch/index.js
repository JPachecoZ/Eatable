import { BiSearch } from "react-icons/bi";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";
import InputSearch from "../InputSearch";
import styled from "@emotion/styled";
import Back from "../Back";


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


function ContentSearch({querySearch, onhandleChange}) {

  return (
    <ContentInput>
        <div className="content__search">
          {querySearch ? <Back/> : <BiSearch className="custtom__icon--size"/>}
            <InputSearch 
              value={querySearch ?? ""}
              placeholder="Search"
              onChange={onhandleChange }
            />
        </div>
        <Link to="/cart"><BiCart className="custtom__icon"/></Link>
      </ContentInput>
  )
}

export default ContentSearch;