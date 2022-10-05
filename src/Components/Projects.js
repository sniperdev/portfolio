import React from "react";
import "./Projects.css";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div className={"py-10 text-center"}>
      <h1 className={"inline-block projects-underline"}>Projects</h1>
      <ProjectItem></ProjectItem>
    </div>
  );
};

export default Projects;
