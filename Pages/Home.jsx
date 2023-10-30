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
          As a web designer turned web developer, I'm thrilled to make the
          transition and create intuitive and engaging solutions.
        </p>
        <ul className="text-4xl flex justify-center gap-16 text-gray-600">
          <li>
            <a href="https://www.linkedin.com/in/denver-siu/">
              <span className="devicon-linkedin-plain text-4xl text-indigo-500 dark:text-indigo-400 hover:text-orange-500 dark:hover:text-orange-400 transition duration-150"></span>
            </a>
          </li>
          <li>
            <a href="https://github.com/dpsiu">
              <span className="devicon-github-original text-4xl text-indigo-500 dark:text-indigo-400 hover:text-orange-500 dark:hover:text-orange-400 transition duration-150"></span>
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
        <div className="text-center shadow-lg shadow-slate-400 p-10 rounded-xl my-10 mx-auto max-w-3xl dark:text-white dark:shadow-slate-800 dark:bg-zinc-600">
          <h3 className="text-xl font-semibold pt-8 pb-6 ">
            Shopping Cart Application
          </h3>
          <a
            data-flickr-embed="true"
            href="https://denver-siu-shopping-cart.netlify.app/"
            title="shopcarthomepage"
          >
            <img
              src="https://live.staticflickr.com/65535/53200211263_71e04c4446_h.jpg"
              width="1600"
              height="832"
              alt="shopcarthomepage"
              className="h-70"
            />
          </a>
          <script
            async
            src="//embedr.flickr.com/assets/client-code.js"
            charSet="utf-8"
          ></script>
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
        <div className="text-center shadow-lg shadow-slate-400 p-10 rounded-xl my-10 mx-auto max-w-3xl dark:text-white dark:shadow-slate-800 dark:bg-zinc-600">
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
              className="h-70"
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
