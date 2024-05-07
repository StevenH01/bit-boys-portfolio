import React, { useState, useEffect } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiMongodb,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";

const SkillSteven = () => {
  // State to track whether the component has initialized
  const [initialized, setInitialized] = useState(false);

  // Effect to run after component mount
  useEffect(() => {
    // Set initialized state to true after the component has mounted
    setInitialized(true);
  }, []);

  return (
    <div
      className="w-full inline-flex flex-nowrap overflow-hidden"
      style={{
        WebkitMaskImage: `linear-gradient(to right, transparent 0, black 128px, black calc(100% - 128px), transparent 100%)`,
        maskImage: `linear-gradient(to right, transparent 0, black 128px, black calc(100% - 128px), transparent 100%)`,
      }}
    >
      <ul
        ref={ul => {
          // Check if the component has initialized and ul is available
          if (initialized && ul) {
            // Clone ul and insert it after the original ul
            const clone = ul.cloneNode(true);
            ul.parentNode.insertBefore(clone, ul.nextSibling);
            // Hide the original ul
            ul.setAttribute("aria-hidden", "true");
          }
        }}
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_div]:max-w-none animate-infinite-scroll"
      >
        <li>
          <div className="flex items-center text-[#e34c26]">
            <SiHtml5 className="mr-2" /> HTML
          </div>
        </li>
        <li>
          <div className="flex items-center text-[#264de4]">
            <SiCss3 className="mr-2" /> CSS
          </div>
        </li>
        <li>
          <div className="flex items-center text-[#f0db4f]">
            <SiJavascript className="mr-2" /> JavaScript
          </div>
        </li>
        <li>
          <div className="flex items-center text-[#3c873a]">
            <SiNodedotjs className="mr-2" /> Node.js
          </div>
        </li>
        <li>
          <div className="flex items-center text-[#61dafb]">
            <SiReact className="mr-2" /> React
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <SiNextdotjs className="mr-2" /> Next.js
          </div>
        </li>
        <li>
          <div className="flex items-center text-[#4584b6]">
            <SiPython className="mr-2 text-[#ffde57]" /> Python
          </div>
        </li>
        <li>
          <div className="flex items-center text-[#5382a1]">
            <FaJava className="mr-2 text-[#f89820]" /> Java
          </div>
        </li>
        <li>
          <div className="flex items-center text-[#966a5b]">
            <SiMongodb className="mr-2 text-[#589636]" /> MongoDB
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SkillSteven;
