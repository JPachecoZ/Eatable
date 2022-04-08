// below comment line is required
// it tells babel how to convert properly
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Text({ size, bold, color, centered, children, ...rest }) {
  let fontSize;
  let lineHeight;

  switch (size) {
    case "xs":
      fontSize = "0.875rem";
      lineHeight = "1rem";
      break;
    case "m":
      fontSize = "1.125rem";
      lineHeight = "1.375rem";
      break;
    case "l":
      fontSize = "1.375rem";
      lineHeight = "1.75rem";
      break;
    case "xl":
      fontSize = "1.75rem";
      lineHeight = "2.2rem";
      break;
    default:
      fontSize = "1rem";
      lineHeight = "1.25rem";
      break;
  }

  const style = css`
    font-size: ${fontSize};
    line-height: ${lineHeight};
    font-weight: ${bold ? "600" : "400"};
    ${color && `color: ${color};`}
    ${centered && `text-align: center;`}
  `;

  return <p css={style}>{children}</p>;
}

export default Text;
