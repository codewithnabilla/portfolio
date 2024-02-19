import { GithubIcon, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="mt-8 bg-[#f9f9f9] p-5">
      <p className="text-center">© 2024. All Rights Reserved</p>
      <div className="flex gap-6 mt-8 justify-center">
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
    </div>
  );
}
