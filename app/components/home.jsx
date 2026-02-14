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
            Fullstack Developer
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 text-center md:text-center lg:text-left max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Hi, I’m Nabilla Maharani. A Fullstack Developer based in Jakarta, Indonesia,
            experienced in building and maintaining modern web applications across
            frontend and backend systems.
          </p>

          <div className="flex gap-6 mt-8 justify-center lg:justify-start">
            <Link href="https://github.com/codewithnabilla">
              <GithubIcon
                className="p-0.5 cursor-pointer rounded-sm hover:bg-slate-400"
                width={30}
                height={30}
              />
            </Link>
            <Link href="https://www.linkedin.com/in/nabilla-maharani-169311210/">
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
              <Image src="/html.svg" width={30} height={30} alt="HTML logo" />
              <Image src="/css3.svg" width={30} height={30} alt="css logo" />
              <Image
                src="/javascript.svg"
                width={30}
                height={30}
                alt="javascript logo"
              />
              <Image src="/php.svg" width={30} height={30} alt="php logo" />
              <Image
                src="/typescript.svg"
                width={30}
                height={30}
                alt="typescript logo"
              />
              <Image
                src="/laravel.svg"
                width={30}
                height={30}
                alt="laravel logo"
              />
              <Image src="/react.svg" width={30} height={30} alt="react logo" />
              <Image
                src="/nextjs.svg"
                width={30}
                height={30}
                alt="nextjs logo"
              />
              <Image src="/mui.svg" width={30} height={30} alt="mui logo" />
              <Image
                src="/tailwind.svg"
                width={30}
                height={30}
                alt="tailwind logo"
              />

              <Image
                src="/nodejs.svg"
                width={30}
                height={30}
                alt="nodejs logo"
              />

              <Image src="/mysql.svg" width={30} height={30} alt="mysql logo" />
              <Image src="/postgresql.svg" width={30} height={30} alt="postgresql logo" />
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
