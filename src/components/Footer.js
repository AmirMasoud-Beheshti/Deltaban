import React from "react";

const Footer = ({ icons }) => {
  const renderIcon = icons.map((icon, index) => {
    return (
      <div key={index}>
        <i
          className={`text-2xl  ${icon.icon} ${
            icon.title === "Plus"
              ? "text-white bg-primary w-12 h-12 flex justify-center items-center rounded-full"
              : " text-footer "
          }
          `}
        ></i>
      </div>
    );
  });
  return (
    <div className="fixed h-14 w-screen bg-secondary bottom-0 left-0 flex justify-evenly items-center">
      {renderIcon}
    </div>
  );
};

export default Footer;
