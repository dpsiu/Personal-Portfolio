import { useState } from "react";
import "./styles.css";

import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

// Terminal open command = Ctrl + Shift + `

export default function App() {
  return (
    <>
      <section className="min-h-screen px-10 md:px-25 lg:px-40">
        <nav className="py-10 mb-12 flex justify-between ">
          <h1 className="text-l">developedby</h1>
          <ul className="flex items-center">
            <li className="cursor-pointer">
              <BsFillMoonStarsFill />
            </li>
            <li className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8">
              <a href="#">Resume</a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10 ">
          <h2 className="text-5xl py-2 text-teal-500 font-medium md:text-6xl">
            Denver Siu
          </h2>
          <h3 className="text-2xl py-2 md:text-3xl">Software Developer</h3>
          <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">
            UX and Web Designer turned software developer. UX and Web Designer
            turned software developer. UX and Web Designer turned software
            developer.
          </p>
          <ul className="text-3xl flex justify-center gap-16 text-gray-600">
            <li>
              {" "}
              <a href="https://www.linkedin.com/in/denver-siu/">
                <AiFillLinkedin />
              </a>
            </li>
            <li>
              <a href="https://github.com/dpsiu">
                <AiFillGithub />
              </a>
            </li>
          </ul>
          <div className="">{/* Image to be here. Picture of me? */}</div>
        </div>
        <section>
          <div className="text-center">
            <h3 className="text-3xl py-1">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              UX and Web Designer <span className="text-teal-500">turned</span>{" "}
              software developer
            </p>
          </div>
        </section>
      </section>
    </>
  );
}
