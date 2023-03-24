import React from "react";

import flutterLogo from "../assets/svg/flutter-logo.svg";
import kotlinLogo from "../assets/svg/kotlin-logo.svg";
import phpLogo from "../assets/svg/php-logo.svg";
import jsLogo from "../assets/svg/js-logo.svg";
import reactLogo from "../assets/svg/react-logo.svg";
import wpLogo from "../assets/svg/wp-logo.svg";
import tailwindLogo from "../assets/svg/tailwind-logo.svg";
import nodeLogo from "../assets/svg/node-logo.svg";
import sassLogo from "../assets/svg/sass-logo.svg";
import tsLogo from "../assets/svg/ts-logo.svg";
import mongoLogo from "../assets/svg/mongo-logo.svg";
import nextjsLogo from "../assets/svg/nextjs-logo.svg";

import aeLogo from "../assets/svg/ae-logo.svg";
import prLogo from "../assets/svg/pr-logo.svg";
import psLogo from "../assets/svg/ps-logo.svg";
import figmaLogo from "../assets/svg/figma-logo.svg";
import aiLogo from "../assets/svg/ai-logo.svg";
import xdLogo from "../assets/svg/xd-logo.svg";

import pythonLogo from "../assets/svg/python-logo.svg";
import javaLogo from "../assets/svg/java-logo.svg";
import rLogo from "../assets/svg/r-logo.svg";

function TechnicalSkills() {
  return (
    <div
      id="techSkills"
      className="min-h-screen flex flex-col items-center flex-start py-5 pt-24 "
    >
      <h2 className="text-3xl md:text-5xl font-bold text-my-purple-400 text-center mb-3 lg:mb-8">
        &lt;
        <span className="text-gray-900 dark:text-white">TechnicalSkills</span>
        &#47;&gt;
      </h2>
      <div className="flex gap-7 flex-wrap items-center justify-center py-6">
        <div className="flex flex-col items-center">
          <h5 className="dark:text-white text-2xl translate-y-3 bg-violet-200 dark:bg-gray-900 px-3">
            Mobile & Web
          </h5>
          <div className="ring-2 dark:ring-gray-800 ring-violet-400 rounded-xl grid grid-cols-2 md:grid-cols-3 gap-4 p-5 lg:pt-10">
            <div className="text-sm tech-container bg-white drop-shadow-xl dark:bg-gray-800 bg-opacity-60 px-9 py-7 rounded-lg hover:bg-violet-200 dark:hover:bg-white transition-colors duration-200 ease-in-out flex flex-col justify-center items-center gap-2">
              <img className="w-10 h-10" src={reactLogo} alt="" />
              <p className="tech-name dark:text-white bottom-2 transition-colors duration-100 ease-in-out">
                React
              </p>
            </div>
            <div className="text-sm tech-container bg-white drop-shadow-xl dark:bg-gray-800 bg-opacity-60 px-9 py-7 rounded-lg hover:bg-violet-200 dark:hover:bg-white transition-colors duration-200 ease-in-out flex flex-col justify-center items-center gap-2">
              <img className="w-10 h-10" src={nextjsLogo} alt="" />
              <p className="tech-name dark:text-white bottom-2 transition-colors duration-100 ease-in-out">
                NextJS
              </p>
            </div>
            <div className="text-sm tech-container bg-white drop-shadow-xl dark:bg-gray-800 bg-opacity-60 px-9 py-7 rounded-lg hover:bg-violet-200 dark:hover:bg-white transition-colors duration-200 ease-in-out flex flex-col justify-center items-center gap-2">
              <img className="w-10 h-10" src={nodeLogo} alt="" />
              <p className="tech-name dark:text-white bottom-2 transition-colors duration-100 ease-in-out">
                NodeJS
              </p>
            </div>
            <div className="text-sm tech-container bg-white drop-shadow-xl dark:bg-gray-800 bg-opacity-60 px-9 py-7 rounded-lg hover:bg-violet-200 dark:hover:bg-white transition-colors duration-200 ease-in-out flex flex-col justify-center items-center gap-2">
              <img className="w-10 h-10" src={flutterLogo} alt="" />
              <p className="tech-name dark:text-white bottom-2 transition-colors duration-100 ease-in-out">
                Flutter
              </p>
            </div>
            <div className="text-sm tech-container bg-white drop-shadow-xl dark:bg-gray-800 bg-opacity-60 px-9 py-7 rounded-lg hover:bg-violet-200 dark:hover:bg-white transition-colors duration-200 ease-in-out flex flex-col justify-center items-center gap-2">
              <img className="w-10 h-10" src={kotlinLogo} alt="" />
              <p className="tech-name dark:text-white bottom-2 transition-colors duration-100 ease-in-out">
                Kotlin
              </p>
            </div>
            <div className="text-sm tech-container bg-white drop-shadow-xl dark:bg-gray-800 bg-opacity-60 px-9 py-7 rounded-lg hover:bg-violet-200 dark:hover:bg-white transition-colors duration-200 ease-in-out flex flex-col justify-center items-center gap-2">
              <img className="w-10 h-10" src={mongoLogo} alt="" />
              <p className="tech-name dark:text-white bottom-2 transition-colors duration-100 ease-in-out">
                MongoDB
              </p>
            </div>
            <div className="text-sm tech-container bg-white drop-shadow-xl dark:bg-gray-800 bg-opacity-60 px-9 py-7 rounded-lg hover:bg-violet-200 dark:hover:bg-white transition-colors duration-200 ease-in-out flex flex-col justify-center items-center gap-2">
              <img className="w-10 h-10" src={tailwindLogo} alt="" />
              <p className="tech-name dark:text-white bottom-2 transition-colors duration-100 ease-in-out">
                Tailwind
              </p>
            </div>
            <div className="text-sm tech-container bg-white drop-shadow-xl dark:bg-gray-800 bg-opacity-60 px-9 py-7 rounded-lg hover:bg-violet-200 dark:hover:bg-white transition-colors duration-200 ease-in-out flex flex-col justify-center items-center gap-2">
              <img className="w-10 h-10" src={sassLogo} alt="" />
              <p className="tech-name dark:text-white bottom-2 transition-colors duration-100 ease-in-out">
                SASS
              </p>
            </div>
            <div className="text-sm tech-container bg-white drop-shadow-xl dark:bg-gray-800 bg-opacity-60 px-9 py-7 rounded-lg hover:bg-violet-200 dark:hover:bg-white transition-colors duration-200 ease-in-out flex flex-col justify-center items-center gap-2">
              <img className="w-10 h-10" src={tsLogo} alt="" />
              <p className="tech-name dark:text-white bottom-2 transition-colors duration-100 ease-in-out">
                TypeScript
              </p>
            </div>
            <div className="text-sm tech-container bg-white drop-shadow-xl dark:bg-gray-800 bg-opacity-60 px-9 py-7 rounded-lg hover:bg-violet-200 dark:hover:bg-white transition-colors duration-200 ease-in-out flex flex-col justify-center items-center gap-2">
              <img className="w-10 h-10" src={phpLogo} alt="" />
              <p className="tech-name dark:text-white bottom-2 transition-colors duration-100 ease-in-out">
                PHP
              </p>
            </div>
            <div className="text-sm tech-container bg-white drop-shadow-xl dark:bg-gray-800 bg-opacity-60 px-9 py-7 rounded-lg hover:bg-violet-200 dark:hover:bg-white transition-colors duration-200 ease-in-out flex flex-col justify-center items-center gap-2">
              <img className="w-10 h-10" src={wpLogo} alt="" />
              <p className="tech-name dark:text-white bottom-2 transition-colors duration-100 ease-in-out">
                Wordpress
              </p>
            </div>
            <div className="text-sm tech-container bg-white drop-shadow-xl dark:bg-gray-800 bg-opacity-60 px-9 py-7 rounded-lg hover:bg-violet-200 dark:hover:bg-white transition-colors duration-200 ease-in-out flex flex-col justify-center items-center gap-2">
              <img className="w-10 h-10" src={jsLogo} alt="" />
              <p className="tech-name dark:text-white bottom-2 transition-colors duration-100 ease-in-out">
                Vanilla JS
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 lg:gap-0">
          <div className="flex flex-col items-center">
            <h5 className="dark:text-white text-2xl translate-y-3 bg-violet-200 dark:bg-gray-900 px-3 ">
              Programming
            </h5>
            <div className="ring-2 dark:ring-gray-800 ring-violet-400 rounded-xl grid grid-cols-2 md:grid-cols-3 gap-4 p-5 lg:pt-10">
              <div className="text-sm tech-container bg-white drop-shadow-xl dark:bg-gray-800 bg-opacity-60 py-9 px-12 rounded-lg hover:bg-violet-200 dark:hover:bg-white transition-colors duration-200 ease-in-out flex flex-col justify-center items-center gap-2">
                <img className="w-10 h-10" src={pythonLogo} alt="" />
                <p className="tech-name dark:text-white bottom-2 transition-colors duration-100 ease-in-out">
                  Python
                </p>
              </div>
              <div className="text-sm tech-container bg-white drop-shadow-xl dark:bg-gray-800 bg-opacity-60 py-9 px-12 rounded-lg hover:bg-violet-200 dark:hover:bg-white transition-colors duration-200 ease-in-out flex flex-col justify-center items-center gap-2">
                <img className="w-10 h-10" src={javaLogo} alt="" />
                <p className="tech-name max-w-[80px] text-center dark:text-white bottom-2 transition-colors duration-100 ease-in-out">
                  Java
                </p>
              </div>
              <div className="text-sm tech-container bg-white drop-shadow-xl dark:bg-gray-800 bg-opacity-60 py-9 px-12 rounded-lg hover:bg-violet-200 dark:hover:bg-white transition-colors duration-200 ease-in-out flex flex-col justify-center items-center gap-2">
                <img className="w-10 h-10" src={rLogo} alt="" />
                <p className="tech-name max-w-[80px] text-center dark:text-white bottom-2 transition-colors duration-100 ease-in-out">
                  R
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h5 className="dark:text-white text-2xl translate-y-3 bg-violet-200 dark:bg-gray-900 px-3">
              Design
            </h5>
            <div className="ring-2 dark:ring-gray-800 ring-violet-400 rounded-xl grid grid-cols-2 md:grid-cols-3 gap-4 p-5 lg:pt-10">
              <div className="text-sm tech-container bg-white drop-shadow-xl dark:bg-gray-800 bg-opacity-60 p-10 rounded-lg hover:bg-violet-200 dark:hover:bg-white transition-colors duration-200 ease-in-out flex flex-col justify-center items-center gap-2">
                <img className="w-10 h-10" src={figmaLogo} alt="" />
                <p className="tech-name dark:text-white bottom-2 transition-colors duration-100 ease-in-out">
                  Figma
                </p>
              </div>
              <div className="text-sm tech-container bg-white drop-shadow-xl dark:bg-gray-800 bg-opacity-60 p-10 rounded-lg hover:bg-violet-200 dark:hover:bg-white transition-colors duration-200 ease-in-out flex flex-col justify-center items-center gap-2">
                <img className="w-10 h-10" src={psLogo} alt="" />
                <p className="tech-name max-w-[80px] text-center dark:text-white bottom-2 transition-colors duration-100 ease-in-out">
                  Adobe Ps
                </p>
              </div>
              <div className="text-sm tech-container bg-white drop-shadow-xl dark:bg-gray-800 bg-opacity-60 p-10 rounded-lg hover:bg-violet-200 dark:hover:bg-white transition-colors duration-200 ease-in-out flex flex-col justify-center items-center gap-2">
                <img className="w-10 h-10" src={aiLogo} alt="" />
                <p className="tech-name max-w-[80px] text-center dark:text-white bottom-2 transition-colors duration-100 ease-in-out">
                  Adobe Il
                </p>
              </div>
              <div className="text-sm tech-container bg-white drop-shadow-xl dark:bg-gray-800 bg-opacity-60 p-10 rounded-lg hover:bg-violet-200 dark:hover:bg-white transition-colors duration-200 ease-in-out flex flex-col justify-center items-center gap-2">
                <img className="w-10 h-10" src={aeLogo} alt="" />
                <p className="tech-name max-w-[80px] text-center dark:text-white bottom-2 transition-colors duration-100 ease-in-out">
                  Adobe Ae
                </p>
              </div>
              <div className="text-sm tech-container bg-white drop-shadow-xl dark:bg-gray-800 bg-opacity-60 p-10 rounded-lg hover:bg-violet-200 dark:hover:bg-white transition-colors duration-200 ease-in-out flex flex-col justify-center items-center gap-2">
                <img className="w-10 h-10" src={prLogo} alt="" />
                <p className="tech-name max-w-[80px] text-center dark:text-white bottom-2 transition-colors duration-100 ease-in-out">
                  Adobe Pr
                </p>
              </div>
              <div className="text-sm tech-container bg-white drop-shadow-xl dark:bg-gray-800 bg-opacity-60 p-10 rounded-lg hover:bg-violet-200 dark:hover:bg-white transition-colors duration-200 ease-in-out flex flex-col justify-center items-center gap-2">
                <img className="w-10 h-10" src={xdLogo} alt="" />
                <p className="tech-name max-w-[80px] text-center dark:text-white bottom-2 transition-colors duration-100 ease-in-out">
                  Adobe XD
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnicalSkills;
