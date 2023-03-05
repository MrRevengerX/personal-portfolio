import React from "react";

import projectThumb from "../assets/img/project-2-thumb.png";
import htmlLogo from "../assets/svg/html-logo.svg";
import cssLogo from "../assets/svg/css-logo.svg";
import jsLogo from "../assets/svg/js-logo.svg";
import reactLogo from "../assets/svg/react-logo.svg";
import wpLogo from "../assets/svg/wp-logo.svg";
import figmaLogo from "../assets/svg/figma-logo.svg";

function projectCard() {
  return (
    <div className="project-card p-2 w-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="aspect-video rounded-sm overflow-hidden">
        <img
          className="project-image transition-all duration-[4s] ease-in-out"
          src={projectThumb}
          alt=""
        />
      </div>
      <div className="p-2">
        <a href="#">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Mozilla & FOSS IIT Official Website
          </h5>
        </a>
        <p className="mb-1 text-sm font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <div className="pt-2">
          <h6 className=" text-white font-bold">Technologies</h6>
          <div className="flex gap-2 pt-1 flex-wrap">
            <img className="technologies-icon" src={figmaLogo} alt="" />
            <img className="technologies-icon" src={htmlLogo} alt="" />
            <img className="technologies-icon" src={cssLogo} alt="" />
            <img className="technologies-icon" src={jsLogo} alt="" />
            <img className="technologies-icon" src={reactLogo} alt="" />
            <img className="technologies-icon" src={wpLogo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default projectCard;
