import React from "react";
import ScrollDown from "../components/ScrollDown";

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col sm:flex-row items-center justify-center min-h-[110vh] px-6 sm:px-10 gap-8 transition-colors duration-500 mb-40"

      style={{
        color: "var(--text-color)",
        backgroundColor: "var(--bg-color)",
      }}
    >
      <div className="flex justify-center sm:mr-15">
        <img
          className="h-48 w-48 sm:h-60 sm:w-60 object-cover rounded-full border-2"
          style={{
            borderColor: "var(--accent-color)",
          }}
          src="/images/profilePic1.png"
          alt="profile-pic"
        />
      </div>

      <div className="max-w-md mt-6 sm:mt-0 text-center sm:text-left">
        <h1 className="text-3xl font-poppins-extralight tracking-[-2px]">
          Hey, I'm Horie
        </h1>

        <h2 className="text-4xl sm:text-5xl font-poppins font-semibold tracking-tighter">
          <span
            className="text-transparent bg-clip-text animate-gradient"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--gradient-from), var(--gradient-to))",
            }}
          >
            Front
          </span>{" "}
          <span>End Developer</span>
        </h2>

        <p className="text-base mt-3 opacity-80">
          Learning, building, and occasionally breaking things (in a good way).
          Welcome to my corner of the web — the story’s just getting started.
        </p>

        <p
          className="text-transparent bg-clip-text animate-gradient italic mt-2"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--gradient-from), var(--gradient-to))",
          }}
        >
          Turning ideas into code — one bug at a time
        </p>
      </div>

      <ScrollDown />
    </section>
  );
};

export default Home;
