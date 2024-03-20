import React from 'react'
import { FC } from "react";

import Image from "next/image";

const About: FC = () => {
    return (
<>
<div className="flex justify-between  bg-[#0077b6] text-white p-16 flex-col md:flex-row">
  <h1 className="text-2xl font-bold">OUR TEAM WILL DELIVER OPTIMAL <br /> FUNCTIONALITY AND USER EXPERIENCE</h1>
  <button className="bg-green-500 hover:bg-green-300 text-white px-10 py-3 inline-flex items-center">
    TALK TO US
  </button>
</div>

<div className="flex justify-center mt-8">
  <div className="max-w-lg mr-8 hidden md:block">
    <Image src="/about.png" alt="Logo" width={700} height={650} className="" />
  </div>
  <div className="bg-[#9cc3d5ff] p-6 rounded-lg shadow-lg text-gray-800 max-w-lg">
    <h1 className="text-3xl font-serif mb-4 text-center">GET A READY-MADE WEB SOLUTION</h1>
    <p className="text-gray-600 text-lg text-center mb-6">We constantly test, update, and refine our development processes. Our developers are also committed to ongoing learning so that your project can benefit from recent innovations and technologies. All of this allows us to provide you with a streamlined experience, from initial brainstorming to the implementation and maintenance of your solution. Your product will have the following:</p>
    <div className='mt-7 text-gray-800 text-lg'>
      <h2 className="mb-4 animate-pulse">Features tailored precisely to your requirements</h2>
      <h2 className="mb-4 animate-pulse">Features tailored precisely to your requirements</h2>
      <h2 className="mb-4 animate-pulse">Features tailored precisely to your requirements</h2>
    </div>
  </div>
</div>

</>
        )
    }
    
    export default About