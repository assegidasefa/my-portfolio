import React from "react";
import { motion } from "framer-motion";

const rightWordVarient = {
  hidden: {
    x: 400,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 4,
    },
  },
};

const leftWordVarient = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 4,
    },
  },
};

function About() {
  return (
    <div name="about" className="w-full h-96 bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 3 } }}
              className="text-4xl font-bold inline border-b-4 border-pink-600"
            >
              About
            </motion.p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] w-full grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
          <motion.div
            animate={{ opacity: 1, y: 0, transition: { duration: 2 } }}
            initial={{ opacity: 0, y: -100 }}
            className="sm:text-right text-4xl w-[100%]  font-bold"
          >
            <p>Hi, Client , nice to meet you. Please take a look around </p>
          </motion.div>
          <motion.div
            className="w-[100%]"
            animate={{ opacity: 1, y: 0, transition: { duration: 2 } }}
            initial={{ opacity: 0, y: 100 }}
          >
            <p>
              The web is the easiest channel to produce on because the cost of
              entry is so low if you know web development. So in my down time I
              produce rather than consume. And then I go do the day job, which
              is the same thing. Mark Twain had something to say about that one.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
