import {
  GithubIcon,
  Locate,
  LocateIcon,
  LocateOff,
  LucideLocate,
  MailOpen,
  MapIcon,
} from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-[fff] mt-10 pt-3">
      <div className="lg:pl-16">
        <h1 className="text-blue-700 font-extrabold text-center lg:text-left text-xl lg:ml-10  mb-8">
          contact
        </h1>
        <div className="ml-10">
          <div className="flex gap-6 mb-5">
            <MailOpen />

            <p>nabillamaharani98@gmail.com</p>
          </div>
          <div className="flex gap-6 mb-5">
            <GithubIcon />
            <p>codewithnabilla</p>
          </div>
          <div className="flex gap-6 mb-5">
            <MapIcon />
            <p>Jakarta, Indonesia</p>
          </div>
        </div>
      </div>
    </div>
  );
}
