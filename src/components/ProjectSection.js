import React from "react";
import { useState, useEffect } from "react";
import { GraphQLClient, gql } from "graphql-request";
import ProjectCard from "./ProjectCard";

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

function ProjectSection() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    graphAPI
      .request(QUERY)
      .then((data) => {
        setProjects(data.projects);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(projects);
  return (
    <div className="min-h-screen">
      <div className="container flex justify-center items-top columns-3 gap-12 flex-wrap">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            image={project.image.url}
            scrollable={project.scrollableThumbnail}
            description={project.description}
            livePreviewUrl={project.livePreview}
            gitUrl={project.gitUrl}
            behanceUrl={project.behanceUrl}
            tech={project.tech}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectSection;
