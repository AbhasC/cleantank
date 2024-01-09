import { css } from "@emotion/react";

export const homeLanding = css`
  height: 90vh;
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  background-color: #f4f3f1;
`;

export const homeLandingText = css`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 50%;
  align-self: center;
  padding-left: 5vw;
  z-index: 2;
`;

export const homeLandingTextHeading = css`
  font-size: clamp(3.25rem, 4.25vw, 5rem);
  letter-spacing: 3px;
  font-weight: 3000;
  -webkit-text-stroke: 2px black;
`;

export const homeLandingTextPara = css`
  font-size: 1.65rem;
  margin-top: 5vh;
  font-weight: 500;
`;

export const homeLandingTextLink = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12vh;
  width: 250px;
  min-height: 60px;
  border-radius: 45px;
  font-size: 1.5rem;
  font-weight: 800;
  text-decoration: none;
  color: black;
  border: 2px solid black;
`;

export const homeLandingPhotoCompCss = css`
  position: absolute;
  height: 100%;
  width: 70%;
  right: 0;
  top: 0;
  img {
    object-fit: cover;
    object-position: top center;
  }
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(0.25turn, #f4f3f1 25%, transparent, transparent);
  }
`;
