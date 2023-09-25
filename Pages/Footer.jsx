import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export function Footer() {
  return (
    <>
      <div className="w-full text-l flex justify-center items-center gap-4 text-stone-700 py-10 dark:text-white">
        <p>2023</p>
        <a
          className="flex gap-4 items-center p-4 "
          href="https://www.linkedin.com/in/denver-siu/"
        >
          <p className="dark:hover:text-indigo-300 transition duration-200 hover:text-indigo-500">Denver Siu</p>
          <AiFillLinkedin className="w-7 h-7 text-indigo-500 dark:text-indigo-400 hover:text-orange-500 dark:hover:text-orange-400 transition duration-150" />
        </a>
        <a
          className="flex gap-4 items-center p-4"
          href="https://github.com/dpsiu"
        >
          <p className="dark:hover:text-indigo-300 transition duration-200 hover:text-indigo-500">dpsiu</p>
          <AiFillGithub className="w-7 h-7 text-indigo-500 dark:text-indigo-400 hover:text-orange-500 dark:hover:text-orange-400 transition duration-150" />
        </a>
      </div>
    </>
  );
}
