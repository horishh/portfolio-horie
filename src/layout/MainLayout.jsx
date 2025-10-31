import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import TechStack from "../pages/TechStack";
import Contact from "../components/Contact";

const MainLayout = () => {
  return (
    <div className="min-h-screen app-bg" style={{ color: "var(--text-color)" }}>
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="about">
          <About />
        </section>
        <section
          id="tech-stack"
          className="flex sm:justify-center sm:m-auto sm:w-[850px] mt-10"
        >
          <TechStack />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
