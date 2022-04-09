import SearchPage from "../pages/SearchPage";
import FoodPage from "../pages/FoodPage"
import {HiHome} from "react-icons/hi"
import {FiUser} from "react-icons/fi"
import {GiBackwardTime} from "react-icons/gi"
import styled from "@emotion/styled";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";


const Navbar = styled.div`
  display: flex;
  padding: 2.19rem 3.32rem;
  justify-content: space-around;
  font-size: 24.76px;
  color: var(--gray-500);
  position: sticky;
  bottom: 0;
  /* top: 0; */
  z-index: 2;
  background-color: var(--gray-100);
  & > a {
    font-size: 24.76px;
    color: var(--gray-500);
  }
`;

const activeStyle = ({ isActive }) =>
  isActive ? { color: "#FA4A0C", filter: "drop-shadow(0px 6px 20px rgba(215, 56, 0, 0.4))" } : undefined;


function AuthenticatedApp() {
  
  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigate to="/home" />} />
        <Route path="/home" element={<SearchPage/>}>
          <Route path="/home/:category" element={<SearchPage/>}/>
        </Route>
        <Route path="/product/:productId" element={<FoodPage/>} />
        <Route path="/profile" element={<div>Profile</div>} />
        <Route path="/orders" element={<div>Orders-Card</div>} />
      </Routes>
      <Navbar>
        <NavLink to="home"  style={activeStyle}>
          <HiHome />
        </NavLink>
        <NavLink to="profile" style={activeStyle}>
          <FiUser />
        </NavLink>
        <NavLink to="orders" style={activeStyle}>
          <GiBackwardTime />
        </NavLink>
      </Navbar>
    </div>
  );
}

export default AuthenticatedApp;
