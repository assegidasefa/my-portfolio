import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaBook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { GiOpenedFoodCan } from "react-icons/gi";
import { BsPencilSquare } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full h-72 bg-[#0a1922] x">
      {/* <hr className="bg-green-900" /> */}
      <div className=" h-28 bg-transiparent flex p-4 text-gray-400 justify-around  ">
        <div className="bg-transiparent  w-36 flex flex-col ">
          <p className="border-b-2 border-green-600 text-center pb-2">
            Social Media
          </p>
          <div className="flex flex-col w-1/3 items-center justify-center ml-3 gap-2 p-8">
            <ul className="flex flex-col items-start ml-3 gap-2">
              <li className="flex gap-2">
                <a
                  href="https://www.linkedin.com/in/tagicho-shitaye-55377717a/"
                  target="_blank"
                >
                  <FaLinkedin className="md:w-6 md:h-6 w-5 h-5" />
                </a>
                Linkedin
              </li>
              <li className="flex gap-2">
                <a href="https://Instagram.com/wushiy_tage" target="_blank">
                  <BsInstagram className="md:w-6 md:h-6 w-5 h-5" />
                </a>
                Instagram
              </li>
              <li className="flex gap-2">
                <a href="https://github.com/tagichoshitaye" target="_blank">
                  <FaGithub className="md:w-6 md:h-6 w-5 h-5" />
                </a>
                Gitbub
              </li>
              <li className="flex gap-2">
                <a href="https://twitter.com/Tagicho_shitaye" target="_blank">
                  <FiTwitter className="md:w-6 md:h-6 w-5 h-5" />
                </a>
                Twitter
              </li>
              <li className="flex gap-2">
                <a
                  href="https://www.facebook.com/tagicho.shitaye "
                  target="_blank"
                >
                  <AiFillFacebook className="md:w-6 md:h-6 w-5 h-5" />
                </a>
                Facebook
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-transiparent gap-4 w-36 md:text-xl text-md ">
          <p className="border-b-2 border-green-600 text-center pb-2">
            Hobbies
          </p>
          <ul className="text-sm p-4">
            <li className="flex gap-2 my-2">
              <FaBook className="w-5 h-5" />
              <span>Reading</span>
            </li>
            <li className="flex gap-2">
              <GiOpenedFoodCan className="w-5 h-5" />
              <span>Eating</span>
            </li>
            <li className="flex gap-2 my-2">
              <BsPencilSquare className="w-5 h-5" />
              <span> writing</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-transiparent w-full items-center h-12 text-gray-500 flex justify-center"></div>
    </div>
  );
};

export default Footer;
