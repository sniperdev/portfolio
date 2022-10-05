import React from "react";
import "./Projects.css";
import ProjectItem from "./ProjectItem";
const Projects = () => {
  return (
    <div className={"py-10 text-center"}>
      <h1 className={"inline-block projects-underline mb-16 text-3xl"}>
        Projects
      </h1>

      <ProjectItem
        title={"Recipe App"}
        description={""}
        stack={["HTML5", "CSS", "JavaScript", "API"]}
        demoLink={"https://sniperdev.github.io/RecipeApp/"}
        sourceLink={"https://github.com/sniperdev/RecipeApp"}
        photoSrc={"./projectPhotos/img.png"}
      ></ProjectItem>
      <ProjectItem
        title={"Weather App"}
        description={""}
        stack={["React", "CSS", "API"]}
        demoLink={"https://sniperdev.github.io/WeatherApp/"}
        sourceLink={"https://github.com/sniperdev/WeatherApp"}
        photoSrc={"./projectPhotos/img_1.png"}
      ></ProjectItem>
      <ProjectItem
        title={"Quiz App"}
        description={""}
        stack={["HTML5", "CSS", "JavaScript"]}
        demoLink={"https://sniperdev.github.io/QuizApp/"}
        sourceLink={"https://github.com/sniperdev/QuizApp"}
        photoSrc={"./projectPhotos/img_2.png"}
      ></ProjectItem>
    </div>
  );
};

export default Projects;
