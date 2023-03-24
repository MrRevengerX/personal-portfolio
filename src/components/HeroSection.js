import React, { useEffect } from "react";
import DrawBlob, { BlobType, generatePoints } from "blob-animated";
import devImage from "../assets/img/mrDev.jpg";
import devImage2 from "../assets/img/project-1-thumb.png";

import { FaCloudDownloadAlt } from "react-icons/fa";

function HeroSection() {
  useEffect(() => {
    const Blob = new DrawBlob({
      canvas: document.getElementById("imageCanvas"),
      maskedElement: document.getElementById("devImg"),
      vectors: generatePoints({ sides: 6 }),
      speed: 800,
      scramble: 0.05,
    });
  }, []);
  return (
    <div className="container lg:max-w-6xl lg:px-12 overflow-hidden">
      <div className=" flex flex-col md:flex-row min-h-screen items-center justify-center gap-10 md:gap-0">
        <div className="text-center basis-2/3 flex flex-col gap-1 items-center md:text-left md:items-start">
          <p className="text-2xl dark:text-white">Howdy!</p>
          <h1 className="text-[48px] leading-tight dark:text-white font-bold text-10 capitalize sm:text-[64px]">
            <div className="text-my-purple-400">I'm Ravindu</div>
            Senarathna
          </h1>
          <h2 className="text-lg dark:text-white capitalize sm:text-2xl">
            software engineer undergrduate
          </h2>
          <a
            href="#"
            className="mt-4 px-7 w-42 py-2 flex justify-center items-center gap-3 bg-my-purple-400 rounded-md text-lg hover:bg-white hover:text-black transition duration-200 ease-in-out"
          >
            <FaCloudDownloadAlt /> Resume
          </a>
        </div>
        <div className="basis-1/3 flex justify-center">
          <div className="relative">
            <img id="devImg" src={devImage} style={{ display: "none" }} />
            <canvas
              className="absolute w-[280px] md:w-[350px] z-10"
              id="imageCanvas"
            />
            <div
              class="absolute tk-blob w-[280px] md:w-[350px] p-4 "
              style={{ "--amount": 2, "--time": "25s" }}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
