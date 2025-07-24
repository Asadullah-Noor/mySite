// src/components/Image.jsx
import React from 'react';
import asadImage from '../assets/asad.JPG';
import TypeEffect from './Text';
import Project from '../Project/project';
const Image = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>

      {/* This is your circular profile card */}
      <div className="group relative w-[300px] h-[300px] bg-blue-950 rounded-full overflow-hidden flex justify-center items-center shadow-lg transition-all duration-300 hover:shadow-2xl">
        {/* Make sure no mt-30 ms-120 here */}
        <div className="absolute inset-y-[-10px] inset-x-[100px]
                         bg-gradient-to-br from-gradient-start to-gradient-end
                         transition-all duration-75
                         animate-spin-slow
                         group-hover:inset-y-[-20px] group-hover:inset-x-0">
        </div>
        <div className="absolute inset-[10px] rounded-full z-10"></div>
        <div className="absolute inset-[30px] border-[2px] border-light-peach z-30 rounded-full flex justify-center items-center overflow-hidden flex-col">
          <img
            src={asadImage}
            alt="Profile of AsadUllah"
            className="absolute top-0 left-0 h-full w-full object-cover
                       transition-opacity duration-500 pointer-events-none z-40
                       group-hover:opacity-0"
          />
          <h2 className="relative text-center text-[15px] font-semibold tracking-widest uppercase text-white
                         py-2.5 z-20 opacity-0 transition-opacity duration-300 delay-150
                         group-hover:opacity-100">
            AsadUllah
            <span className="block font-light text-[13px] py-1.5">Software Engineer</span>
          </h2>
        </div>
      </div>

      {/* This is your AnimatedText component, now placed below the card */}
      <div className="mt-8">
      
      <h1 className="text-4xl font-bold text-cyan-500 text-center">Hi I'm Asadullah Noor </h1>
      <h2 className='text-white'>FULL STACK DEVELOPER || MERN STACK DEVELOPER</h2>
      </div>
<TypeEffect/>
    </div>
  );
};

export default Image;