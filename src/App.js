import React from "react";
import TechnicalSkills from "./components/TechnicalSkills";
import ProjectSection from "./components/ProjectSection";

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen w-screen bg-slate-100 dark:bg-gray-900 ">
      <TechnicalSkills />
      <ProjectSection />
    </div>
  );
}

export default App;
