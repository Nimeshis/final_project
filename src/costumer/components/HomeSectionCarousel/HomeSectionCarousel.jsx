import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { cpu } from "../../../Data/Cpu";

const HomeSectionCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5.5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const items = cpu.splice(0, 10).map((item, index) => (
    <div key={index}>
      <HomeSectionCard product={item} />
    </div>
  ));

  return <Carousel responsive={responsive}>{items}</Carousel>;
};

export default HomeSectionCarousel;
