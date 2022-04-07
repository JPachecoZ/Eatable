// below comment line is required
// it tells babel how to convert properly
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const colors = css`
  :root {
    --gray-100: #f6f6f9;
    --gray-200: #b8b8bb;
    --gray-300: #333333;
    --gray-400: #9A9A9D;
    --gray-500: #ADADAF;
    --accent-color: #fa4a0c;
    --bg-1: var(--gray-100);
    --bg-2: white;
    --text-color: var(--gray-300);
    --error: Crimson;
  }

  body {
    background-color: var(--bg-color);
    color: var(--gray-300);
  }
`;
