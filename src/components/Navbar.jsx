import React, { useState } from "react";

import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import Logo from "../assets/tagicho_imag.png";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const buttonVariants = {
  hover: {
    scale: 1.1,
    color: "#fff",
    backgroundColor: "#000",
    borderBlockColor: "#fff",
    transition: {
      duration: 0.3,
      yoyo: 5,
      ease: "easeInOut",
    },
  },
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 3,
    },
  },
};

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed top-0 left-0 w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 3 } }}
      >
        <img
          src={Logo}
          alt="Logo Image"
          // style={{ width: "50px" }}
          className="w-[100px] sm:[130px] p-1"
        ></img>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 3 } }}
        className="flex justify-between"
      >
        <ul className="hidden md:flex">
          <motion.li
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <Link activeClass="active" to="home" smooth={true} duration={500}>
              Home
            </Link>
          </motion.li>
          <motion.li
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <Link activeClass="active" to="about" smooth={true} duration={500}>
              About
            </Link>
          </motion.li>
          <motion.li
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <Link activeClass="active" to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </motion.li>

          <motion.li
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <Link activeClass="active" to="work" smooth={true} duration={500}>
              Work
            </Link>
          </motion.li>
          <motion.li
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <Link
              activeClass="active"
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </motion.li>
        </ul>
      </motion.div>

      {/* humburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center "
        }
      >
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            activeClass="active"
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            activeClass="active"
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            onClick={handleClick}
            activeClass="active"
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            onClick={handleClick}
            activeClass="active"
            to="work"
            smooth={true}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            activeClass="active"
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Media */}
      <div className=" hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="h-[60px] w-[160px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/tagicho-shitaye-55377717a/"
              target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="h-[60px] w-[160px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/tagichoshitaye"
              target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="h-[60px] w-[160px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.facebook.com/tagicho.shitaye"
              target="_blank"
            >
              Fackbook <AiFillFacebook size={30} />
            </a>
          </li>
          <li
            className="h-[60px] w-[160px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#e95950]"
            style={{}}
          >
            <a
              className="flex justify-between items-center w-full text-gray-300 "
              href="https://Instagram.com/wushiy_tage"
              target="_blank"
            >
              Instagram <BsInstagram size={30} />
            </a>
          </li>
          <li className="h-[60px] w-[160px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-blue-400">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://twitter.com/Tagicho_shitaye"
              target="_blank"
            >
              Twitter <FiTwitter size={30} />
            </a>
          </li>
          {/* <li className="h-[60px] w-[160px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
              target="_blank"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
