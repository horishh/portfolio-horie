import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const About = () => {
  return (
    <motion.div
      className="flex justify-evenly mx-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <section
        className="rounded-3xl md:mb-10 mt-20 p-8 w-full max-w-[850px]
         
        flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden
        transition-colors duration-500"
        style={{
          backgroundColor: "var(--section-color)",
          color: "var(--text-color)",
          boxShadow: "var(--shadow)",
        }}
      >
        <div
          className="absolute left-0 top-0 h-full w-[6px] rounded-r-md"
          style={{
            background:
              "linear-gradient(to bottom, var(--gradient-from), var(--gradient-to))",
          }}
        />

        <h2 className="text-3xl font-bold leading-tight text-center md:text-left">
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--gradient-from), var(--gradient-to))",
            }}
          >
            ABOUT
          </span>
          <br />
          <span style={{ color: "var(--text-color)" }}>ME</span>
        </h2>

        <div className="max-w-[500px] text-[15px] leading-relaxed text-center md:text-left space-y-4">
          <p>
            I'm a{" "}
            <span
              className="font-semibold"
              style={{ color: "var(--gradient-to)" }}
            >
              React developer
            </span>{" "}
            with a degree in{" "}
            <span
              className="font-semibold"
              style={{ color: "var(--gradient-from)" }}
            >
              Computer Engineering
            </span>
            , focused on building responsive and efficient web applications that
            prioritize <span className="font-semibold">user experience</span>.
          </p>
          <p>
            Currently working as a{" "}
            <span
              className="font-semibold"
              style={{ color: "var(--gradient-to)" }}
            >
              freelance web administrator
            </span>{" "}
            while preparing for a full-time frontend role. I’m confident with{" "}
            <span
              className="font-semibold"
              style={{ color: "var(--gradient-from)" }}
            >
              React (Hooks, Context)
            </span>
            , modern JavaScript, HTML/CSS, Git, and REST APIs — and actively
            expanding into{" "}
            <span
              className="font-semibold"
              style={{ color: "var(--gradient-to)" }}
            >
              TypeScript
            </span>
            .
          </p>

          <motion.a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 text-white font-medium px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--gradient-from), var(--gradient-to))",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <Download size={18} />
            Download CV
          </motion.a>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
