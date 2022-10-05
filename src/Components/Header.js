import React from "react";
import NavBar from "./NavBar";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className={"mt-20"}>
        <h1
          className={
            "inline text-blue-500 text-4xl font-medium tracking-widest"
          }
        >
          >Igor Spychała
        </h1>
        <span
          className={"typing w-4 h-9 translate-y-2 bg-blue-500 inline-block"}
        ></span>
      </div>
      <h2 className={"mt-10"}>
        I am a web developer. My passion is building simple, beautiful user
        experiences.
      </h2>
      <h3>Check out my side-projects below.</h3>
    </div>
  );
};

export default Header;
