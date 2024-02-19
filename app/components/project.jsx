import { GithubIcon } from "lucide-react";
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
            <img className="w-full" src={project.img} />
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <div className="flex gap-6 mt-8 justify-center lg:justify-start">
              <Link href={project.github}>
                <GithubIcon
                  className="p-0.5 cursor-pointer rounded-sm hover:bg-slate-400"
                  width={30}
                  height={30}
                />
              </Link>
              <Link href={project.link}>
                <p>Visit Link</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
