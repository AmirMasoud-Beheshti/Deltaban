import React from "react";

const Navigation = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <i className="fas fa-bars text-primary text-3xl"></i>
      </div>
      <div>
        <i className="flex justify-center items-center rounded-lg fas fa-user text-3xl bg-primary text-white w-12 h-12"></i>
      </div>
    </div>
  );
};

export default Navigation;
