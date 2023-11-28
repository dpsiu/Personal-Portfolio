import { Skills } from "../Components/Skills";

export function Home() {
  return (
    <>
      <div className="text-center p-10">
        <h2 className="text-5xl py-2 text-indigo-500 font-semibold md:text-6xl dark:text-indigo-400">
          Denver Siu
        </h2>
        <h3 className="text-2xl py-2 md:text-3xl">Software Developer</h3>
        <p className="text-md py-5 leading-8 text-stone-700 md:text-xl max-w-xl mx-auto dark:text-white">
          As a Web Designer turned Front End Software Developer, I'm thrilled to make the
          transition and create intuitive and engaging solutions.
        </p>
        <ul className="text-4xl flex justify-center gap-16 text-gray-600">
          <li>
            <a
              className="flex gap-2 items-center p-2 lg:text-2xl text-3xl text-indigo-500 dark:text-indigo-400 hover:text-orange-500 dark:hover:text-orange-400 transition duration-150"
              href="https://www.linkedin.com/in/denver-siu/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-12 mx-auto"
                aria-hidden="true"
              >
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              className="flex gap-2 items-center p-2 lg:text-2xl text-3xl text-indigo-500 dark:text-indigo-400 hover:text-orange-500 dark:hover:text-orange-400 transition duration-150"
              href="https://github.com/dpsiu"
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only">GitHub</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-12 mx-auto"
                aria-hidden="true"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
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
        <div className="flex-1 text-center shadow-lg shadow-slate-400 p-10 rounded-xl my-10 mx-auto max-w-3xl dark:text-white dark:shadow-slate-800 dark:bg-zinc-600">
          <h3 className="text-xl font-semibold pt-8 pb-6 ">LeBalein</h3>
          <a
            data-flickr-embed="true"
            href="https://denver-siu-shopping-cart.netlify.app/"
            title="shopcarthomepage"
          >
            <img
              src="/lebalein-homepage.png"
              width="1600"
              height="832"
              alt="shopcarthomepage"
              className="w-full h-auto"
            />
          </a>
          <div className="mx-auto md:p-6">
            <p className="text-md text-left py-5 leading-8 text-stone-700 md:text-xl  dark:text-white">
              A mock shopping cart application built using React with a focus in
              demonstrating and applying various concepts such as component
              structure, routing, state management, and manipulating API data.
            </p>
            <ul className="flex pt-2 pb-8 content-between gap-4 font-bold ">
              <a
                className="dark:hover:text-indigo-300 transition duration-200 hover:text-indigo-500"
                href="https://denver-siu-shopping-cart.netlify.app/"
              >
                <li>Demo</li>
              </a>
              <li> - </li>
              <a
                className="dark:hover:text-indigo-300 transition duration-200 hover:text-indigo-500"
                href="https://github.com/dpsiu/Shopping-Cart"
              >
                <li>GitHub</li>
              </a>
            </ul>
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
        <div className="flex-1 text-center shadow-lg shadow-slate-400 p-10 rounded-xl my-10 mx-auto max-w-3xl dark:text-white dark:shadow-slate-800 dark:bg-zinc-600">
          <h3 className="text-xl font-semibold pt-8 pb-6 ">
            Mortgage Calculator
          </h3>
          <a
            data-flickr-embed="true"
            href="https://mortgage-calculator-denver-siu.netlify.app/"
            title="Mortgage Calculator Homepage"
          >
            <img
              src="https://live.staticflickr.com/65535/53298976093_fb7ebae3c9_h.jpg"
              width="1600"
              height="1000"
              alt="Mortgage Calculator Homepage"
              className="w-full h-auto"
            />
          </a>
          <script
            async
            src="//embedr.flickr.com/assets/client-code.js"
            charSet="utf-8"
          ></script>
          <div className="mx-auto md:p-6">
            <p className="text-md text-left py-5 leading-8 text-stone-700 md:text-xl  dark:text-white">
              Estimate your mortgage payment, including the principal and
              interest, taxes, insurance, HOA, and PMI.
            </p>
            <ul className="flex pt-2 pb-8 content-between gap-4 font-bold ">
              <a
                className="dark:hover:text-indigo-300 transition duration-200 hover:text-indigo-500"
                href="https://mortgage-calculator-denver-siu.netlify.app/"
              >
                <li>Demo</li>
              </a>
              <li> - </li>
              <a
                className="dark:hover:text-indigo-300 transition duration-200 hover:text-indigo-500"
                href="https://github.com/dpsiu/Mortgage-Calculator"
              >
                <li>GitHub</li>
              </a>
            </ul>
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
              <li className="bg-indigo-400 text-white py-2 px-4 rounded-3xl">
                Tailwind CSS
              </li>
              <li className="bg-indigo-400 text-white py-2 px-4 rounded-3xl">
                Chart.js
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 text-center shadow-lg shadow-slate-400 p-10 rounded-xl my-10 mx-auto max-w-3xl dark:text-white dark:shadow-slate-800 dark:bg-zinc-600">
          <h3 className="text-xl font-semibold pt-8 pb-6">
            CV Application Creator
          </h3>
          <a
            data-flickr-embed="true"
            href="https://denver-siu-cv-application.netlify.app/"
            title="cvapphomepage"
          >
            <img
              src="https://live.staticflickr.com/65535/53199793459_6c0b373701_h.jpg"
              width="1600"
              height="832"
              alt="cvapphomepage"
              className="w-full h-auto"
            />
          </a>
          <script
            async
            src="//embedr.flickr.com/assets/client-code.js"
            charSet="utf-8"
          ></script>
          <div className="mx-auto md:p-6">
            <p className="text-md text-left py-5 leading-8 text-stone-700 md:text-xl dark:text-white">
              A CV Application Creator that takes user inputs and returns an
              example resume. The projects serves as an application of React
              best principles, components, and state management.
            </p>
            <ul className="flex pt-2 pb-8 content-between gap-4 font-bold ">
              <a
                className="dark:hover:text-indigo-300 transition duration-200 hover:text-indigo-500"
                href="https://denver-siu-cv-application.netlify.app/"
              >
                <li>Demo</li>
              </a>
              <li> - </li>
              <a
                className="dark:hover:text-indigo-300 transition duration-200 hover:text-indigo-500"
                href="https://github.com/dpsiu/CV-Application"
              >
                <li>GitHub</li>
              </a>
            </ul>
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
      </div>
      <Skills />
    </>
  );
}
