import React from "react";

const Footer = () => {
  return (
    <footer
      className="mt-10 py-4 text-[12px] flex justify-center items-center"
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
        boxShadow: "var(--footer-shadow)",
        transition: "all 0.3s ease",
      }}
    >
      <p>
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold">Horie Kyazimova</span> — Designed &
        coded with 💜
      </p>
    </footer>
  );
};

export default Footer;
