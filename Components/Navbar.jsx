import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ModeContext } from "../src/App";

export function Navbar() {
  const { darkMode, setDarkMode, handleModeChange, modeText } = useContext(ModeContext);

  return (
    <>
      <nav className="flex justify-between w-full text-lg md:text-xl lg:text-xl py-10 mb-12 ">
        <div className="flex items-center gap-4 mr-auto">
          <h1 className="dark:hover:text-indigo-400 transition duration-200 hover:text-indigo-500">
            <Link to="/">Denver Siu</Link>
          </h1>
          <span
            onClick={() => handleModeChange()}
            className="material-symbols-outlined h-max cursor-pointer text-indigo-500 dark:text-orange-500 hover:text-orange-500 dark:hover:text-indigo-500 transition duration-150"
          >
            {modeText}
          </span>
        </div>
        <div className="flex items-center gap-4 ml-auto">
          <h1 className="dark:hover:text-indigo-400 transition duration-200 hover:text-indigo-500">
            <Link to="/about">About</Link>
          </h1>
          <div className=" bg-gradient-to-r from-indigo-500 to-orange-500 text-white px-4 py-2 rounded-md ml-4 md:ml-6 lg:ml-8">
            <a href="https://drive.google.com/file/d/1B0-6OrCekHf9TCMKPToxXTFFbSWU2p-Q/view?usp=sharing">
              Resume
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
