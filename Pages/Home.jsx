import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export function Home() {
  return (
    <>
      <div className="text-center p-10">
        <h2 className="text-5xl py-2 text-indigo-500 font-semibold md:text-6xl dark:text-indigo-400">
          Denver Siu
        </h2>
        <h3 className="text-2xl py-2 md:text-3xl">Software Developer</h3>
        <p className="text-md py-5 leading-8 text-stone-700 md:text-xl max-w-xl mx-auto dark:text-white">
          As a web designer turned web developer, I'm thrilled to make the
          transition and create intuitive and engaging solutions.
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
              src="../images/ShopCartHomepage.jpg"
              alt="Font page screenshot of the shopping cart application"
              className="rounded-lg py-4"
            />
          </a>
          <p className="text-md text-left py-5 leading-8 text-stone-700 md:text-xl max-w-xl mx-auto dark:text-white">
            This project is a mock shopping cart application built using React.
            Meant to demonstrate and apply various concepts such as component
            structure, routing, state management, and interaction with APIs.
          </p>
          <ul className="flex flex-wrap text-sm text-gray-800 gap-2 max-w-fit">
            <li className="bg-indigo-400 text-white py-2 px-4 rounded-3xl">
              HTML
            </li>
            <li className="bg-indigo-400 text-white py-2 px-4 rounded-3xl">
              CSS
            </li>
            <li className="bg-indigo-400 text-white py-2 px-4 rounded-3xl">
              JavaScript
            </li>
            <li className="bg-indigo-400 text-white py-2 px-4 rounded-3xl">
              React
            </li>
          </ul>
        </div>
        <div className="text-center shadow-lg shadow-slate-400 p-10 rounded-xl my-10 mx-auto max-w-3xl dark:text-white dark:shadow-slate-800 dark:bg-zinc-600">
          <h3 className="text-xl font-semibold pt-8 pb-6">
            CV Application Creator
          </h3>
          <a href="https://denver-siu-cv-application.netlify.app/">
            <img
              src="../images/CVAppHomePage.jpg"
              alt="Screenshot of CV Application Project's front page"
              className="rounded-lg py-4"
            />
          </a>
          <p className="text-md text-left py-5 leading-8 text-stone-700 md:text-xl max-w-xl mx-auto dark:text-white">
            The CV application allows users to input general information,
            educational experiences, and practical work experiences which are
            then rendered to the right as a preview.
          </p>
          <ul className="flex flex-wrap text-sm text-gray-800 gap-2 max-w-fit">
            <li className="bg-indigo-400 text-white py-2 px-4 rounded-3xl">
              HTML
            </li>
            <li className="bg-indigo-400 text-white py-2 px-4 rounded-3xl">
              CSS
            </li>
            <li className="bg-indigo-400 text-white py-2 px-4 rounded-3xl">
              JavaScript
            </li>
            <li className="bg-indigo-400 text-white py-2 px-4 rounded-3xl">
              React
            </li>
          </ul>
        </div>
      </div>
      
    </>
  );
}
