import React from "react";

const HomeSectionCard = ({ product }) => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-xlg overflow-hidden w-[15rem] mx-3 ">
      <div className="h-[13rem] w-[10rem] border border-black">
        <img
          className="object-cover object-top w-full h-full"
          src="http://surl.li/raebu"
          alt=""
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg  font-bold text-grey-900" class>
          {product.name}
        </h3>
        <p className="text-md font-medium text-grey">Price:{product.price}</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
