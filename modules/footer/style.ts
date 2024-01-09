import { css } from "@emotion/react";

export const footerCss = css`
  height: 45vh;
  width: 100%;
  position: relative;
  display: flex;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  flex-direction: column;
  padding: 6vh 10vw;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  overflow: hidden;
`;

export const footerImageCss = css`
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: transparent;
  opacity: 0.4;
  img {
    object-fit: cover;
  }
`;

export const footerLogoCss = css`
  display: flex;
  height: 25%;
  width: 120px;
  background-color: transparent;
  img {
    object-fit: contain;
    filter: invert(1);
  }
`;

export const footerMainCss = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 1;
  height: 100%;
  position: relative;
  border-bottom: 1px solid grey;
`;

export const footerInfoCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  p {
    width: 76.5%;
    height: 50%;
    margin-top: 5vh;
    font-weight: 300;
    line-height: 1.5rem;
    font-size: 0.8rem;
    letter-spacing: 0.01rem;
  }
`;

export const footerContactCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;
  height: 70%;
  h2 {
    height: 20%;
    text-transform: capitalize;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .touch {
    height: 80%;
    display: flex;
    flex-direction: column;
    > a {
      text-decoration: none;
      color: white;
      height: 30%;
      font-size: 10px;
    }
  }
`;

export const footerSubCss = css`
  height: 10%;
  width: 100%;
  .rights {
    width: 100%;
    .copyright {
      text-decoration: none;
      color: var(--white-col);
      text-transform: uppercase;
      font-size: 0.8rem;
      font-weight: 500;
      letter-spacing: 0.25rem;
    }
  }
`;
