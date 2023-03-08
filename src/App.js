import React from "react";
import TechnicalSkills from "./components/TechnicalSkills";
import ProjectSection from "./components/ProjectSection";

import { useState, useEffect } from "react";
import { GraphQLClient, gql } from "graphql-request";

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
    techSkills {
      category
      technology {
        name
        url
      }
    }
  }
`;

function App() {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    graphAPI
      .request(QUERY)
      .then((data) => {
        setProjects(data.projects);
        setSkills(data.techSkills);
      })
      .catch((err) => console.log("fuck ", err));
  }, []);

  console.log(projects);
  console.log(skills);

  // console.log(skills[0].technology);

  console.log(projects);
  return (
    <div className="flex flex-col items-center min-h-screen w-screen bg-slate-100 dark:bg-gray-900 ">
      <TechnicalSkills skills={skills} />
      <ProjectSection projects={projects} />
    </div>
  );
}

export default App;
