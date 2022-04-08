import SearchPage from "../pages/SearchPage";
import { HiHome } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import { GiBackwardTime } from "react-icons/gi";
import styled from "@emotion/styled";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { Fragment } from "react";

const Navbar = styled.nav`
  position: sticky;
  bottom: 0;
  padding: 2rem 3.25rem;
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  z-index: 2;
  background-color: var(--bg-1);
  & > a {
    color: var(--gray-500);
  }
  & .active {
    position: relative;
    color: var(--accent-color);
    &::after {
      content: "";
      position: absolute;
      top: -50%;
      right: -50%;
      height: 200%;
      width: 200%;
      display: block;
      background-image: radial-gradient(
        circle at center,
        rgba(215, 56, 0, 0.3) 0,
        transparent 60%,
        transparent 100%
      );
      border-radius: 50%;
    }
  }
`;

function AuthenticatedApp() {
  return (
    <Fragment>
      {/* <SearchPage/> */}
      {/* <FoodPage/> */}
      <Routes>
        <Route index element={<Navigate to="/home" />} />
        <Route path="*" element={<Navigate to="/home" />} />
        <Route path="/home" element={<SearchPage />} />
        <Route path="/profile" element={<div>Profile</div>} />
        <Route path="/orders" element={<div>Orders-Card</div>} />
      </Routes>
      <Navbar>
        <NavLink to="home">
          <HiHome />
        </NavLink>
        <NavLink to="profile">
          <FiUser />
        </NavLink>
        <NavLink to="orders">
          <GiBackwardTime />
        </NavLink>
      </Navbar>
    </Fragment>
  );
}

export default AuthenticatedApp;
