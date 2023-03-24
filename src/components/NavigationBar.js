import React from "react";
import siteLogo from "../assets/svg/revengerx-logo.svg";
import { FaBehance, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

function NavigationBar() {
  return (
    <nav className="sticky top-0 z-20 bg-black w-screen -mb-24 backdrop-filter backdrop-blur-lg bg-opacity-30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          <div className="w-44 fill-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1101.41 256.28"
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
            </svg>
          </div>

          <div className="flex gap-10 dark:text-white text-2xl">
            <a
              href="https://www.linkedin.com/in/ravindusenruwan/"
              className="hover:text-my-purple-400 ease-in-out transition-colors duration-200"
              target={"_blank"}
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.behance.net/ravindusenruwan"
              className="hover:text-my-purple-400 ease-in-out transition-colors duration-200"
              target={"_blank"}
            >
              <FaBehance />
            </a>
            <a
              href="https://github.com/MrRevengerX"
              className="hover:text-my-purple-400 ease-in-out transition-colors duration-200"
              target={"_blank"}
            >
              <FaGithub />
            </a>
            <a
              href="mailto:ravindusenruwan@gmail.com"
              className="hover:text-my-purple-400 ease-in-out transition-colors duration-200"
              target={"_blank"}
            >
              <MdAlternateEmail />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
