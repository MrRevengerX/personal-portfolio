import React from "react";

import htmlLogo from "../assets/svg/html-logo.svg";
import cssLogo from "../assets/svg/css-logo.svg";
import graphQL from "../assets/svg/graphql-logo.svg";
import jsLogo from "../assets/svg/js-logo.svg";
import reactLogo from "../assets/svg/react-logo.svg";
import wpLogo from "../assets/svg/wp-logo.svg";
import tailwindLogo from "../assets/svg/tailwind-logo.svg";
import nodeLogo from "../assets/svg/node-logo.svg";
import sassLogo from "../assets/svg/sass-logo.svg";
import tsLogo from "../assets/svg/ts-logo.svg";
import mongoLogo from "../assets/svg/mongo-logo.svg";
import nextjsLogo from "../assets/svg/nextjs-logo.svg";

function TechnicalSkills() {
  return (
    <div className="min-h-screen w-screen flex flex-col items-center flex-start py-5">
      <h2 className="text-3xl font-bold dark:text-white">Technical Skills</h2>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h5 className="dark:text-white text-2xl translate-y-3 bg-slate-100 dark:bg-gray-900 px-3">
          Web Dev
        </h5>
        <div className="ring-2 dark:ring-gray-800 ring-slate-300 rounded-xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5 lg:pt-10">
          <div className="text-sm tech-container bg-white drop-shadow-xl dark:bg-gray-800 bg-opacity-60 p-10 rounded-lg hover:bg-gray-200 dark:hover:bg-white transition-colors duration-200 ease-in-out flex flex-col justify-center items-center gap-2">
            <img className="w-10 h-10" src={reactLogo} alt="" />
            <p className="tech-name dark:text-white bottom-2 transition-colors duration-100 ease-in-out">
              React
            </p>
          </div>
          <div className="text-sm tech-container bg-white drop-shadow-xl dark:bg-gray-800 bg-opacity-60 p-10 rounded-lg hover:bg-gray-200 dark:hover:bg-white transition-colors duration-200 ease-in-out flex flex-col justify-center items-center gap-2">
            <img className="w-10 h-10" src={nextjsLogo} alt="" />
            <p className="tech-name dark:text-white bottom-2 transition-colors duration-100 ease-in-out">
              NextJS
            </p>
          </div>
          <div className="text-sm tech-container bg-white drop-shadow-xl dark:bg-gray-800 bg-opacity-60 p-10 rounded-lg hover:bg-gray-200 dark:hover:bg-white transition-colors duration-200 ease-in-out flex flex-col justify-center items-center gap-2">
            <img className="w-10 h-10" src={nodeLogo} alt="" />
            <p className="tech-name dark:text-white bottom-2 transition-colors duration-100 ease-in-out">
              NodeJS
            </p>
          </div>
          <div className="text-sm tech-container bg-white drop-shadow-xl dark:bg-gray-800 bg-opacity-60 p-10 rounded-lg hover:bg-gray-200 dark:hover:bg-white transition-colors duration-200 ease-in-out flex flex-col justify-center items-center gap-2">
            <img className="w-10 h-10" src={mongoLogo} alt="" />
            <p className="tech-name dark:text-white bottom-2 transition-colors duration-100 ease-in-out">
              MongoDB
            </p>
          </div>
          <div className="text-sm tech-container bg-white drop-shadow-xl dark:bg-gray-800 bg-opacity-60 p-10 rounded-lg hover:bg-gray-200 dark:hover:bg-white transition-colors duration-200 ease-in-out flex flex-col justify-center items-center gap-2">
            <img className="w-10 h-10" src={tailwindLogo} alt="" />
            <p className="tech-name dark:text-white bottom-2 transition-colors duration-100 ease-in-out">
              Tailwind
            </p>
          </div>
          <div className="text-sm tech-container bg-white drop-shadow-xl dark:bg-gray-800 bg-opacity-60 p-10 rounded-lg hover:bg-gray-200 dark:hover:bg-white transition-colors duration-200 ease-in-out flex flex-col justify-center items-center gap-2">
            <img className="w-10 h-10" src={sassLogo} alt="" />
            <p className="tech-name dark:text-white bottom-2 transition-colors duration-100 ease-in-out">
              SASS
            </p>
          </div>
          <div className="text-sm tech-container bg-white drop-shadow-xl dark:bg-gray-800 bg-opacity-60 p-10 rounded-lg hover:bg-gray-200 dark:hover:bg-white transition-colors duration-200 ease-in-out flex flex-col justify-center items-center gap-2">
            <img className="w-10 h-10" src={tsLogo} alt="" />
            <p className="tech-name dark:text-white bottom-2 transition-colors duration-100 ease-in-out">
              TypeScript
            </p>
          </div>
          <div className="text-sm tech-container bg-white drop-shadow-xl dark:bg-gray-800 bg-opacity-60 p-10 rounded-lg hover:bg-gray-200 dark:hover:bg-white transition-colors duration-200 ease-in-out flex flex-col justify-center items-center gap-2">
            <img className="w-10 h-10" src={graphQL} alt="" />
            <p className="tech-name dark:text-white bottom-2 transition-colors duration-100 ease-in-out">
              GraphQL
            </p>
          </div>
          <div className="text-sm tech-container bg-white drop-shadow-xl dark:bg-gray-800 bg-opacity-60 p-10 rounded-lg hover:bg-gray-200 dark:hover:bg-white transition-colors duration-200 ease-in-out flex flex-col justify-center items-center gap-2">
            <img className="w-10 h-10" src={wpLogo} alt="" />
            <p className="tech-name dark:text-white bottom-2 transition-colors duration-100 ease-in-out">
              Wordpress
            </p>
          </div>
          <div className="text-sm tech-container bg-white drop-shadow-xl dark:bg-gray-800 bg-opacity-60 p-10 rounded-lg hover:bg-gray-200 dark:hover:bg-white transition-colors duration-200 ease-in-out flex flex-col justify-center items-center gap-2">
            <img className="w-10 h-10" src={jsLogo} alt="" />
            <p className="tech-name dark:text-white bottom-2 transition-colors duration-100 ease-in-out">
              Vanilla JS
            </p>
          </div>
          <div className="text-sm tech-container bg-white drop-shadow-xl dark:bg-gray-800 bg-opacity-60 p-10 rounded-lg hover:bg-gray-200 dark:hover:bg-white transition-colors duration-200 ease-in-out flex flex-col justify-center items-center gap-2">
            <img className="w-10 h-10" src={cssLogo} alt="" />
            <p className="tech-name dark:text-white bottom-2 transition-colors duration-100 ease-in-out">
              CSS
            </p>
          </div>
          <div className="text-sm tech-container bg-white drop-shadow-xl dark:bg-gray-800 bg-opacity-60 p-10 rounded-lg hover:bg-gray-200 dark:hover:bg-white transition-colors duration-200 ease-in-out flex flex-col justify-center items-center gap-2">
            <img className="w-10 h-10" src={htmlLogo} alt="" />
            <p className="tech-name dark:text-white bottom-2 transition-colors duration-100 ease-in-out">
              HTML
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnicalSkills;
