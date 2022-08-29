import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

function Home() {
    return (
        <div name="home" className="w-full h-screen bg-[#0a192f]">
            {/* container */}
            <div className=" max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full" >
                <p className="text-pink-600">Hi, My name is </p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Assegid Assefa</h1>
                <h2 className="text-4xl sm:text-7xl py-2 font-bold text-[#8892b0]">I am A Fullstack Developer</h2>
                <p className="text-[#8892b0] py-4 max-w-[700px]">A full-stack developer has to be fluent in JavaScript,
                    HTML, CSS - and one or more back-end languages/frameworks
                    - NODEJS, PHP (urgh!), Python, Java, C++…whatever.
                    They should also be comfortable with database query languages - SQL, etc.</p>
                <div>
                    <button className="text-white group border-2 px-6 py-3 flex justify-between items-center hover:bg-pink-600 hover:border-pink-600">
                        View Work
                        <span className="group-hover:rotate-90 duration-300">

                            <HiArrowNarrowRight className="ml-3" />
                        </span>

                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home