import React from "react";
import Forecast from "./Forecast";

const ImageList = ({ country, current }) => {
  console.log(current);
  const renderImage = country.map((image, index) => {
    return (
      <div key={index} className="relative w-1/2 ">
        <img
          className="w-10/12 rounded-t-lg h-60"
          alt={image.name}
          src={image.path}
        ></img>
        <h3 className="absolute font-semibold text-white top-2 left-3 ">
          {image.name}
        </h3>
        <Forecast current={current[index] ? current[index] : null} />
      </div>
    );
  });
  //
  return <div className="flex w-screen mt-5 -ml-6">{renderImage}</div>;
};

export default ImageList;
