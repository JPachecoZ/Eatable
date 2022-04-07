// below comment line is required
// it tells babel how to convert properly
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Fragment } from "react";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import Logo from "../components/Logo";
import Text from "../components/Text";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";

function UnauthenticatedApp() {
  const headerStyle = css`
    position: relative;
    height: 16rem;
    display: grid;
    place-content: center;
    border-radius: 0 0 30px 30px;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.06);
  `;

  const navStyle = css`
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    & a {
      padding-inline: 2rem;
      padding-bottom: 1rem;
      text-decoration: none;
      color: inherit;
    }

    & .active {
      border-bottom: 3px solid var(--accent-color);
    }
  `;

  const mainStyle = css``;

  return (
    <Fragment>
      <header css={headerStyle}>
        <Logo />
        <nav css={navStyle}>
          <NavLink to="/login">
            <Text size="m" bold>
              Login
            </Text>
          </NavLink>
          <NavLink to="/signup">
            <Text size="m" bold>
              Signup
            </Text>
          </NavLink>
        </nav>
      </header>
      <main css={mainStyle}>
        <Routes>
          <Route index element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </main>
    </Fragment>
    // <LoadingPage />
  );
}

export default UnauthenticatedApp;
