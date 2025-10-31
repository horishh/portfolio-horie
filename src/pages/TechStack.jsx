import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  { name: "HTML, CSS", level: 95, gradient: "from-[#3494E6] to-[#EC6EAD]" },
  { name: "TAILWIND", level: 65, gradient: "from-[#3494E6] to-[#EC6EAD]" },
  { name: "REACT", level: 50, gradient: "from-[#3494E6] to-[#EC6EAD]" },
  { name: "TYPESCRIPT", level: 45, gradient: "from-[#3494E6] to-[#EC6EAD]" },
  { name: "GIT", level: 40, gradient: "from-[#3494E6] to-[#EC6EAD]" },
  { name: "JAVASCRIPT", level: 35, gradient: "from-[#3494E6] to-[#EC6EAD]" },
];

const TechStack = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        width: `${skills[i].level}%`,
        opacity: 1,
        transition: {
          delay: i * 0.15,
          type: "spring",
          stiffness: 60,
          damping: 12,
        },
      }));
    }
  }, [inView, controls]);

  return (
    <div
      className="relative mx-10 sm:mx-0 bg-white rounded-3xl p-6 sm:p-8 sm:w-full w-full md:max-w-[8500px]
       flex flex-col md:flex-row sm:items-center justify-between 
      gap-8 overflow-hidden mt-10 mb-20 text-gray-800 transition-colors duration-500"
      style={{
        color: "var(--text-color)",
        backgroundColor: "var(--section-color)",
        boxShadow: "var(--shadow)",
      }}
    >
      <div
        ref={ref}
        className="flex flex-col sm:w-full w-[75%] md:w-2/3 space-y-4"
      >
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="w-full relative h-6 flex items-center"
          >
            <div className="h-4 w-full rounded-full overflow-hidden">
              <motion.div
                className={`h-2 rounded-full bg-gradient-to-r ${skill.gradient}`}
                custom={index}
                initial={{ width: "0%", opacity: 0 }}
                animate={controls}
                style={{
                  background:
                    "linear-gradient(to right, var(--gradient-from), var(--gradient-to))",
                }}
              />
            </div>

            <span
              className="absolute top-3/4 -translate-y-1/2 text-[13px] font-semibold whitespace-nowrap"
              style={{
                left: `calc(${skills[index].level}% + 6px)`,
                transform: "translateY(-50%)",
              }}
            >
              {skill.name}
            </span>
          </div>
        ))}
      </div>

      <div className="md:w-1/3 flex justify-center items-center">
        <h2
          className="text-3xl font-bold leading-tight text-center bg-gradient-to-r from-[#3494E6] to-[#EC6EAD] text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--gradient-from), var(--gradient-to))",
          }}
        >
          TECH
          <br />
          <span
            className="text-gray-700"
            style={{
              color: "var(--text-color)",
            }}
          >
            STACK
          </span>
        </h2>
      </div>

      <div
        className="absolute top-0 right-0 h-full w-[6px] rounded-tr-3xl rounded-br-3xl"
        style={{
          background:
            "linear-gradient(to bottom, var(--gradient-from), var(--gradient-to))",
        }}
      />
    </div>
  );
};

export default TechStack;
