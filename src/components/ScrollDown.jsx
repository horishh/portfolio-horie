import { Link } from "react-scroll";
import { RiArrowDownDoubleFill } from "react-icons/ri";
import React from "react";

const ScrollDown = () => {
  return (
    <div className="absolute bottom-[5%] sm:bottom-[8%] left-1/2 -translate-x-1/2">
      <Link to="projects" smooth={true} duration={600} offset={-120}>
        <div className="flex flex-col items-center cursor-pointer">
          <span
            className="mb-2 text-gray-600"
            style={{ color: "var(--accent-color)" }}
          >
            Scroll Down
          </span>
          <RiArrowDownDoubleFill
            className="text-2xl animate-bounce"
            style={{ color: "var(--accent-color)" }}
          />
        </div>
      </Link>
    </div>
  );
};

export default ScrollDown;
