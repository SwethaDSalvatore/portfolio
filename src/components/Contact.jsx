import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_kmik7yo", "template_bxveyzw", form.current, {
        publicKey: "m2AQnJJMRhe1u3JuP",
      })
      .then(
        () => {
          // console.log(result.text);
          alert("Message send 😊")
          form.current.reset();
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="md:h-screen pt-10 pb-10">
      <section className="max-w-6xl mx-auto p-4">
        <h2 className="text-center text-xl font-semibold text-slate-400 p-5">
          Let's Discuss Our <span className="text-rose-400">Next Project</span>
        </h2>

      

        <form
          ref={form}
          onSubmit={sendEmail}
          action=""
          className="space-y-5 bg-slate-950 shadow max-w-xl mx-auto p-10 rounded"
        >
          <div>
            <input
              className="px-4 py-2 rounded w-full bg-slate-200 "
              type="text"
              name="user_name"
              placeholder="FullName"
              required
            />
          </div>
          <div>
            <input
              className="px-4 py-2 rounded w-full bg-slate-200 "
              type="email"
              name="user_email"
              placeholder="Email"
              required
            />
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
            <button
              type="submit"
              className="px-4 py-2 bg-rose-400 hover:bg-rose-500 rounded-lg text-gray-950 font-semibold w-full"
            >
              Send
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
