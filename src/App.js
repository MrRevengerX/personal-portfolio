import React from "react";
import { FaGithub } from "react-icons/fa";

import coding from "./coding.gif";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container min-h-screen flex flex-col items-center justify-center bg-[#35B993]">
          <img src={coding} className="w-96" alt="" />
          <h1 className="font-bold text-[48px] text-white">
            Under Construction
          </h1>
          <h5 className="text-white text-lg">Wanna have a sneak peak?</h5>
          <a
            className="text-white flex justify-center items-center gap-2 bg-[#6e5494] px-3 py-2 rounded-lg mt-3 hover:bg-[#5d3c8f] transition-colors duration-300 ease-in-out"
            href="https://github.com/MrRevengerX/personal-portfolio"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub /> GitHub Repository
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
