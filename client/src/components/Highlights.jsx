import React from 'react'

const Highlights = () => {
  return (
    <div className="bg-slate-900 md:h-screen flex items-center pt-10 pb-10">
      <section className="max-w-6xl mx-auto">
        <h2 className="text-center text-xl font-semibold text-slate-400 p-5">
          My <span className="text-rose-400">highlights</span>
        </h2>
        <div className="md:grid md:grid-cols-3 md:gap-7">
          <div className="bg-slate-950 text-gray-400 hover:shadow-rose-400 m-4 p-8 rounded-lg transition duration-500 ease-in-out transform hover:shadow-lg hover:-translate-y-2">
            <div className="pt-2 pb-2">
              <svg
                className="fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M2 2h20v8h-2V4H4v9.586l5-5l5.914 5.914l-1.414 1.414l-4.5-4.5l-5 5V20h6v2H2zm13.547 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0a3 3 0 0 1-6 0m7.24 4.086l4.127 4.127l-7.286 7.287H12.5l-.001-4.128zm-.922 3.75l1.299 1.3l.922-.923l-1.3-1.299zm-.115 2.713l-1.3-1.299l-2.95 2.95v1.3h1.3z"
                ></path>
              </svg>
            </div>
            <div className="space-y-4">
              <h4 className="text-rose-400 text-xl font-semibold">
                UI/UX designer
              </h4>
              <p>
                As a UI/UX designer, my goal is to deliver immersive and
                engaging experiences that leave a lasting impact on users while
                meeting the unique needs of each project.
              </p>
            </div>
          </div>

          <div className="bg-slate-950 text-gray-400 hover:shadow-rose-400 m-4 p-8 rounded-lg transition duration-500 ease-in-out transform hover:shadow-lg hover:-translate-y-2">
            <div className="pt-2 pb-2">
              <svg
                className="fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M16.36 14c.08-.66.14-1.32.14-2c0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2c0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2c0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.923 7.923 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2c0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.65 15.65 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"
                ></path>
              </svg>
            </div>
            <div className="space-y-4">
              <h4 className="text-rose-400 text-xl font-semibold">
                Web programming
              </h4>
              <p>
                Specializing in web programming, I excel in developing
                high-performing web applications by leveraging front-end and
                back-end technologies. I strive to create dynamic online
                experiences that resonate with users.
              </p>
            </div>
          </div>

          <div className="bg-slate-950 text-gray-400 hover:shadow-rose-400 m-4 p-8 rounded-lg transition duration-500 ease-in-out transform hover:shadow-lg hover:-translate-y-2">
            <div className="pt-2 pb-2">
              <svg
              className="fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 11q3.75 0 6.375-1.175T21 7q0-1.65-2.625-2.825T12 3Q8.25 3 5.625 4.175T3 7q0 1.65 2.625 2.825T12 11m0 2.5q1.025 0 2.563-.213t2.962-.687q1.425-.475 2.45-1.237T21 9.5V12q0 1.1-1.025 1.863t-2.45 1.237q-1.425.475-2.962.688T12 16q-1.025 0-2.562-.213T6.475 15.1q-1.425-.475-2.45-1.237T3 12V9.5q0 1.1 1.025 1.863t2.45 1.237q1.425.475 2.963.688T12 13.5m0 5q1.025 0 2.563-.213t2.962-.687q1.425-.475 2.45-1.237T21 14.5V17q0 1.1-1.025 1.863t-2.45 1.237q-1.425.475-2.962.688T12 21q-1.025 0-2.562-.213T6.475 20.1q-1.425-.475-2.45-1.237T3 17v-2.5q0 1.1 1.025 1.863t2.45 1.237q1.425.475 2.963.688T12 18.5"
                ></path>
              </svg>
            </div>
            <div className="space-y-4">
              <h4 className="text-rose-400 text-xl font-semibold">
                Database administrator
              </h4>
              <p>
                Drawing from my tenure as a database administrator from my
                Previous Company experience, I bring extensive expertise in managing and
                optimizing database systems to ensure seamless performance and
                reliability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Highlights
