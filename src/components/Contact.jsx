import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [loading, setLoaing] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoaing(true);
    emailjs
      .sendForm(
        // "YOUR_SERVICE_ID",
        // "YOUR_TEMPLATE_ID",
        "service_tf6yal7",
        "template_ta5nkzx",
        form.current,
        // "YOUR_PUBLIC_KEY"
        "QxmVZ7tP9MO4BQG1R"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message successfully sent!");
          e.target.reset();
          setLoaing(false);
        },

        (error) => {
          setLoaing(false);
          toast.error("Fail to send Message. Please try again");
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div
        name="contact"
        className="w-full h-screen  bg-[#0a192f] flex  justify-center items-center p-4"
      >
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600  text-gray-300">
              Contact
            </p>
            <p className="py-4  text-gray-300">
              Submit the form below or shoot me an email -
              tagekyea1991@gmail.com
            </p>
          </div>
          <input
            className="p-2 bg-gray-200 rounded-md text-black font-bold"
            type="text"
            placeholder="Name"
            name="from_name"
            required
          />
          <input
            className="my-4 bg-gray-200 p-2 rounded-md text-black font-bold"
            type="email"
            placeholder="Email"
            name="from_email"
            required
          />
          <textarea
            className="p-2 bg-gray-200 rounded-md text-black font-bold"
            placeholder="Message"
            name="message"
            rows="10"
            required
          />
          <button
            disabled={loading}
            className="text-white border-2 hover:bg-pink-600 rounded-md hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center"
          >
            Let's Collaborate
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
