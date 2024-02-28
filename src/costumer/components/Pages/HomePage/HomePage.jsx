import React from "react";
import MainCarousel from "../../HomeCarousel/MainCarousel";
import HomeSectionProductList from "../../HomeSectionProductlist/HomeSectionProductList";

const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionProductList />
      </div>
    </div>
  );
};

export default HomePage;
