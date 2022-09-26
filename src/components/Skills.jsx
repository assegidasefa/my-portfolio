import React from "react";
import Css from "../assets/css.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import mongo from "../assets/mongo.png";
import node from "../assets/node.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";
import "../style/style.css";

function Skills() {
  return (
    <div
      name="skills"
      className="flex flex-wrap w-full h-full bg-[#0a192f] text-gray-300"
    >
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-screen h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4">These are the technology I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-4 bg-transparent gap-4 text-center py-8">
          <div className="btn btn1 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={html} alt="Html icon" />
            <p className="my-4">HTML</p>
            <p className="">
              I have an extensive experience on html and html5. As a developer
              HTML was my first language and I enjoyed learning it.
            </p>
          </div>
          <div className="btn btn1 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Css} alt="Html icon" />
            <p className="my-4">CSS</p>
            <p className="">
              I like CSS it's my the most favorite so far. It gives a life for
              html code and We can style our design as we want.
            </p>
          </div>
          <div className="btn btn1 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={tailwind} alt="Html icon" />
            <p className="my-4">TAILWIND</p>
            <p className="">
              Working on different projects with tailwind css would make me
              write fast codes
            </p>
          </div>
          <div className="btn btn1 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={javascript} alt="Html icon" />
            <p className="my-4">JAVASCRIPT</p>
            <p className="">
              It sounds to me like without JS we no longer talk about the web.
              It's so powerful and I like it.
            </p>
          </div>
          <div className="btn btn1 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={react} alt="Html icon" />
            <p className="my-4">REACT</p>
            <p className="">
              To know Javascript is to know React. React is Simple yet powerful
              JS Library that made our lives easy.
            </p>
          </div>
          <div className="btn btn1 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={node} alt="Html icon" />
            <p className="my-4">NODE JS</p>
            <p className="">
              Working with Node Js for backend is the best thing ever especially
              when you are familiar with Javascript
            </p>
          </div>
          <div className="btn btn1 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={mongo} alt="Html icon" />
            <p className="my-4">MONGO DB</p>
            <p className="">
              Instead of going for traditional database, I would proudly go to
              Object oreiented DB. That's why I went for Mongo DB
            </p>
          </div>
          <div className="btn btn1 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={github} alt="Html icon" />
            <p className="my-4">GITHUB</p>
            <p className="">
              Github is the best version control platform and It's natural for
              developers to know Github.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
