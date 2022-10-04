import React from "react";
import NavBar from "./NavBar";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <NavBar></NavBar>
      <h1 className={"text-blue-500 font-bold inline-block mr-1"}>
        > Igor Spychała
      </h1>
      <span className={"w-2 h-4 bg-amber-400 inline-block"}></span>
    </div>
  );
};

export default Header;
