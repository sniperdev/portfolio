import "./Projects.css";
import ProjectItem from "./ProjectItem";
const Projects = () => {
  return (
    <div className={"py-10 text-center"}>
      <h1 className={"inline-block projects-underline mb-16 text-3xl"}>
        Projects
      </h1>
      <ProjectItem
        title={"Angular Recipe App"}
        description={""}
        stack={["Angular", "Angular Materials", "TypeScript", "API"]}
        demoLink={"https://sniperdev.github.io/recipe-app-angular/"}
        sourceLink={"https://github.com/sniperdev/recipe-app-angular"}
        photoSrc={"./projectPhotos/img_3.png"}
      ></ProjectItem>
      <ProjectItem
        title={"Lifeguard Scheduler App"}
        description={""}
        stack={["React", "React Router", "TypeScript", "API"]}
        demoLink={"https://sniperdev.github.io/wopr-scheduler-cv/"}
        sourceLink={"https://github.com/sniperdev/wopr-scheduler-cv"}
        photoSrc={"./projectPhotos/img_4.png"}
      ></ProjectItem>
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
