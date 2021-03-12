import React from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/react";
import color from "./colors";

const Spin = keyframes`
to{
  transform: rotate(360deg);
}
`;

const Navbar = () => (
  <header
    css={css`
      background-color: ${color.dark};
      padding: 15px;
    `}
  >
    <Link
      css={css`
        &:hover {
          text-decoration: underline;
          text-decoration-color: white;
        }
      `}
      to="/"
    >
      Adopt Me!
    </Link>
    <span
      css={css`
        animation: 1s ${Spin} linear infinite;
        font-size: 50px;
      `}
      role="img"
      aria-label="logo"
    >
      🐩
    </span>
  </header>
);

export default Navbar;
