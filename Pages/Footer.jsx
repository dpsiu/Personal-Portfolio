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
          <p>Denver Siu</p>
          <AiFillLinkedin className="w-7 h-7 text-indigo-500 dark:text-indigo-400" />
        </a>
        <a
          className="flex gap-4 items-center p-4"
          href="https://github.com/dpsiu"
        >
          <p>dpsiu</p>
          <AiFillGithub className="w-7 h-7 text-indigo-500 dark:text-indigo-400" />
        </a>
      </div>
    </>
  );
}
