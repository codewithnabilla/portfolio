import { X } from "lucide-react";

export default function ProjectDetailModal({ project, onClose }) {
    if (!project) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">

            {/* MODAL CONTAINER */}
            <div className="bg-white w-full max-w-4xl rounded-xl shadow-xl relative max-h-[90vh] overflow-y-auto">

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-black"
                >
                    <X size={20} />
                </button>

                <div className="p-6 flex flex-col lg:flex-row gap-8">

                    {/* LEFT SIDE - IMAGE */}
                    <div className="lg:w-1/2 flex items-center justify-center">
                        <img
                            className="max-h-[400px] w-auto rounded-lg object-contain"
                            src={project.img}
                            alt={project.alt}
                        />
                    </div>

                    {/* RIGHT SIDE - CONTENT */}
                    <div className="lg:w-1/2">
                        <h2 className="text-2xl font-bold mb-2">
                            {project.title}
                        </h2>

                        <p className="text-sm text-gray-600 mb-3">
                            {project.stack}
                        </p>

                        <p className="mb-4">
                            {project.description}
                        </p>

                        <ul className="list-disc pl-5 space-y-2 text-sm">
                            {project.details.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>


                        <div className="mt-6 text-sm text-gray-500 italic">
                            *For more details about this project, please contact me.
                        </div>



                    </div>

                </div>
            </div>
        </div>
    );
}
