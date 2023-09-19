import { useState } from "react";
import "./styles.css";

import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

// Terminal open command = Ctrl + Shift + `

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <section className="bg-white min-h-screen px-10 items-center md:px-25 lg:px-40 min-w-fit dark:bg-zinc-700 dark:text-white">
        <nav className="py-10 mb-12 flex justify-between items-center text-xl ">
          <h1 className="">Denver Siu</h1>
          <ul className="flex items-center">
            <li className="cursor-pointer text-indigo-500 dark:text-orange-500">
              <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} />
            </li>
            <li className=" bg-gradient-to-r from-indigo-500 to-orange-500 text-white px-4 py-2 rounded-md ml-8">
              <a href="https://drive.google.com/file/d/1DPnF6CqpTiy3mDw5hLNS6x6YxuaDcr44/view?usp=drive_link">
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10 ">
          <h2 className="text-5xl py-2 text-indigo-500 font-semibold md:text-6xl dark:text-indigo-400">
            Denver Siu
          </h2>
          <h3 className="text-2xl py-2 md:text-3xl">Software Developer</h3>
          <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">
            As a web designer turned web developer, I'm thrilled to make the transition and create intuitive and engaging solutions.
          </p>
          <ul className="text-4xl flex justify-center gap-16 text-gray-600">
            <li>
              <a href="https://www.linkedin.com/in/denver-siu/">
                <AiFillLinkedin className="text-indigo-500 dark:text-indigo-400" />
              </a>
            </li>
            <li>
              <a href="https://github.com/dpsiu">
                <AiFillGithub className="text-indigo-500 dark:text-indigo-400" />
              </a>
            </li>
          </ul>
          <div className="">{/* Image to be here. Picture of me? */}</div>
        </div>
        <section>
          <div className="text-center">
            <h3 className="text-4xl pt-10 font-semibold text-indigo-500 dark:text-indigo-400">
              Projects
            </h3>
          </div>
        </section>
        <div className="lg:flex gap-10">
          <div className="text-center shadow-lg shadow-slate-400 p-10 rounded-xl my-10 mx-auto max-w-3xl dark:text-white dark:shadow-slate-800 dark:bg-zinc-600">
            <h3 className="text-xl font-semibold pt-8 pb-6 ">
              Shopping Cart Application
            </h3>
            <a href="https://denver-siu-shopping-cart.netlify.app/">
              <img
                src="Images/Shop Cart Homepage.jpg"
                alt="Font page screenshot of the shopping cart application"
                className="rounded-lg py-4"
              />
            </a>
            <p className="text-md text-left py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">
              This project is a mock shopping cart application built using
              React. Meant to demonstrate and apply various concepts such as
              component structure, routing, state management, and interaction
              with APIs.
            </p>
            <ul className="flex flex-wrap text-sm text-gray-800 gap-2 max-w-fit">
              <li className="bg-indigo-400 text-white py-2 px-4 rounded-3xl">HTML</li>
              <li className="bg-indigo-400 text-white py-2 px-4 rounded-3xl">CSS</li>
              <li className="bg-indigo-400 text-white py-2 px-4 rounded-3xl">JavaScript</li>
              <li className="bg-indigo-400 text-white py-2 px-4 rounded-3xl">React</li>
            </ul>
          </div>
          <div className="text-center shadow-lg shadow-slate-400 p-10 rounded-xl my-10 mx-auto max-w-3xl dark:text-white dark:shadow-slate-800 dark:bg-zinc-600">
            <h3 className="text-xl font-semibold pt-8 pb-6">
              CV Application Creator
            </h3>
            <a href="https://denver-siu-cv-application.netlify.app/">
              <img
                src="Images/Layer 1.jpg"
                alt="Screenshot of CV Application Project's front page"
                className="rounded-lg py-4"
              />
            </a>
            <p className="text-md text-left py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">
              The CV application allows users to input general information,
              educational experiences, and practical work experiences which are
              then rendered to the right as a preview.
            </p>
            <ul className="flex flex-wrap text-sm text-gray-800 gap-2 max-w-fit">
              <li className="bg-indigo-400 text-white py-2 px-4 rounded-3xl">HTML</li>
              <li className="bg-indigo-400 text-white py-2 px-4 rounded-3xl">CSS</li>
              <li className="bg-indigo-400 text-white py-2 px-4 rounded-3xl">JavaScript</li>
              <li className="bg-indigo-400 text-white py-2 px-4 rounded-3xl">React</li>
            </ul>
          </div>
        </div>
        <div className="text-l flex justify-center items-center gap-4 text-gray-800 py-10 dark:text-white">
          <p>2023</p>
          <a
            className="flex gap-4 items-center p-4 "
            href="https://www.linkedin.com/in/denver-siu/"
          >
            <p>Denver Siu</p>
            <AiFillLinkedin className="w-7 h-7 text-indigo-500 dark:text-indigo-400" />
          </a>
          <a
            className="flex gap-4 items-center p-4"
            href="https://github.com/dpsiu"
          >
            <p>dpsiu</p>
            <AiFillGithub className="w-7 h-7 text-indigo-500 dark:text-indigo-400" />
          </a>
        </div>
      </section>
    </div>
  );
}
