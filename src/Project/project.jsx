// FILE: src/assets/Pages/Project.jsx

import React from 'react';
import p1Image from '/p1.png';
import p2Image from '/p2.png';
import p3Image from '/p3.png';
import p4Image from '/p4.png';


const Project = () => {
  return (
    <div className='bg-black text-white min-h-screen p-4 flex flex-col items-center justify-center'>
      <h1 className="text-4xl font-bold text-cyan-400 mb-8 mt-4 text-center">My Projects</h1>

      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 w-full max-w-7xl mx-auto'>

        {/* Project Item 1 */}
        <div className='bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300'>
          {/* Use the imported image variable here */}
          <img src={p1Image} className="w-full h-auto object-cover" alt="Project 1" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Home Page Design</h2>
            <p className="text-gray-400 text-sm">A visually appealing and responsive home page, designed to provide a compelling first impression for users. Features modern UI/UX principles and clean aesthetics.</p>
            <a href="#" className="text-cyan-400 hover:underline mt-2 inline-block">View Project</a>
          </div>
        </div>

        {/* Project Item 2 */}
        <div className='bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300'>
          <img src={p2Image} className="w-full h-auto object-cover" alt="Project 2" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Sales Analysis Dashboard</h2>
            <p className="text-gray-400 text-sm">An interactive dashboard for analyzing sales data, including product performance, revenue tracking, and identification of best-selling items.</p>
            <a href="#" className="text-cyan-400 hover:underline mt-2 inline-block">View Project</a>
          </div>
        </div>

        {/* Project Item 3 */}
        <div className='bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300'>
          <img src={p3Image} className="w-full h-auto object-cover" alt="Project 3" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">My Portfolio Page</h2>
            <p className="text-gray-400 text-sm">This project showcases my skills and projects, providing a comprehensive overview of my work as a software engineer.</p>
            <a href="#" className="text-cyan-400 hover:underline mt-2 inline-block">View Project</a>
          </div>
        </div>

        {/* Project Item 4 */}
        <div className='bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300'>
          <img src={p4Image} className="w-full h-auto object-cover" alt="Project 4" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Shopping Cart Page</h2>
            <p className="text-gray-400 text-sm">A functional shopping cart interface, enabling users to add, remove, and manage items before proceeding to checkout.</p>
            <a href="#" className="text-cyan-400 hover:underline mt-2 inline-block">View Project</a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Project;