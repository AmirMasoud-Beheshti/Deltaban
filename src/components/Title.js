import React from "react";

const Title = ({ text, textSize }) => {
  return (
    <h1 className={` mt-5 text-primary ${textSize}`}>{text}</h1>
  );
};

export default Title;
