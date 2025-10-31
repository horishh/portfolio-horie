import React, { useState, useEffect } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

const funTexts = [
  "Brace yourself… more projects incoming!",
  "Creativity loading… please wait!",
  "Good things take time…",
  "Almost there!",
];

const Projects = () => {
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % funTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative rounded-3xl h-auto mt-10 max-w-[850px] flex flex-col md:flex-row items-center p-8 gap-8 mx-10 overflow-hidden sm:mx-auto transition-colors duration-500 "
      style={{
        backgroundColor: "var(--section-color)",
        color: "var(--text-color)",
        boxShadow: "var(--shadow)",
      }}
    >
      <div
        className="absolute right-0 top-0 h-full w-[6px] rounded-l-md"
        style={{
          background:
            "linear-gradient(to bottom, var(--gradient-from), var(--gradient-to))",
        }}
      />

      <h2 className="text-3xl font-bold leading-tight text-center sm:hidden">
        <span
          className="text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--gradient-from), var(--gradient-to))",
          }}
        >
          PROJECTS
        </span>
      </h2>

      <section className="flex gap-6 flex-wrap justify-center">
        {projects.map((proje, index) => (
          <ProjectCard
            key={index}
            title={proje.title}
            image={proje.image}
            description={proje.description}
            link={proje.link}
            sourceCode={proje.sourceCode}
          />
        ))}
      </section>

      <div className="flex flex-col items-center w-[300px] h-auto sm:mt-4 p-4">
        <h2 className="text-xl font-bold animate-bounce mb-1">
          Coming soon… ⏳
        </h2>
        <p className="text-center transition-opacity duration-500 h-5">
          {funTexts[currentText]}
        </p>
      </div>

      <h2 className="hidden sm:block text-3xl font-bold leading-tight text-center">
        <span
          className="text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--gradient-from), var(--gradient-to))",
          }}
        >
          PROJECTS
        </span>
      </h2>
    </motion.div>
  );
};

export default Projects;
