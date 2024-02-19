"use client";
import { useEffect, useState } from "react";
import Home from "./components/home";
import { Menu, X } from "lucide-react";
import About from "./components/about";
import Project from "./components/project";

import projectList from "./components/project-list";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 767);
  };

  useEffect(() => {
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);
  return (
    <>
      <div className="mx-5">
        <nav className="sticky top-0 z-50 bg-white shadow-md p-5">
          <div className="flex justify-between">
            <h3 className="font-sans font-bold text-xl">Nabilla.</h3>
            <ul className="hidden md:flex lg:flex justify-around gap-10 font-bold text-lg">
              <li className="hover:underline">
                <a href="#home">Home</a>
              </li>
              <li className="hover:underline">
                <a href="#about">About</a>
              </li>
              <li className="hover:underline">
                <a href="#projects">Projects</a>
              </li>
              <li className="hover:underline">
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <button
              className="md:hidden lg:hidden"
              onClick={handleMobileMenuToggle}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
            {mobileMenuOpen && (
              <div className="md:hidden">
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <ul>
                      <li className="hover:underline block px-4 py-2  text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                        <a href="#home">Home</a>
                      </li>
                      <li className="hover:underline block px-4 py-2  text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                        <a href="#about">About</a>
                      </li>
                      <li className="hover:underline block px-4 py-2  text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                        <a href="#projects">Projects</a>
                      </li>
                      <li className="hover:underline block px-4 py-2  text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                        <a href="#contact">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Project projects={projectList} />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </>
  );
}
