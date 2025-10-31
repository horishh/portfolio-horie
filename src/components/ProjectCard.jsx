import { FaGithub } from "react-icons/fa";
import React from "react"; // Navbar.jsx, App.jsx, Home.jsx vb.

const ProjectCard = ({ title, image, description, link, sourceCode }) => {
  return (
    <div
      className="w-60 h-auto rounded-2xl flex flex-col items-center text-center pb-5 transition-transform duration-300 hover:scale-102"
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
        boxShadow: "var(--shadow)",
        transition: "all 0.3s ease",
      }}
    >
      <img
        className="w-full h-auto object-cover rounded-t-2xl mb-3"
        src={image}
        alt={title}
      />
      <h2 className="mb-1 font-bold leading-tight uppercase text-[18px]">
        {title}
      </h2>
      <p className="leading-tight text-[12px] px-2 mb-3">{description}</p>

      <div className="flex gap-3 mt-2">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center border border-[rgb(53,53,53)] rounded-full leading-[1] h-6 text-[12px] px-3 w-22 transition-all duration-300 hover:bg-[rgb(53,53,53)] hover:text-white hover:scale-105"
          style={{
            borderColor: "var(--border-color)",
          }}
        >
          Live Demo
        </a>

        <a
          href={sourceCode}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group flex items-center justify-center border rounded-full  leading-[1] h-6 text-[12px] px-3 w-22 transition-all duration-300 hover:bg-[rgb(53,53,53)] hover:text-white hover:scale-105"
          style={{
            borderColor: "var(--border-color)",
          }}
        >
          <span className="transition-opacity duration-300 opacity-100 group-hover:opacity-0">
            Github
          </span>

          <FaGithub
            size={16}
            className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
