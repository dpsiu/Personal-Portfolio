import { useState } from "react";
import "./styles.css";

import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

// Terminal open command = Ctrl + Shift + `

export default function App() {
  return (
    <>
      <section className="min-h-screen px-10 items-center md:px-25 lg:px-40">
        <nav className="py-10 mb-12 flex justify-between items-center">
          <h1 className="text-l ">Denver Siu</h1>
          <ul className="flex items-center">
            <li className="cursor-pointer">{/* <BsFillMoonStarsFill /> */}</li>
            <li className=" bg-gradient-to-r from-indigo-500 to-orange-600 text-white px-4 py-2 rounded-md ml-8">
              <a href="https://drive.google.com/file/d/1DPnF6CqpTiy3mDw5hLNS6x6YxuaDcr44/view?usp=drive_link">Resume</a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10 ">
          <h2 className="text-5xl py-2 text-indigo-500 font-medium md:text-6xl">
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
              <a href="https://www.linkedin.com/in/denver-siu/">
                <AiFillLinkedin className="text-indigo-500" />
              </a>
            </li>
            <li>
              <a href="https://github.com/dpsiu">
                <AiFillGithub className="text-indigo-500" />
              </a>
            </li>
          </ul>
          <div className="">{/* Image to be here. Picture of me? */}</div>
        </div>
        <section>
          <div className="text-center">
            <h3 className="text-3xl pt-4 font-semibold text-indigo-500">
              Projects
            </h3>
          </div>
        </section>
        <div className="text-center shadow-lg shadow-slate-400 p-10 rounded-xl my-10 mx-auto max-w-3xl">
          <h3 className="text-lg font-medium pt-8 pb-2">
            Shopping Cart Application
          </h3>
          <a href="https://denver-siu-shopping-cart.netlify.app/">
            <img
              src="Images/Shop Cart Homepage.jpg"
              alt="Font page screenshot of the shopping cart application"
              className="rounded-lg"
            />
          </a>
          <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">
            This project is a mock shopping cart application built using React.
            Meant to demonstrate and apply various concepts such as component
            structure, routing, state management, and interaction with APIs.
          </p>
          <ul className="flex">
            <li></li>
          </ul>
        </div>
        <div className="text-center shadow-lg shadow-slate-400 p-10 rounded-xl my-10 mx-auto max-w-3xl">
          <h3 className="text-lg font-medium pt-8 pb-2">
            CV Application Creator
          </h3>
          <a href="https://denver-siu-cv-application.netlify.app/">
            <img
              src="Images/Layer 1.jpg"
              alt="Screenshot of CV Application Project's front page"
              className="rounded-lg"
            />
          </a>
          <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">
            The CV application allows users to input general information,
            educational experiences, and practical work experiences which are
            then rendered to the right as a preview.
          </p>
        </div>
        <div className="text-l flex justify-center items-center gap-4 text-gray-800">
          <p>2023</p>
          <a
            className="flex gap-4 items-center p-4 "
            href="https://www.linkedin.com/in/denver-siu/"
          >
            <p>Denver Siu</p>
            <AiFillLinkedin className="w-7 h-7 text-indigo-500" />
          </a>
          <a
            className="flex gap-4 items-center p-4"
            href="https://github.com/dpsiu"
          >
            <p>dpsiu</p>
            <AiFillGithub className="w-7 h-7 text-indigo-500" />
          </a>
        </div>
      </section>
    </>
  );
}
