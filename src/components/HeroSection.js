import React, { useEffect, useState } from "react";
import Typed from "react-typed";
import { motion } from "framer-motion";
import DrawBlob, { BlobType, generatePoints } from "blob-animated";
import devImage from "../assets/img/mrDev.jpg";

import { GraphQLClient, gql } from "graphql-request";

import { FaBehance, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaCloudDownloadAlt } from "react-icons/fa";

function HeroSection() {
  const graphAPI = new GraphQLClient(
    "https://ap-south-1.cdn.hygraph.com/content/clev7igrw3ou201ue8pg2czh2/master"
  );

  const QUERY = gql`
    {
      resumes {
        resumeLink
      }
    }
  `;
  const socialIconsContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 1.3,
      },
    },
  };
  const socialIcon = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  useEffect(() => {
    const Blob = new DrawBlob({
      canvas: document.getElementById("imageCanvas"),
      maskedElement: document.getElementById("devImg"),
      vectors: generatePoints({ sides: 6 }),
      speed: 800,
      scramble: 0.05,
    });
  }, []);

  const [resumeLink, setresumeLink] = useState([]);

  useEffect(() => {
    graphAPI
      .request(QUERY)
      .then((data) => {
        setresumeLink(data.resumes);
      })
      .catch((err) => console.log("fuck ", err));
  }, []);
  console.log(resumeLink[0]);

  function downloadResume() {
    window.open(resumeLink[0].resumeLink);
  }
  return (
    <div className="container lg:max-w-6xl lg:px-12 overflow-hidden">
      <div className=" flex flex-col lg:flex-row min-h-screen items-center justify-center gap-10 lg:gap-0">
        <div className="text-center basis-2/3 flex flex-col gap-1 items-center lg:text-left lg:items-start">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-2xl dark:text-white"
          >
            Howdy!
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-[48px] leading-tight dark:text-white font-bold text-10 capitalize sm:text-[64px]"
          >
            <div className="text-my-purple-400">I'm Ravindu</div>
            Senarathna
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.9 }}
            className="text-md dark:text-white capitalize sm:text-2xl"
          >
            <Typed
              strings={[
                "software engineer undergrduate",
                "web developer",
                "UI/UX designer",
                "video editor",
                "graphic designer",
                "Anime Weeb",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </motion.h2>
          <motion.div
            variants={socialIconsContainer}
            initial="hidden"
            animate="show"
            className="md:hidden flex mt-4 gap-5 dark:text-white text-2xl"
          >
            <motion.a
              variants={socialIcon}
              href="https://www.linkedin.com/in/ravindusenruwan/"
              className="hover:text-my-purple-400 ease-in-out transition-colors duration-200"
              target={"_blank"}
            >
              <FaLinkedinIn />
            </motion.a>
            <motion.a
              variants={socialIcon}
              href="https://www.behance.net/ravindusenruwan"
              className="hover:text-my-purple-400 ease-in-out transition-colors duration-200"
              target={"_blank"}
            >
              <FaBehance />
            </motion.a>
            <motion.a
              variants={socialIcon}
              href="https://github.com/MrRevengerX"
              className="hover:text-my-purple-400 ease-in-out transition-colors duration-200"
              target={"_blank"}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              variants={socialIcon}
              href="mailto:ravindusenruwan@gmail.com"
              className="hover:text-my-purple-400 ease-in-out transition-colors duration-200"
              target={"_blank"}
            >
              <MdAlternateEmail />
            </motion.a>
          </motion.div>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            onClick={downloadResume}
            className="mt-4 cursor-pointer px-7 w-42 py-2 flex justify-center items-center gap-3 text-white dark:text-gray-900 bg-my-purple-400 rounded-md text-lg hover:bg-gray-900 dark:hover:bg-white dark:hover:text-black transition duration-200 ease-in-out"
            target={"_blank"}
          >
            <FaCloudDownloadAlt /> Resume
          </motion.a>
        </div>
        <div className="basis-1/3 flex justify-center">
          <div className="relative">
            <img
              id="devImg"
              alt="Ravindu Senarathna"
              src={devImage}
              style={{ display: "none" }}
            />
            <motion.canvas
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="absolute w-[280px] md:w-[350px] z-10"
              id="imageCanvas"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
              class="absolute tk-blob w-[280px] md:w-[350px] p-4 "
              style={{ "--amount": 2, "--time": "35s" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 927 926.1">
                <path
                  d="M898.7 157.1c56.3 102 16.6 249.3-26.1 379.8-42.8 130.5-88.3 244-184.8 314.3-96.5 70.4-243.5 97.6-380.4 51.7C170.5 856.7 43.9 737.5 10.2 595.3c-34-142.2 25-307.4 128.1-420C241.6 62.6 389.5 2.5 539.6.5 690-1.2 842.4 55.3 898.7 157.1z"
                  fill="none"
                  stroke="#B85EE6"
                  stroke-width="3"
                  stroke-miterlimit="10"
                  stroke-opacity="1"
                ></path>
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.3 }}
        className="hidden lg:block"
        id="scroll-btn"
        href="#techSkills"
      ></motion.a>
    </div>
  );
}

export default HeroSection;
