import React from "react";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className={"flex justify-center gap-8 p-4 sm:justify-end sm:pr-10"}>
      <a href="src/Components/NavBar#" className={"navA"}>
        Projects
      </a>
      <a href="src/Components/NavBar#" className={"navA"}>
        Contact
      </a>
    </div>
  );
};

export default NavBar;
