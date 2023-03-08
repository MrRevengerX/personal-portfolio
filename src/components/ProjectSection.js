import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectSection(props) {
  // console.log(projects);
  return (
    <div className="min-h-screen">
      <div className="container flex justify-center items-top columns-3 gap-12 flex-wrap">
        {props.projects.map((project) => (
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
