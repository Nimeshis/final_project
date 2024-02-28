import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

const HomeSectionCarousel = () => {

    const [activeIndex,setActiveInex]= useState(0);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5 },
  };
  const slidePrev=()=>setActiveInex(activeIndex-1);
  const slideNext=()=>setActiveInex(activeIndex+1);

  const syncActiveIndex=({item})=>setActiveInex(item);

  const items = [1, 1, 1,1,1,1,1,1,1,1, 1, 1].map((item) => <HomeSectionCard />);
  return (
    <div className="  ">
      <div className="relative p-5 ">
        <AliceCarousel
          items={items}
          disableButtonsControls
          autoPlayInterval={1000}
          infinite
          responsive={responsive}
          disableDotsControls
          onSlideChange={syncActiveIndex}
          activeIndex={activeIndex}
        />
        <Button
          variant="contained"
          className="z-50"
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg) ",
            bgcolor: "white",
          }}
          ria-label="next"
        >
          <ArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
        </Button>
        <Button
          variant="contained"
          className="z-50"
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(-90deg) ",
            bgcolor: "white",
          }}
          ria-label="next"
        >
          <ArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
        </Button>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
