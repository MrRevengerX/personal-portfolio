import React from "react";
import TechnicalSkills from "./components/TechnicalSkills";
import ProjectSection from "./components/ProjectSection";
import "./assets/css/blobz.min.css";

import { useState, useEffect } from "react";
import { GraphQLClient, gql } from "graphql-request";
import HeroSection from "./components/HeroSection";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

const graphAPI = new GraphQLClient(
  "https://ap-south-1.cdn.hygraph.com/content/clev7igrw3ou201ue8pg2czh2/master"
);

const QUERY = gql`
  {
    projects {
      id
      name
      scrollableThumbnail
      image {
        url
      }
      description
      livePreview
      gitUrl
      behanceUrl
      tech {
        url
        name
      }
    }
  }
`;

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    graphAPI
      .request(QUERY)
      .then((data) => {
        setProjects(data.projects);
      })
      .catch((err) => console.log("fuck ", err));
  }, []);

  console.log(projects);

  return (
    <div className="flex flex-col items-center min-h-screen bg-violet-200 dark:bg-gray-900 ">
      <NavigationBar />
      <HeroSection />
      <TechnicalSkills />
      <ProjectSection projects={projects} />
      <Footer />
    </div>
  );
}

export default App;
