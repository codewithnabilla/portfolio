import Image from "next/image";

export default function About() {
  return (
    <div className="bg-[#fff] mt-11 pt-8">
      <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-16">
        <div className="basis-1/2 lg:pl-16">
          <Image
            src="/about.jpg"
            alt="laptop in desk"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="basis-1/2 lg:pr-16">
          <h1 className="text-blue-700 font-extrabold text-center lg:text-left text-xl mt-4">
            about me
          </h1>

          <h1 className="font-bold text-2xl mt-5 mb-5 text-center lg:text-left leading-snug">
            Fullstack Developer based in Jakarta, Indonesia
          </h1>

          <p className="text-gray-700 mb-4 text-center lg:text-left max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Hi, I’m Nabilla, a Fullstack Developer with hands-on experience building
            and maintaining web-based business and operational systems. I have worked
            on enterprise applications involving approval workflows, procurement
            processes, user management, and system integrations.
          </p>

          <p className="text-gray-700 mb-4 text-center lg:text-left max-w-xl mx-auto lg:mx-0 leading-relaxed">
            My main stack includes Laravel, React.js, Next.js, TypeScript, PHP, and
            PostgreSQL. I am comfortable working across both frontend and backend,
            integrating APIs, managing database queries, and ensuring smooth system
            functionality.
          </p>

          <p className="text-gray-700 mb-4 text-center lg:text-left max-w-xl mx-auto lg:mx-0 leading-relaxed">
            I focus on writing clean, maintainable code and continuously improving my
            technical skills to build reliable and scalable web applications.
          </p>
        </div>

      </div>
    </div>
  );
}
