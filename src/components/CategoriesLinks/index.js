// below comment line is required
// it tells babel how to convert properly
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import capitalize from "../../pages/SearchPage/utils";

function CategoriesLinks({ categories }) {
  const scrolled = useRef(0);
  const navBar = useRef();

  useEffect(() => {
    navBar.current.scroll({ left: scrolled.current });
  });

  const CategoriesContainer = styled.div`
    padding-inline: 1rem;
    padding-bottom: 2.18rem;
    display: flex;
    gap: 2.12rem;
    flex-wrap: nowrap;
    overflow-x: scroll;
  `;

  const linkStyle = css`
    position: relative;
    text-decoration: none;
    color: var(--gray-400);
    &.active {
      color: var(--accent-color);
      &::after {
        content: "";
        position: absolute;
        bottom: -0.625rem;
        left: -0.5rem;
        background-color: var(--accent-color);
        width: calc(100% + 1rem);
        height: 3px;
        border-radius: 5px;
      }
    }
  `;

  return (
    <CategoriesContainer
      onScroll={(event) => {
        scrolled.current = event.target.scrollLeft;
      }}
      ref={navBar}
    >
      {categories.map((item) => (
        <NavLink to={item} key={item} css={linkStyle}>
          {capitalize(item)}
        </NavLink>
      ))}
    </CategoriesContainer>
  );
}

export default CategoriesLinks;
