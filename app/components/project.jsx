import { GithubIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Project({ projects }) {
  return (
    <div className="  mt-10 pt-3 bg-[#f9f9f9]">
      <div className="lg:pl-16">
        <h1 className="text-blue-700 font-extrabold text-center lg:text-left text-xl lg:ml-10  mb-8">
          projects
        </h1>
      </div>

      <div className="grid grid-flow-row lg:grid-cols-3 mx-6 lg:ml-10 lg:mr-10 lg:pl-16 gap-x-8 gap-y-8 ">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-sm"
          >
            <img
              className="w-full h-auto"
              src={project.img}
              alt={project.alt}
            />
            <div className="px-3 mt-5 pb-3">
              <h1 className="text-xl font-bold">{project.title}</h1>
              <p>{project.description}</p>
              <div className="flex gap-6 mt-8 justify-center lg:justify-start">
                <Link href={project.github}>
                  <button className="cursor-pointer rounded-lg border-slate-400 border-2 py-1 px-2 hover:bg-slate-200">
                    Code
                  </button>
                </Link>
                <Link href={project.link}>
                  <button className="cursor-pointer rounded-lg border-slate-400 border-2 py-1 px-2 hover:bg-slate-200">
                    Visit Link
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
