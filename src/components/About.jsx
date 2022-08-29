import React from 'react'

function About() {
    return (
        <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-pink-600">About</p>
                    </div>
                    <div>

                    </div>
                </div>
                    
                    <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                        <div className="sm:text-right text-4xl  font-bold">
                            <p>Hi, Client , nice to meet you. Please take a look around </p>
                        </div>
                        <div>
                            <p>The web is the easiest channel to produce on because
                                 the cost of entry is so low if you know web development.
                                 So in my down time I produce rather than consume. 
                                And then I go do the day job, which is the same thing. 
                                Mark Twain had something to say about that one.
                            </p>
                        </div>
                    </div>

            </div>
        </div>
    )
}

export default About