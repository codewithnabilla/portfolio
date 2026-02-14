"use client";

import { useState } from "react";
import ProjectDetailModal from "./ProjectDetailModal";

export default function Project({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="mt-10 pt-3 bg-[#f9f9f9]">
      <div className="lg:pl-16">
        <h1 className="text-blue-700 font-extrabold text-center lg:text-left text-xl lg:ml-10 mb-8">
          projects
        </h1>
      </div>

      <div className="grid grid-flow-row lg:grid-cols-3 mx-6 lg:ml-10 lg:mr-10 lg:pl-16 gap-x-8 gap-y-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-lg overflow-hidden shadow-lg hover:shadow-md flex flex-col"
          >
            <img
              className="w-full h-auto"
              src={project.img}
              alt={project.alt}
            />

            <div className="px-3 mt-5 pb-3 flex flex-col flex-1">
              <h1 className="text-xl font-bold">{project.title}</h1>
              <p className="mt-2">{project.description}</p>

              <div className="mt-auto pt-6">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="rounded-lg border-blue-600 border-2 py-1 px-4 hover:bg-blue-600 hover:text-white transition"
                >
                  Detail
                </button>
              </div>
            </div>
          </div>
        ))}

      </div>

      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
