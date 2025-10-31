import React from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { RiMailSendLine } from "react-icons/ri";

const Contact = () => {
  return (
    <div className="text-black mt-10 mb-40 flex flex-col justify-center items-center mx-auto rounded-xl p-6 transition-colors duration-500">
      <h3
        className="text-[14px] text-gray-500"
        style={{
          color: "var(--accent-color)",
        }}
      >
        Get in Touch
      </h3>
      <h1
        className="text-[25px] font-semibold mb-3"
        style={{
          color: "var(--text-color)",
        }}
      >
        Contact Me
      </h1>
      <div
        className="flex gap-5 text-[12px] max-w-[300px] w-[400px] h-auto rounded-3xl p-5 justify-center items-center"
        style={{
          backgroundColor: "var(--section-color)",
          color: "var(--text-color)",
          boxShadow: "var(--shadow)",
        }}
      >
        <p className="flex items-center gap-1">
          <RiMailSendLine className="size-5" /> horish99@gmail.com
        </p>
        <p className="flex items-center gap-1 cursor-pointer hover:text-blue-900">
          <AiOutlineLinkedin className="size-5" /> LinkedIn
        </p>
      </div>
    </div>
  );
};

export default Contact;
