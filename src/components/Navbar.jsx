import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [theme, setTheme] = useState(
    document.documentElement.getAttribute("data-theme") || "light"
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const currentTheme =
        document.documentElement.getAttribute("data-theme") || "light";
      setTheme(currentTheme);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    setTheme(document.documentElement.getAttribute("data-theme") || "light");

    return () => observer.disconnect();
  }, []);

  const links = [
    { name: "Home", path: "home" },
    { name: "Projects", path: "projects" },
    { name: "About", path: "about" },
    { name: "Skills", path: "tech-stack" },
  ];

  return (
    <nav>
      <div
        className="hidden fixed top-0 left-1/2 -translate-x-1/2 md:flex items-center justify-between px-6 py-3 w-[600px] backdrop-blur-lg shadow-lg rounded-b-xl border border-t-0 z-10 transition-colors duration-500"
        style={{
          backgroundColor: "var(--section-color)",
          borderColor: "rgba(255,255,255,0.3)",
          color: "var(--text-color)",
        }}
      >
        <div className="flex items-center">
          <img
            className="h-5 transition-opacity duration-300"
            src={theme === "dark" ? "/images/logo1.png" : "/images/logo2.png"}
            alt="logo"
          />
        </div>

        <div className="flex justify-center gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              spy={true}
              smooth={true}
              duration={600}
              offset={-80}
              onSetActive={() => setActive(link.path)}
              className="relative pb-[0.5px] cursor-pointer group transition-colors"
              style={{ color: "var(--text-color)" }}
            >
              {link.name}
              <span
                className={`absolute left-0 -bottom-0.5 h-[2px] w-full opacity-70 rounded-xl origin-left transform transition-transform duration-300 ease-out
              ${
                active === link.path ? "scale-x-100" : "scale-x-0"
              } group-hover:scale-x-100`}
                style={{
                  background:
                    "linear-gradient(to right, var(--gradient-from), var(--gradient-to))",
                }}
              />
            </Link>
          ))}
        </div>

        <ThemeToggle />
      </div>
      <div className="flex items-center sm:hidden justify-between p-6">
        <img
          className="h-8 transition-opacity duration-300"
          src={theme === "dark" ? "/images/logo1.png" : "/images/logo2.png"}
          alt="logo"
        />
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
