import React from "react";

const Contact = () => {
  return (
    <div className="md:h-screen pt-10 pb-10">
      <section className="max-w-6xl mx-auto p-4">
        <h2 className="text-center text-xl font-semibold text-slate-400 p-5">
          Let's Discuss Our <span className="text-rose-400">Next Project</span>
        </h2>
        <form action="" className="space-y-5 bg-slate-950 shadow max-w-xl mx-auto p-10 rounded">
          <div>
            <input className="px-4 py-2 rounded w-full bg-slate-200 " type="text" name="name" placeholder="FullName" required />
          </div>
          <div>
            <input className="px-4 py-2 rounded w-full bg-slate-200 " type="email" name="email" placeholder="Email" required />
          </div>
          <div>
            <textarea
            className="px-4 py-2 rounded w-full bg-slate-200 "
              name="message"
              placeholder="Type Message"
              rows="5"
            ></textarea>
          </div>
          <div>
            <button className="px-4 py-2 bg-rose-400 hover:bg-rose-500 rounded-lg text-gray-950 font-semibold w-full">Send</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
