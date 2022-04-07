// below comment line is required
// it tells babel how to convert properly
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import background from "../../assets/images/background.jpg";
import LoadingIcon from "../../components/LoadingIcon";
import Logo from "../../components/Logo";

function LoadingPage() {
  const containerStyle = css`
    height: 100vh;
    display: grid;
    place-content: center;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
  `;

  const circleStyle = css`
    width: min(80vw, 375px);
    height: min(80vw, 375px);
    padding-inline: 20%;
    padding-top: 15%;
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: var(--bg-2);
  `;

  return (
    <div css={containerStyle}>
      <main css={circleStyle}>
        <Logo />
        <LoadingIcon />
      </main>
    </div>
  );
}

export default LoadingPage;
