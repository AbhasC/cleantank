import { css } from "@emotion/react";

export const homeAbout = css`
  display: flex;
  width: 100%;
  height: 65vh;
  background-color: #738487;
  * {
    transition: all 0.4s ease;
  }
`;

export const homeAboutInfo = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 62.5%;
  color: white;
  padding: 0 5vw;
  h2 {
    font-size: 2rem;
    margin: 10vh 0 2vh 0;
  }
  p {
    font-size: 1.1rem;
    line-height: 30px;
    margin: 2vh 0;
  }
  a {
    color: white;
    border: 1px solid white;
    width: fit-content;
    padding: 15px;
    border-radius: 25px;
    text-decoration: none;
    margin: 2.5vh 0 7.5vh 0;
  }
`;

export const homeAboutTime = css`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  width: 25%;
  color: white;
  align-items: center;
  justify-content: center;
  .span-1 {
    /* margin-top: 10vh; */
    font-size: 2rem;
    font-weight: 700;
    z-index: 2;
  }
  .span-2 {
    font-size: 12.5rem;
    font-weight: 700;
    color: rgba(0, 0, 0, 0);
    -webkit-text-stroke: 3px white;
    z-index: 2;
  }
  .span-3 {
    font-size: 3rem;
    font-weight: 700;
    /* padding-bottom: 7.5vh; */
    z-index: 2;
  }
  &:hover {
    .span-2 {
      color: rgba(255, 255, 255, 1);
    }
  }
`;

export const aboutImageContCss = css`
  position: absolute;
  width: 100%;
  height: 100%;
  img {
    object-fit: cover;
  }
  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0, 52, 89, 0.9) 0%, rgba(0, 0, 0, 0) 100%);
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.25);
    z-index: 1;
  }
`;

export const homeAboutTag = css`
  display: flex;
  width: 140px;
  margin: auto;
  color: #8f9d9f;
  justify-content: flex-start;
  overflow: hidden;
  span {
    display: flex;
    align-self: center;
    font-size: 7rem;
    font-weight: 700;
    width: 50vh;
    -webkit-text-stroke: 3px #8f9d9f;
    writing-mode: vertical-lr;
  }
`;
