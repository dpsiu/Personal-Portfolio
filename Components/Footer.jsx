export function Footer() {
  return (
    <>
      <p className="text-center pt-10 text-stone-700 dark:text-stone-300 ">Site built with React and Tailwind CSS</p>
      <div className="w-full text-md flex justify-center items-center gap-4 text-stone-700 pt-2 pb-10 dark:text-white">
        <p className="p-2">2023</p>
        <a
          className="flex gap-2 items-center p-2"
          href="https://www.linkedin.com/in/denver-siu/"
        >
          <p className="dark:hover:text-indigo-300 transition duration-200 hover:text-indigo-500">
            Denver Siu
          </p>
          <span className="devicon-linkedin-plain text-2xl text-indigo-500 dark:text-indigo-400 hover:text-orange-500 dark:hover:text-orange-400 transition duration-150"></span>
        </a>
        <a
          className="flex gap-2 items-center p-2"
          href="https://github.com/dpsiu"
        >
          <p className="dark:hover:text-indigo-300 transition duration-200 hover:text-indigo-500">
            dpsiu
          </p>
          <span className="devicon-github-original text-2xl text-indigo-500 dark:text-indigo-400 hover:text-orange-500 dark:hover:text-orange-400 transition duration-150"></span>
        </a>
      </div>
    </>
  );
}
