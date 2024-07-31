import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects">
      <h2 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h2>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl  ">
        <div className="flex-col flex md:flex-row  mt-7">
          <Link
            href="#"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/Hospy.png"
                height={150}
                width={150}
                alt="First Project"
                className="rounded-xl"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Hospy</p>
                <p className="text-gray-500 text-[10px]">
                  Création d&apos;un système numérique pour guider les patients et
                  visiteurs dans l&apos;hôpital, optimisant l&apos;expérience utilisateur.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
