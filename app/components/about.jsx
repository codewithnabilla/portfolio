import Image from "next/image";

export default function About() {
  return (
    <div className="bg-[#fff] mt-11 pt-8">
      <div className="flex flex-col lg:flex-row justify-center gap-12 items-center">
        <Image
          src="/about.jpg"
          alt="laptop in desk"
          width={400}
          height={400}
          className="rounded-lg"
        />
        <div>
          <h1 className="text-blue-700 font-extrabold text-center lg:text-left text-xl">
            about me
          </h1>
          <h1 className="font-bold text-2xl mt-5 mb-5 text-center lg:text-left ">
            Front-End Developer <br />
            based in Jakarta, Indonesia
          </h1>
          <p className="text-gray-700 mb-3 text-center lg:text-left ">
            Hey, my name is Nabilla, and I am a Frontend Developer. <br />
            My passion is to create and develop a web for my users.
          </p>
          <p className="text-gray-700 mb-3 text-center lg:text-left ">
            My main stack currently is React/Next.js in combination <br />
            with Tailwind CSS and TypeScript. <br />
          </p>
          <p className="text-gray-700 mb-3 text-center lg:text-left ">
            Even though my main stack in frontend, i currently learning <br />{" "}
            backend stack such as nodejs, prisma, and mySQL. <br />
            Hopefully in the end, i can become a fullstack developer.
          </p>
        </div>
      </div>
    </div>
  );
}
