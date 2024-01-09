import ImageComp from "@components/image-comp";
import { aboutImageContCss, homeAbout, homeAboutInfo, homeAboutTag, homeAboutTime } from "./style";

export default function HomeAbout() {
  return (
    <section className="home-about" css={homeAbout}>
      <div css={homeAboutInfo}>
        <h2>Providing high-quality services for our valued clients.</h2>
        <p>
          CleanTank aims to provide comprehensive tank cleaning, maintenance, and water health assessment services to
          residential, commercial, and industrial clients. Our mission is to ensure the cleanliness and optimal
          functioning of tanks, promoting water safety, environmental sustainability, and overall customer satisfaction.
        </p>
        <a href="/">Read more</a>
      </div>
      <div css={homeAboutTime}>
        <ImageComp src="/assets/images/aboutTank.webp" alt="About Tank" containerCss={aboutImageContCss} />
        <span className="span-1">More than</span>
        <span className="span-2">14</span>
        <span className="span-3">YEARS</span>
      </div>
      <div css={homeAboutTag}>
        <span>About Us</span>
      </div>
    </section>
  );
}
