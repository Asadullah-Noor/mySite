import React from 'react';
import Tool from '/tool-box.png';
import Footer from '../Footer/footer';
import { useState } from 'react';
const Skill = () => {
  const [hovered, setHovered] = useState(null);
  const skills = [
    {
      label: 'Javascript',
      tag: 'JS',
      textColor: 'text-amber-400',
      BorderColor: 'border-amber-400',
      hoverBg: 'hover:bg-amber-500',
      image: 'JAVASCRIPT.webp',
      TEXT: 'JavaScript is a versatile scripting language used to create interactive websites, applications, and dynamic user interfaces.',
    },
    {
      label: 'HTML',
      tag: 'H5',
      textColor: 'text-red-400',
      BorderColor: 'border-red-400',
      hoverBg: 'hover:bg-orange-600',
      image: 'HTML.webp',
      TEXT: 'HTML (HyperText Markup Language) is the standard markup language for creating web pages, providing structure and content to the web.',
    },
    {
      label: 'CSS',
      tag: 'C3',
      textColor: 'text-cyan-800',
      BorderColor: 'border-cyan-800',
      hoverBg: 'hover:bg-cyan-500',
      image: 'CSS3.webp',
      TEXT: 'CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML or XML, controlling layout, colors, and fonts.',
    },
    {
      label: 'Node',
      tag: 'NJ',
      BorderColor: 'border-emerald-500',
      textColor: 'text-emerald-500',
      hoverBg: 'hover:bg-emerald-900',
      image: 'Node.webp',
      TEXT: "Node.js is a JavaScript runtime built on Chrome's V8 engine, allowing developers to build scalable network applications using JavaScript on the server side.",
    },
    {
      label: 'React',
      tag: 'R',
      textColor: 'text-blue-700',
    BorderColor: 'border-blue-700',
      hoverBg: 'hover:bg-blue-500',
      image: 'REACT.webp',
      TEXT: 'React is a JavaScript library for building user interfaces, allowing developers to create reusable UI components and manage the state of applications efficiently.',
    },
    {
      label: 'TailWind',
      tag: 'TW',
      BorderColor: 'border-blue-400',
      textColor: 'text-blue-400',
      hoverBg: 'hover:bg-cyan-800',
      image: 'Tailwind.webp',
      TEXT: 'Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without leaving your HTML.',
    },
    {
      label: 'Bootstrap',
      tag: 'BS',
      textColor: 'text-purple-700',
      BorderColor: 'border-purple-700',
      hoverBg: 'hover:bg-purple-500',
      image: 'Bootstrap.webp',
      TEXT: 'Bootstrap is a popular front-end framework for developing responsive and mobile-first websites, providing pre-designed components and a grid system.',
    },
    {
      label: 'Express',
      tag: 'EX',
      textColor: 'text-gray-400',
      BorderColor: 'border-gray-400',
      hoverBg: 'hover:bg-gray-500',
      image: 'Express.webp',
      TEXT: 'Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications.',
    },
    {
      label: 'MongoDB',
      tag: 'M',
      BorderColor: 'border-green-600',
      textColor: 'text-green-600',
      hoverBg: 'hover:bg-green-950',
      image: 'Mongoo.webp',
      TEXT: 'MongoDB is a NoSQL database that uses a document-oriented data model, allowing for flexible and scalable data storage and retrieval.',
    },
  ];

  return (
    <div className="pb-16">
      {/* Title */}
      <div className="flex flex-row justify-center w-140 gap-2 items-center mx-auto mb-8">
        <h1 className="font-bold text-white text-6xl">Tools</h1>
        <img src={Tool} alt="tool_box_image" className="h-10 w-10" />
      </div>

      {/* Grid of Skill Cards */}
       <div className="w-full h-70 rounded-sm bg-[#212121]  flex gap-[5px] p-1.5 overflow-hidden">
      {skills.map((skill, index) => (
        <div
          key={index}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          className={`h-full transition-all duration-500 ease-in-out
                      flex justify-center items-center
                      rounded-sm cursor-pointer border ${skill.BorderColor} ${skill.hoverBg} bg-[#212121]
                      ${hovered === null ? 'w-[140px]' : hovered === index ? 'w-[460px]' : 'w-[200px]'}`}
        >
          <span
            className={`transition-all duration-500 origin-left text-pink-400 uppercase tracking-wide text-xs
                        ${hovered === index ? 'rotate-0 px-2' : '-rotate-90 text-[10px]'}`}>
                          {hovered === index ? (
  <img
    src={skill.image}
    alt={skill.label}
    className="w-full rounded-full object-cover mr-2"
  />
) : (
  <p className={` ${skill.textColor} whitespace-nowrap font-bold text-xl `}>{skill.label}</p>
)}


          </span>
        </div>
      ))}
    </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Skill;
