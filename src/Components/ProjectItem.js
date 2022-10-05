import React from "react";
import StackItem from "./StackItem";

const ProjectItem = ({ title, description, stack, demoLink, sourceLink }) => {
  const stackList = () => {
    return <StackItem text={"Test"}></StackItem>;
  };
  return (
    <div className={"my-10 flex-col bg-white rounded-md overflow-hidden"}>
      <img
        src={require("./projectPhotos/img.png")}
        alt={"test"}
        className={""}
      />
      <div>
        <h1>{title}</h1>
        <h2>{description}</h2>
        <div className={"py-3"}>{stackList}</div>
        <div className={"my-4"}>
          <a
            href={demoLink}
            className={"p-4 mx-2 bg-blue-600 rounded-lg text-white"}
          >
            Live Demo
          </a>
          <a
            href={sourceLink}
            className={"p-4 mx-2 bg-blue-600 rounded-lg text-white"}
          >
            View Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
