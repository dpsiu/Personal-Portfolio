import React from "react";

export function About() {
  return (
    <>
      <section className="max-w-4xl lg:max-w-6xl lg:text-xl lg:mx-auto">
        <p className="text-3xl lg:text-5xl">
          Welcome! I'm <span className="text-indigo-400 font-bold">Denver</span>
        </p>
        <div className="pt-14 pb-4">
          <p className="py-3">
            I graduated from the University of Texas at Dallas, wielding a
            degree in Design and Production with an emphasis on UX design.
          </p>
          <p className="py-3">
            Long before university and early professional experiences, I had a
            passion for creating and building. This led to me pursuing design
            with an urge to create usable and enjoyable experiences!
          </p>
          <p className="py-3">
            After some time working in the field, my passion for building
            extended further. Aside from the joy of researching, empathizing,
            and iterating on designs, I wanted the capability to actually build
            them as well.
          </p>
          <p className="py-3">
            Thus began my journey from design into software development.
            Currently, I am in the midst of{" "}
            <span className="hover:underline text-amber-600 dark:text-amber-400">
              <a href="https://www.theodinproject.com/">
                The Odin Project's Full Stack self-taught JavaScript course
              </a>
            </span>
            .
          </p>
        </div>
      </section>
    </>
  );
}
