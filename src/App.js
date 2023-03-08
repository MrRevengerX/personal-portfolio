import React from "react";
import ProjectSection from "./components/ProjectSection";

import TechnicalSkills from "./components/TechnicalSkills";

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen w-screen bg-slate-100 dark:bg-gray-900 ">
      <TechnicalSkills />
      <ProjectSection />
    </div>
  );
}

export default App;
