import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Logo from "../assets/tageone.JPG";
import { motion } from "framer-motion";
import { useMediaQuery } from "./useMediaQuery";

const imgVarients = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 3, ease: "easeInOut" },
  },
};

const nameVarients = {
  hidden: {
    x: 200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 2, ease: "easeInOut" },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    // textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: 5,
      ease: "easeInOut",
    },
  },
  hidden: {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 4,
      },
    },
  },
};

const bottomWordVarient = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 4,
    },
  },
};
const topWordVarient = {
  hidden: {
    y: -200,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 4,
    },
  },
};

function Home() {
  const isSmall = useMediaQuery("(min-width: 480px)");
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="flex gap-4">
          <motion.div
            // animate={{ x: 0, transition: { duration: 4 } }}
            // initial={
            //   isSmall
            //     ? { x: 100, transition: { duration: 4 } }
            //     : { x: 0, transition: { duration: 4 } }
            // }
            animate={{ opacity: 1, transition: { duration: 3 } }}
            initial={{ opacity: 0 }}
            // variants={imgVarients}
            // whileInView="visible"
            // whileHover={{ scale: 1.1 }}
            // initial="hidden"
            className="md:w-[25%] w-[100%] justify-center items-center"
          >
            <img
              src={Logo}
              alt="Logo Image"
              className="w-[140px] h-[170px] sm:w-[220px] sm:h-[250px] rounded-3xl"
              // style={{ width: "220px", height: "250px" }}
            ></img>
          </motion.div>
          <motion.div
            animate={{ y: 0, transition: { duration: 4 } }}
            initial={{ y: -100 }}
            // variants={nameVarients}
            // whileInView="visible"
            // initial="hidden"
            className="flex flex-col md:w-[75%] w-[100%]"
          >
            <p className="text-pink-600 text-xl ">Hi, My name is </p>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] md:my-4">
              Tagicho Shitaye
            </h1>
            <h2 className="text-xl sm:text-3xl py-2 font-bold text-[#8892b0]">
              I am A Fullstack Developer
            </h2>
          </motion.div>
        </div>

        <motion.p
          // variants={bottomWordVarient}
          // whileInView="visible"
          // initial="hidden"
          animate={{ opacity: 1, transition: { duration: 3 } }}
          initial={{ opacity: 0 }}
          className="text-[#8892b0] py-4 max-w-[700px]"
        >
          A full-stack developer has to be fluent in JavaScript, HTML, CSS - and
          one or more back-end languages/frameworks - NODEJS, PHP (urgh!),
          Python, Java, C++…whatever. They should also be comfortable with
          database query languages - SQL, etc.
        </motion.p>
        {/* </motion.div> */}
        <motion.div

        // variants={topWordVarient}
        // initial="hidden"
        // whileInView="visible"
        >
          <motion.button
            // variants={buttonVariants}
            // initial="hidden"
            // whileInView="visible"
            // whileHover="hover"
            animate={{ y: 0, opacity: 1, transition: { duration: 4 } }}
            initial={{ y: -100, opacity: 0 }}
            className="text-white group border-2 px-6 py-3 flex justify-between items-center hover:bg-pink-600 hover:border-pink-600"
          >
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </motion.button>
        </motion.div>
        {/* </motion.div> */}
      </div>
    </div>
  );
}

export default Home;
