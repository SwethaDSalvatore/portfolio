import React from "react";
import SwethaPic from "../assets/swetha-pic.jpg";
const Header = () => {
  return (
    <div>
      <div className=" pt-10 pb-10  md:h-screen flex items-center">
        <div className="max-w-6xl mx-auto mt-20 p-4">
          <div className="md:flex md:items-center md:space-x-16 space-y-4">
            <img
              className="w-[250px] rounded-full object-cover p-1 border border-rose-400 mx-auto"
              src={SwethaPic}
              alt=""
            />
            <div className="space-y-7 ">
              <h4 className="text-xl text-gray-400">
                Crafting Innovative Solutions for the Digital World
              </h4>
              <h4 className="text-xl text-gray-400">
                Welcome to my corner of the web!
              </h4>
              <p className="text-xl text-gray-400">
                I'm <span className="text-rose-400 font-semibold">Swetha</span>,
                a passionate{" "}
                <span className="text-rose-400 font-semibold">
                  Full-stack Web Engineer
                </span>{" "}
                dedicated to pushing the boundaries of technology and
                creativity. With expertise in both front-end and back-end
                development, I specialize in building robust, scalable web
                applications that deliver exceptional user experiences.
              </p>
              <ul className="flex items-center space-x-5">
                <li className="hover:bg-rose-400 p-2 rounded-full text-gray-400 hover:text-slate-950 border border-rose-400 ">
                  <a href="tel:+91 8072625594" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      className="fill-current w-7 h-7"
                    >
                      <path
                        fill="currentColor"
                        d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li className="hover:bg-rose-400 p-2 rounded-full text-gray-400 hover:text-slate-950 border border-rose-400 ">
                  <a href="https://github.com/SwethaDSalvatore" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      className="fill-current w-7 h-7"
                    >
                      <path
                        fill="currentColor"
                        d="M12.001 2c-5.525 0-10 4.475-10 10a9.994 9.994 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.28 9.28 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li className="hover:bg-rose-400 p-2 rounded-full text-gray-400 hover:text-slate-950 border border-rose-400 ">
                  <a
                    href="https://linkedin.com/in/swetha-r-1516121b9/"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      className="fill-current w-7 h-7"
                    >
                      <path
                        fill="currentColor"
                        d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li className="hover:bg-rose-400 p-2 rounded-full text-gray-400 hover:text-slate-950 border border-rose-400 ">
                  <a href="mailto:swetharamesh35309@gmail.com" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      className="fill-current w-7 h-7"
                    >
                      <path
                        fill="currentColor"
                        d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zM20 8l-7.475 4.675q-.125.075-.262.113t-.263.037q-.125 0-.262-.037t-.263-.113L4 8v10h16zm-8 3l8-5H4zM4 8v.25v-1.475v.025V6v.8v-.012V8.25zv10z"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
              <div className="flex items-center space-x-5">
                <button className="px-4 py-2 bg-rose-400  hover:bg-rose-500 rounded-lg">
                  <a
                    href="https://swethadsalvatore.github.io/Swetha.Ramesh-Resume/"
                    target="_blank"
                    className="font-semibold"
                  >
                    Hire me
                  </a>
                </button>
                <button className="px-4 py-2 bg-rose-400 hover:bg-rose-500 rounded-lg">
                  <a
                    href="./assets/img/Swetha R_Resume_2023.pdf"
                    target="_blank"
                    className="font-semibold"
                  >
                    Download CV
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
