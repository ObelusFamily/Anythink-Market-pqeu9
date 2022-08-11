import React from "react";
import SearchBox from "./SearchBox";
import logo from "../../imgs/logo.png";

const Banner = () => {
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <SearchBox />
      </div>
    </div>
  );
};

export default Banner;
