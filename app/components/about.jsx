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
          <h1 className="font-bold text-2xl mt-5 mb-5 text-center lg:text-left ">
            Fullstack Developer <br />
            based in Jakarta, Indonesia
          </h1>
          {/* <p className="text-gray-700 mb-3 text-center lg:text-left">
            Hey, my name is Nabilla I am a passionate Fullstack Developer with a
            <br />
            knack for creating seamless web experiences. With a solid foundation
            <br />
            in both front-end and back-end technologies, I excel at building
            <br />
            dynamic, responsive, and user-friendly web applications.
          </p>
          <p className="text-gray-700 mb-3 text-center lg:text-left ">
            My main stack currently is Laravel, React JS, Next.js in combination
            <br />
            with Tailwind CSS, PHP, JavaScript, and TypeScript. <br />
          </p>
          <p className="text-gray-700 mb-3 text-center lg:text-left ">
            My journey in web development is driven by a love for
            problem-solving <br />
            and a constant desire to learn and adapt to new technologies.
          </p> */}
          <p className="text-gray-700 mb-3 text-center lg:text-left whitespace-normal">
            Hey, my name is Nabilla I am a passionate Fullstack Developer with a
            knack for creating seamless web experiences. With a solid foundation
            in both front-end and back-end technologies, I excel at building
            dynamic, responsive, and user-friendly web applications.
          </p>
          <p className="text-gray-700 mb-3 text-center lg:text-left whitespace-normal">
            My main stack currently is Laravel, React JS, Next.js in combination
            with Tailwind CSS, PHP, JavaScript, and TypeScript.
          </p>
          <p className="text-gray-700 mb-3 text-center lg:text-left whitespace-normal">
            My journey in web development is driven by a love for
            problem-solving and a constant desire to learn and adapt to new
            technologies.
          </p>
        </div>
      </div>
    </div>
  );
}
