import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

function ProjectSection(props) {
  const projectContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };
  const projectAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  // console.log(projects);
  return (
    <div className="min-h-screen mb-16 lg:mb-18 mt-12 lg:mt-20">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl font-bold text-my-purple-400 text-center mb-0 lg:mb-8"
      >
        &lt;<span className="text-gray-900 dark:text-white">Projects</span>
        &#47;&gt;
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container flex justify-center items-top gap-12 flex-wrap pt-10"
      >
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
      </motion.div>
    </div>
  );
}

export default ProjectSection;
