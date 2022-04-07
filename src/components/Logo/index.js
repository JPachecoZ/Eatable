// below comment line is required
// it tells babel how to convert properly
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import logo from "../../assets/images/eatable-logo.png";

function Logo() {
  const containerStyle = css`
    width: 100%;
  `;

  const imgStyle = css`
    width: 100%;
  `;

  const textStyle = css`
    margin-top: 0.75rem;
    font-size: 0.625rem;
    color: var(--accent-color);
    text-align: center;
  `;

  return (
    <div css={containerStyle}>
      <img src={logo} alt="eatable logo" css={imgStyle} />
      <p css={textStyle}>Food for Everyone</p>
    </div>
  );
}

export default Logo;
