import React from "react";
import { FaGithub, FaBehance } from "react-icons/fa";
import { HiGlobeAlt } from "react-icons/hi";
import Tooltip from "@mui/material/Tooltip";

function projectCard(props) {
  const tech = [...props.tech];

  return (
    <div className="relative project-card p-2 w-72 bg-white rounded-lg drop-shadow-xl  dark:bg-gray-800 ">
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
      <div className="project-btns absolute flex flex-col gap-1 bottom-2 -right-6 lg:opacity-0 transition-all duration-200 ease-in-out">
        {props.livePreviewUrl && (
          <a href={props.livePreviewUrl} target="_blank" rel="noreferrer">
            <div className="w-10 h-10 bg-white dark:bg-gray-800 dark:border-gray-700 rounded-br-lg rounded-tr-lg flex items-center justify-center text-gray-900 dark:text-white hover:text-my-purple-400 transition-colors duration-200 ease-in-out">
              <HiGlobeAlt />
            </div>
          </a>
        )}

        {props.gitUrl && (
          <a href={props.gitUrl} target="_blank" rel="noreferrer">
            <div className="w-10 h-10 bg-white dark:bg-gray-800 dark:border-gray-700 rounded-br-lg rounded-tr-lg flex items-center justify-center text-gray-900 dark:text-white hover:text-my-purple-400 transition-colors duration-200 ease-in-out">
              <FaGithub />
            </div>
          </a>
        )}

        {props.behanceUrl && (
          <a href={props.behanceUrl} target="_blank" rel="noreferrer">
            <div className="w-10 h-10 bg-white dark:bg-gray-800 dark:border-gray-700 rounded-br-lg rounded-tr-lg flex items-center justify-center text-gray-900 dark:text-white hover:text-my-purple-400 transition-colors duration-200 ease-in-out">
              <FaBehance />
            </div>
          </a>
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
          <h6 className=" text-gray-900 dark:text-white font-bold">
            Technologies
          </h6>
          <div className="flex gap-2 pt-1 flex-wrap">
            {tech.map((tech) => (
              <Tooltip title={tech.name} arrow>
                <img className="technologies-icon" src={tech.url} alt="" />
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default projectCard;
