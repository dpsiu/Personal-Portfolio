import "./styles.css";
import { useState, createContext, useContext } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { About } from "../Pages/About";
import { Home } from "../Pages/Home";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";

// ctrl + shift + ` for terminal
export const ModeContext = createContext();

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <ModeContext.Provider value={{darkMode, setDarkMode}}>
        <div className={darkMode ? "dark" : ""}>
          <section className=" text-stone-700 bg-white min-h-screen px-8 items-center md:px-25 lg:px-40 min-w-fit dark:bg-zinc-700 dark:text-white">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
          </section>
        </div>
      </ModeContext.Provider>
    </>
  );
}
