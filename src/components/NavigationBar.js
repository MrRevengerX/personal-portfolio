import { React, useEffect, useState } from "react";
import { FaBehance, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { motion } from "framer-motion";

function NavigationBar() {
  const socialIconsContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 1.5,
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
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);
  return (
    <nav
      className={`hidden md:block z-20 w-screen backdrop-filter bg-white dark:bg-black md:backdrop-blur-md bg-opacity-0 dark:bg-opacity-0 transition-all duration-300 ease-in-out md:-mb-24 ${
        scroll ? "fixed top-0 bg-opacity-30 dark:bg-opacity-30" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div
          className={`flex items-center justify-between transition-all duration-300 ease-in-out ${
            scroll ? "h-20" : "h-24"
          }`}
        >
          <div className="w-44 fill-black dark:fill-white">
            <motion.svg
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1101.41 256.28"
              className={"cursor-pointer"}
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              <g data-name="Layer 2">
                <path d="m16.34 54.06 116.29 63.05-20.69 43.71-59.65-9.26-46.16-29.68L0 163.95l40.44 71.49 36.09 4.63 20.83 16.21 25.06-11.03 3.13-20.16 11.44 2.73 12.12-10.89L150.2 128l-5.72-10.89 29.41-40.99 5.59-64.14-43.44-3.95L119.83 0l-11.71 6.54-41.67.13 2.86 20.56-30.36 22.34-22.61 4.49z" />
                <path d="m30.18 111.07 9.36-2.54 18.15 11.53 16.89-15.07 14.52 3 1.27 11.43-34.13 14.26-26.06-22.61z" />
                <path d="m54.61 106.49 2.4-1.91.96 1.73 1.81-.41.5 2.18-3.72 1.95-1.95-3.54z" />
                <text
                  transform="matrix(.98 0 -.19 .98 166.57 208.25)"
                  style={{
                    fontSize: "252.17px",
                    fontFamily: "Teko-Medium,Teko",
                    fontWeight: 500,
                  }}
                >
                  {"REVENGERX"}
                </text>
              </g>
            </motion.svg>
          </div>

          <motion.div
            variants={socialIconsContainer}
            initial="hidden"
            animate="show"
            className="flex gap-10 dark:text-white text-2xl"
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
              href="https://github.com/MrRevengerX"
              className="hover:text-my-purple-400 ease-in-out transition-colors duration-200"
              target={"_blank"}
            >
              <FaGithub />
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
              href="mailto:ravindusenruwan@gmail.com"
              className="hover:text-my-purple-400 ease-in-out transition-colors duration-200"
              target={"_blank"}
            >
              <MdAlternateEmail />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
