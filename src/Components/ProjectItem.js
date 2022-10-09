import React from "react";
import StackItem from "./StackItem";
import { HiExternalLink } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";

const ProjectItem = ({
  title,
  description,
  stack,
  demoLink,
  sourceLink,
  photoSrc,
}) => {
  return (
    <div
      className={
        "my-10 md:h-96 flex flex-col bg-white rounded-md overflow-hidden md:flex-row"
      }
    >
      <img
        src={require("" + photoSrc)}
        alt={"test"}
        className={"md:w-2/5 object-cover"}
      />
      <div className={"flex flex-col grow justify-center px-10"}>
        <h1 className={"font-semibold text-3xl my-3"}>{title}</h1>
        <h2>{description}</h2>
        <div className={"py-3 my-2"}>
          {stack.map((element) => (
            <StackItem text={element} key={element} />
          ))}
        </div>
        <div
          className={
            "flex flex-col md:flex-row gap-3 justify-center my-5 mb-10"
          }
        >
          <a
            href={demoLink}
            target={"_blank"}
            rel={"noreferrer"}
            className={"p-4 mx-2 bg-blue-600 rounded-lg text-white"}
          >
            <HiExternalLink className={"inline -translate-y-0.5 mr-1"} />
            Live Demo
          </a>

          <a
            href={sourceLink}
            target={"_blank"}
            rel={"noreferrer"}
            className={
              "inline-block p-4 mx-2 bg-blue-600 rounded-lg text-white"
            }
          >
            <AiFillGithub className={"inline -translate-y-0.5 mr-1"} />
            View Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
