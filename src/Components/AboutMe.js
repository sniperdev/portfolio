import React from "react";
import Pdf from "../igorspychala_resume.pdf";
import "./Header.css";
const AboutMe = () => {
  return (
    <div className={"my-10"}>
      <div className="flex h-6 py-1 rounded-t-md bg-slate-300">
        <div className={"h-4 w-4 mx-1 rounded-full bg-red-500 shadow"}></div>
        <div className={"h-4 w-4 mx-1 rounded-full bg-yellow-300 shadow"}></div>
        <div className={"h-4 w-4 mx-1 rounded-full bg-green-500 shadow"}></div>
      </div>
      <div className={"px-2 bg-slate-700 text-white"}>
        <div className={"py-4"}>
          <p>> Igor.currentLocation</p>
          <p className={"text-amber-200"}>"Poznan, PL"</p>
        </div>
        <div className={"py-4"}>
          <p>> Igor.contactInfo</p>
          <div className={"text-amber-200"}></div>
          ["
          <a
            href="mailto:igorspychalaa@gmail.com"
            className={"text-sky-500 hover:text-sky-600"}
          >
            igorspychalaa@gmail.com
          </a>
          ", "
          <a
            href="https://github.com/sniperdev"
            target={"_blank"}
            rel={"noreferrer"}
            className={"text-sky-500 hover:text-sky-600"}
          >
            github
          </a>
          "]
        </div>
        <div className={"py-4"}>
          <p>> Igor.resumé</p>"
          <a
            href={Pdf}
            target={"_blank"}
            rel={"noreferrer"}
            className={"text-sky-500 hover:text-sky-600"}
          >
            igorspychala.pdf
          </a>
          "
        </div>
        <div className={"py-4"}>
          <p>> Igor.interests</p>
          <p className={"text-amber-200"}>
            ["programming", "gaming", "biking"]
          </p>
        </div>
        <div className={"py-4"}>
          <p>> Igor.education</p>
          <p className={"text-amber-200"}>
            "Technical and Computer Science Education - Poznan University of
            Technology"
          </p>
        </div>
        <div className={"py-4"}>
          <p>> Igor.skills</p>
          <p className={"text-amber-200"}>
            ["React", "JavaScript", "git", "Scss", "HTML5", "CSS3",
            "TailwindCSS"]
          </p>
        </div>
        <div className={"py-4"}>
          >{" "}
          <span
            className={"typing w-2.5 h-5 translate-y-2 bg-white inline-block"}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
