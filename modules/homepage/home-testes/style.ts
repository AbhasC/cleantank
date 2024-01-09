import { css } from "@emotion/react";

export const homeTestiMainCss = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 60vh;
  justify-content: center;
  align-items: center;
  background-color: #f4f3f1;
`;

export const homeTestiHeadCss = css`
  display: flex;
  font-size: 1.1rem;
  margin-bottom: 3vh;
  font-weight: 500;
`;

export const homeTestiTextCss = css`
  display: flex;
  font-size: 2rem;
  margin-bottom: 3vh;
  font-weight: 800;
`;

export const homeTestiRectCss = css`
  display: flex;
  height: 40%;
  width: 85%;
  min-width: 600px;
  overflow: hidden;
  margin: 0 4vh;
`;

export const homeTestiCarouselCss = css`
  height: 100%;
  width: 100%;
  * {
    transition: all 0.3s ease-in-out;
  }
  ul {
    height: 100%;
    li {
      padding: 20px 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      div {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 80%;
        border-radius: 15px;
        box-shadow: 0 0 10px black;
        justify-content: center;
        align-items: center;
      }
    }
  }
  button {
    background-color: transparent;
    &::before {
      color: #575756;
      font-size: 2rem;
      font-weight: 900;
    }
    &:hover {
      background-color: transparent;
      &::before {
        color: black;
      }
    }
  }
`;

export const homeTestiActHeadCss = css`
  font-size: 2rem;
  margin-bottom: 2vh;
  font-weight: 800;
  color: #c0cbcd;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    height: 2px;
    width: 50px;
    background-color: #c0cbcd;
    top: 50%;
    left: -60px;
  }
  &::after {
    content: "";
    position: absolute;
    height: 2px;
    width: 50px;
    background-color: #c0cbcd;
    top: 50%;
    right: -60px;
  }
`;

export const homeTestiActParaCss = css`
  font-size: 1.25rem;
  font-weight: 400;
`;
