import React from "react";
import "./Projects.css";
import ProjectItem from "./ProjectItem";
const Projects = () => {
  return (
    <div className={"py-10 text-center"}>
      <h1 className={"inline-block projects-underline mb-16"}>Projects</h1>
      <ProjectItem
        title={"test"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,\n" +
          "          delectus ea facere illum libero neque quam quos tempore ut vitae.\n" +
          "          Alias deleniti, illum mollitia nulla odit perspiciatis quam quis\n" +
          "          sapiente!"
        }
        stack={["html5", "css", "js"]}
        demoLink={"test"}
        sourceLink={"test"}
      ></ProjectItem>
    </div>
  );
};

export default Projects;
