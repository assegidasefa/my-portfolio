import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        // "YOUR_SERVICE_ID",
        // "YOUR_TEMPLATE_ID",
        "service_l78wriv",
        "template_j49x3da",
        form.current,
        // "YOUR_PUBLIC_KEY"
        "jZJJD8r-f0ANE4xyM"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      name="contact"
      className="w-full h-screen  bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600  text-gray-300">
            Contanct
          </p>
          <p className="py-4  text-gray-300">
            Submit the form below or shoot me an email -
            assegidassefa7@gmail.com
          </p>
        </div>
        <input
          className="p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Name"
          //   name="name"
          name="from_name"
        />
        <input
          className="bg-[#ccd6f6] my-4 p-2"
          type="email"
          placeholder="Email"
          //   name="email"
          name="from_email"
        />
        <textarea
          className="p-2 bg-[#ccd6f6]"
          placeholder="Message"
          //   name="message"
          name="message"
          rows="10"
        />
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
}

export default Contact;
