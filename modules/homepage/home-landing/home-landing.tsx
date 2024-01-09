import {
  homeLanding,
  homeLandingPhotoCompCss,
  homeLandingText,
  homeLandingTextHeading,
  homeLandingTextLink,
  homeLandingTextPara
} from "./style";
import Link from "next/link";
import ImageComp from "@components/image-comp";

export default function HomeLanding() {
  return (
    <section className="home-landing" css={homeLanding}>
      <div className="home-landing-text" css={homeLandingText}>
        <h1 css={homeLandingTextHeading}>
          We keep your tanks <br /> clean and ready to use.
        </h1>
        <p css={homeLandingTextPara}>Tank cleaning and maintenance services</p>
        <Link href="/" css={homeLandingTextLink}>
          Explore us
        </Link>
      </div>
      <ImageComp
        src="/assets/images/tank.webp"
        alt="homepage tank"
        containerCss={homeLandingPhotoCompCss}
        height={1080}
        width={1980}
      />
    </section>
  );
}
