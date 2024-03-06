import React from "react";

const About = () => {
  return (
    <div className="pt-10 pb-10 bg-slate-950 shadow md:h-screen flex items-center">
      <section className="max-w-6xl mx-auto ">
        <h2 className="text-center text-xl font-semibold text-slate-400 p-5">
          Get to know about my{" "}
          <span className="text-rose-400">Qualification</span>
        </h2>
        <div className="md:flex items-center md:space-x-20  p-4">
          <div className="grid grid-cols-1 gap-10">
          <div>
              <div className="flex items-center space-x-4">
                <svg
                  className="text-rose-400 fill-current w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    d="M24 6.5c-.329 0-.659.07-.937.245C21.5 7.733 21.5 9.08 21.5 10v.5H17m-8 3h15m-7.5 0V24m-4.5-.5c-1 0-1.75-1.5-1.75-1.5c-.75-1.5-.75-2.5-.75-4v-1.5h-8v-.25l1.922-7.495A3 3 0 0 1 6.328 6.5H7.5l1.447 2.894a2 2 0 0 0 1.79 1.106H15m-7.65-6s-1.6-1-1.6-2.25a1.747 1.747 0 1 1 3.496 0C9.246 3.5 7.65 4.5 7.65 4.5z"
                  ></path>
                </svg>
                <h2 className="text-rose-400 text-xl">Experience</h2>
              </div>
              <ul className="md:grid md:grid-cols-2 md:gap-5 ">
                <li className="bg-slate-900 text-gray-400 hover:shadow-rose-400 m-4 p-8 rounded-lg transition duration-500 ease-in-out transform hover:shadow-lg hover:-translate-y-2 ">
                  <h2 className="text-xl">
                    Junior Fullstack Engineer - Intern
                  </h2>
                  <h3 className="text-sm">CYBERDUDE NETWORKS PVT LTD</h3>
                  <h4>Sep, 2023 - Feb, 2024</h4>
                </li>
                <li className="bg-slate-900 text-gray-400 hover:shadow-rose-400 m-4 p-8 rounded-lg transition duration-500 ease-in-out transform hover:shadow-lg hover:-translate-y-2 ">
                  <h2 className="text-xl">Database Administator</h2>
                  <h3 className="text-sm">CAPGEMINI TECHNOLOGY AND SERVICES</h3>
                  <h4>2021 - 2023</h4>
                </li>
              </ul>
            </div>
            <div>
              <div className="flex items-center space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 512 512"
                  className="text-rose-400 fill-current w-7 h-7"
                >
                  <path
                    fill="currentColor"
                    d="m368 350.643l-112 63l-112-63v-66.562l-32-17.778v103.054l144 81l144-81V266.303l-32 17.778z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M256 45.977L32 162.125v27.734L256 314.3l192-106.663V296h32V162.125Zm160 142.831l-32 17.777L256 277.7l-128-71.115l-32-17.777l-22.179-12.322L256 82.023l182.179 94.463Z"
                  ></path>
                </svg>
                <h2 className="text-rose-400 text-xl">Education</h2>
              </div>
              <div>
                <ul className="md:grid md:grid-cols-2 md:gap-5">
                  <li className="bg-slate-900 text-gray-400 hover:shadow-rose-400 m-4 p-8 rounded-lg transition duration-500 ease-in-out transform hover:shadow-lg hover:-translate-y-2 ">
                    <h2 className="text-xl">MBA - Marketing</h2>
                    <h3 className="text-sm">LOYOLA COLLEGE PU-LCS</h3>
                    <h4>2021- 2023</h4>
                  </li>
                  <li className="bg-slate-900 text-gray-400 hover:shadow-rose-400 m-4 p-8 rounded-lg transition duration-500 ease-in-out transform hover:shadow-lg hover:-translate-y-2 ">
                    <h2 className="text-xl">Bachelor of Commerce</h2>
                    <h3 className="text-sm">STELLA MARIS COLLEGE</h3>
                    <h4>2017- 2020</h4>
                  </li>
                </ul>
              </div>
            </div>
         
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
