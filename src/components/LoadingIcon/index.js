// below comment line is required
// it tells babel how to convert properly
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function LoadingIcon() {
  const loadingStyle = css`
    font-size: 1.75rem;
    color: var(--accent-color);
    animation: spin 1s linear infinite;

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `;

  return <AiOutlineLoading3Quarters css={loadingStyle} />;
}

export default LoadingIcon;
