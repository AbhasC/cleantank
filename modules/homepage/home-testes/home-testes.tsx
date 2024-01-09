import {
  homeTestiActHeadCss,
  homeTestiActParaCss,
  homeTestiCarouselCss,
  homeTestiHeadCss,
  homeTestiMainCss,
  homeTestiRectCss,
  homeTestiTextCss
} from "@modules/homepage/home-testes/style";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  //   superLargeDesktop: {
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5
  //   },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  }
  // mobile: {
  //   breakpoint: { max: 464, min: 0 },
  //   items: 1
  // }
};

const companies = [
  { name: "BSNL", text: "Good work" },
  { name: "this", text: "Good work" },
  { name: "that", text: "Good work" },
  { name: "whut", text: "Good work" }
];

const mapper = (val: { name: string; text: string }, ind: number) => {
  return (
    <div key={ind}>
      <span css={homeTestiActHeadCss}>{val.name}</span>
      <p css={homeTestiActParaCss}>{val.text}</p>
    </div>
  );
};

export default function HomeTestes() {
  return (
    <section css={homeTestiMainCss}>
      <h2 css={homeTestiHeadCss}>TESTIMONIALS</h2>
      <span css={homeTestiTextCss}>They love us</span>
      <div css={homeTestiRectCss}>
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          // removeArrowOnDeviceType={}
          css={homeTestiCarouselCss}
        >
          {companies.map(mapper)}
        </Carousel>
      </div>
    </section>
  );
}
