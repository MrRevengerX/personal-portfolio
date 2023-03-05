import React from "react";

import projectThumb from "../assets/img/project-2-thumb.png";
import htmlLogo from "../assets/svg/html-logo.svg";
import graphQL from "../assets/svg/graphql-logo.svg";
import jsLogo from "../assets/svg/js-logo.svg";
import reactLogo from "../assets/svg/react-logo.svg";
import wpLogo from "../assets/svg/wp-logo.svg";
import figmaLogo from "../assets/svg/figma-logo.svg";
import nodeLogo from "../assets/svg/node-logo.svg";
import sassLogo from "../assets/svg/sass-logo.svg";
import tsLogo from "../assets/svg/ts-logo.svg";
import mongoLogo from "../assets/svg/mongo-logo.svg";
import expressLogo from "../assets/svg/express-logo.svg";

function projectCard(props) {
  const tech = [...props.tech];
  console.log(tech);
  return (
    <div className="project-card p-2 w-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="aspect-video rounded-sm overflow-hidden">
        {props.scrollable ? (
          <img
            className="project-image transition-all duration-[4s] ease-in-out"
            src={props.image}
            alt=""
          />
        ) : (
          <img className="" src={props.image} alt="" />
        )}
      </div>
      <div className="p-2">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.name}
        </h5>
        <p className="mb-1 text-sm font-normal text-gray-700 dark:text-gray-400">
          {props.description}
        </p>
        <div className="pt-2">
          <h6 className=" text-white font-bold">Technologies</h6>
          <div className="flex gap-2 pt-1 flex-wrap">
            {tech.map((tech) => (
              <img className="technologies-icon" src={tech.url} alt="" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default projectCard;
