import React from "react";
import { useState } from "react";


const SearchBox = () => {
const [text, setText] = useState('');

const onInputHandler = (e) => {
  setText(e.target.value);
}

return(
  <div className="flex justify-center mt-5 w-full items-center ">
    <input className="w-10/12 p-2 bg-secondary rounded-lg h-12" onInput={onInputHandler} value={text} placeholder="Search Here..."/>
    <i className="fas fa-search bg-primary flex justify-center items-center w-12 h-12 text-white rounded-lg "></i>
  </div>
);
}

export default SearchBox;