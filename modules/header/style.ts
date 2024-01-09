import { css } from "@emotion/react";

export const header = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5vw;
  background-color: #d9d9d9;
  height: 10vh;
  * {
    transition: all 0.3s ease;
  }
  .header-links {
    display: flex;
    gap: 25px;
    a {
      text-decoration: none;
      color: #738487;
      font-size: 1.15rem;
      &:hover {
        color: black;
        text-shadow: 0 0 2px black;
      }
    }
  }
`;

export const logoContCss = css`
  height: 50%;
  width: 120px;
`;
