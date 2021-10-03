import React from "react";

const Forecast = ({ current }) => {
  console.log(current);
  return (
    <div className="flex items-center justify-between w-10/12 h-12 p-3 border-2 rounded-b-lg border-primary">
      {current ? (
        <>
          <div className="text-xs text-left text-primary">
            Capital : {current.name}
          </div>
          <div className="flex items-center">
            <span className="text-xs text-primary">
              {" "}
              {`${current.main.temp}°`}{" "}
            </span>
            <img
              alt="icon"
              src={` http://openweathermap.org/img/wn/${current.weather[0].icon}.png`}
            ></img>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Forecast;
