import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectSection(props) {
  // console.log(projects);
  return (
    <div className="min-h-screen mb-16 lg:mb-18 mt-12 lg:mt-20">
      <h2 className="text-3xl md:text-5xl font-bold text-my-purple-400 text-center mb-0 lg:mb-8">
        &lt;<span className="text-gray-900 dark:text-white">Projects</span>
        &#47;&gt;
      </h2>
      <div className="container flex justify-center items-top columns-3 gap-12 flex-wrap pt-10">
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
