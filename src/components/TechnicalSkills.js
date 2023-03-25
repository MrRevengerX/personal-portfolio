import React from "react";
import { motion } from "framer-motion";

import webMobileData from "../assets/data/mobileWeb";
import designData from "../assets/data/design";
import programingData from "../assets/data/programing";

function TechnicalSkills() {
  const techContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };
  const techBlock = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <div
      id="techSkills"
      className="min-h-screen flex flex-col items-center flex-start py-5 pt-24 "
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl font-bold text-my-purple-400 text-center mb-3 lg:mb-8"
      >
        &lt;
        <span className="text-gray-900 dark:text-white">TechnicalSkills</span>
        &#47;&gt;
      </motion.h2>
      <div className="flex gap-7 flex-wrap items-center justify-center py-6">
        <motion.div
          variants={techContainer}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col items-center"
        >
          <h5 className="dark:text-white text-2xl translate-y-3 bg-violet-200 dark:bg-gray-900 px-3">
            Mobile & Web
          </h5>
          <div className="ring-2 dark:ring-gray-800 ring-violet-400 rounded-xl grid grid-cols-2 md:grid-cols-3 gap-4 p-5 lg:pt-10">
            {webMobileData.map((tech) => (
              <motion.div
                variants={techBlock}
                className="text-sm tech-container bg-white drop-shadow-xl dark:bg-gray-800 bg-opacity-60 px-9 py-7 rounded-lg hover:bg-violet-200 dark:hover:bg-white transition-colors duration-200 ease-in-out flex flex-col justify-center items-center gap-2"
              >
                <img className="w-10 h-10" src={tech.image} alt="" />
                <p className="tech-name dark:text-white bottom-2 transition-colors duration-100 ease-in-out">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <div className="flex flex-col gap-8 lg:gap-0">
          <motion.div
            variants={techContainer}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 1 }}
            className="flex flex-col items-center"
          >
            <h5 className="dark:text-white text-2xl translate-y-3 bg-violet-200 dark:bg-gray-900 px-3 ">
              Programming
            </h5>
            <div className="ring-2 dark:ring-gray-800 ring-violet-400 rounded-xl grid grid-cols-2 md:grid-cols-3 gap-4 p-5 lg:pt-10">
              {programingData.map((tech) => (
                <motion.div
                  variants={techBlock}
                  className="text-sm tech-container bg-white drop-shadow-xl dark:bg-gray-800 bg-opacity-60 py-9 px-12 rounded-lg hover:bg-violet-200 dark:hover:bg-white transition-colors duration-200 ease-in-out flex flex-col justify-center items-center gap-2"
                >
                  <img className="w-10 h-10" src={tech.image} alt="" />
                  <p className="tech-name dark:text-white bottom-2 transition-colors duration-100 ease-in-out">
                    {tech.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            variants={techContainer}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.6 }}
            className="flex flex-col items-center"
          >
            <h5 className="dark:text-white text-2xl translate-y-3 bg-violet-200 dark:bg-gray-900 px-3">
              Design
            </h5>
            <div className="ring-2 dark:ring-gray-800 ring-violet-400 rounded-xl grid grid-cols-2 md:grid-cols-3 gap-4 p-5 lg:pt-10">
              {designData.map((tech) => (
                <motion.div
                  variants={techBlock}
                  className="text-sm tech-container bg-white drop-shadow-xl dark:bg-gray-800 bg-opacity-60 p-10 rounded-lg hover:bg-violet-200 dark:hover:bg-white transition-colors duration-200 ease-in-out flex flex-col justify-center items-center gap-2"
                >
                  <img className="w-10 h-10" src={tech.image} alt="" />
                  <p className="tech-name dark:text-white bottom-2 transition-colors duration-100 ease-in-out">
                    {tech.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default TechnicalSkills;
