import React from "react";

const Category = ({ category }) => {
  const renderList = category.map((item, index) => {
    return (
      <li className="flex flex-col" key={index}>
        <a
          href="index"
          className="flex bg-secondary text-primary text-2xl w-12 h-12 justify-center items-center rounded-lg"
        >
          <i className={item.icon}></i>
        </a>
        <span className="text-center text-sm">{item.title}</span>
      </li>
    );
  });

  return <ul className="flex justify-between mt-3">{renderList}</ul>;
};

export default Category;
