export function Skills() {
  return (
    <section>
      <div className="text-center bg-red-500">
        <h3 className="text-4xl pt-10 font-semibold text-indigo-500 dark:text-indigo-400 pb-6">
          Skills
        </h3>
        <section className="text-4xl flex justify-center items-center gap-4 flex-wrap">
          <div className="flex-col justify-between items-center gap-4 h-16">
            <span className="devicon-github-original dark:text-stone-700"></span>
            <p className="text-sm pt-6">GitHub</p>
          </div>
          <div className="flex-col justify-between items-center gap-4">
            <img
              className=""
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            />
            <p className="text-sm">HTML5</p>
          </div>
          <div className="flex-col justify-between items-center gap-4">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
            <p className="text-sm">CSS</p>
          </div>
          <div className="flex-col justify-between items-center gap-4">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
            <p className="text-sm">JavaScript</p>
          </div>
          <div className="flex-col justify-between items-center gap-4">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            <p className="text-sm">React</p>
          </div>
          <div className="flex-col justify-between items-center gap-4">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
            <p className="text-sm">Tailwind</p>
          </div>
          <div className="flex-col justify-between items-center gap-4">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
            <p className="text-sm">NodeJS</p>
          </div>
          <div className="flex-col justify-between items-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
            <p className="text-sm">Git</p>
          </div>
        </section>
      </div>
    </section>
  );
}
