"use client";
import { GithubIcon, Linkedin, LinkedinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [imageSize, setImageSize] = useState({ width: 300, height: 100 });

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setImageSize({ width: 200, height: 70 });
      } else {
        setImageSize({ width: 300, height: 100 });
      }
    }

    window.addEventListener("resize", handleResize);

    // Initial resize check
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="mb-10">
      <div className="flex flex-col-reverse md:flex-row lg:flex-row justify-center gap-11 items-center bg-[#f9f9f9] pt-8 pb-5">
        <div>
          <h1 className="text-4xl text-center lg:text-left lg:text-6xl font-extrabold mb-5">
            Front-End Developer
          </h1>
          <p className="text-lg text-center lg:text-left lg:text-xl text-gray-700">
            Hi, I am Nabilla Maharani. A passionate Front-End <br /> Developer
            based in Jakarta, Indonesia.
          </p>
          <div className="flex gap-6 mt-8 justify-center lg:justify-start">
            <Link href="https://github.com/codewithnabilla">
              <GithubIcon
                className="p-0.5 cursor-pointer rounded-sm hover:bg-slate-400"
                width={30}
                height={30}
              />
            </Link>
            <Link href="https://www.linkedin.com/in/nabilla-m-169311210/">
              <Linkedin
                className="p-0.5 cursor-pointer rounded-sm hover:bg-slate-400"
                width={30}
                height={30}
              />
            </Link>
          </div>
          <div className="mt-8">
            <h1 className="text-center lg:text-left font-bold text-xl mb-5">
              Tech Stack
            </h1>
            <div className="flex gap-3 flex-wrap justify-center lg:justify-start">
              <Image src="/html.svg" width={40} height={40} alt="HTML logo" />
              <Image src="/css3.svg" width={40} height={40} alt="css logo" />
              <Image
                src="/javascript.svg"
                width={40}
                height={40}
                alt="javascript logo"
              />
              <Image
                src="/typescript.svg"
                width={40}
                height={40}
                alt="typescript logo"
              />
              <Image src="/react.svg" width={40} height={40} alt="react logo" />
              <Image
                src="/nextjs.svg"
                width={40}
                height={40}
                alt="nextjs logo"
              />
              <Image
                src="/tailwind.svg"
                width={40}
                height={40}
                alt="tailwind logo"
              />
              <Image
                src="/bootstrap.svg"
                width={40}
                height={40}
                alt="bootstrap logo"
              />
              <Image
                src="/nodejs.svg"
                width={40}
                height={40}
                alt="nodejs logo"
              />
              <Image
                src="/prisma.svg"
                width={40}
                height={40}
                alt="prisma logo"
              />
              <Image src="/mysql.svg" width={40} height={40} alt="mysql logo" />
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/profile.jpeg"
            alt="photo profile"
            width={imageSize.width}
            height={imageSize.height}
            className="border-2 border-current rounded-full"
          />
        </div>
      </div>
      <div></div>
    </div>
  );
}
