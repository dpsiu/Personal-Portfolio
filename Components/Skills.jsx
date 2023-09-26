export function Skills() {
  return (
    <section>
      <div className="text-center">
        <h3 className="text-4xl py-10 font-semibold text-indigo-500 dark:text-indigo-400 pb-6">
          Skills
        </h3>
        <section className="flex flex-wrap justify-center items-center gap-8 pt-4 pb-8">
          {/* <div className="flex flex-col">
            <span className="devicon-github-original text-6xl text-stone-700 dark:text-white"></span>
            <p className="">GitHub</p>
          </div> */}
          <div className="flex flex-col gap-4">
            <img
              className="w-20 mx-auto"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            />
            <p className="">HTML5</p>
          </div>
          <div className="flex flex-col gap-4">
            <img
              className="w-20 mx-auto"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            />
            <p className="">CSS</p>
          </div>
          <div className="flex flex-col gap-4">
            <img
              className="w-20 mx-auto"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            />
            <p className="">JavaScript</p>
          </div>
          <div className="flex flex-col gap-4">
            <img
              className="w-20 mx-auto"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            />
            <p className="">React</p>
          </div>
          <div className="flex flex-col gap-4">
            <img
              className="w-20 mx-auto"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
            />
            <p className="">Tailwind</p>
          </div>
          <div className="flex flex-col gap-4">
            <img
              className="w-20 mx-auto"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            />
            <p className="">NodeJS</p>
          </div>
          <div className="flex flex-col gap-4">
            <img
              className="w-20 mx-auto"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            />
            <p className="">Git</p>
          </div>
        </section>
      </div>
    </section>
  );
}
