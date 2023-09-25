import { useContext, useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { Route, Routes, Link } from "react-router-dom";
import { ModeContext } from "../src/App";

export function Navbar() {
  const {darkMode, setDarkMode } = useContext(ModeContext)

  return (
    <>
      <nav className="py-10 mb-12 flex justify-between items-center text-l md:text-xl lg:text-xl">
        <ul className="flex items-center gap-4 ">
          <h1 className="dark:hover:text-indigo-400 transition duration-200 hover:text-indigo-500">
            <Link to="/">Denver Siu</Link>
          </h1>
          <li className="cursor-pointer text-indigo-500 dark:text-orange-500 hover:text-orange-500 dark:hover:text-indigo-500 transition duration-150">
            <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} />
          </li>
        </ul>
        <ul className="flex items-center">
          <h1 className="dark:hover:text-indigo-400 transition duration-200 hover:text-indigo-500">
            <Link to="/about">About</Link>
          </h1>
          <li className=" bg-gradient-to-r from-indigo-500 to-orange-500 text-white px-4 py-2 rounded-md ml-4 md:ml-6 lg:ml-8">
            <a href="https://drive.google.com/file/d/1B0-6OrCekHf9TCMKPToxXTFFbSWU2p-Q/view?usp=sharing">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}