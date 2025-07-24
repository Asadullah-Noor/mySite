import React from 'react';
import { FaGithub, FaRegCopyright } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io';
import { IoLogoTwitter } from 'react-icons/io5';
const Footer = () => {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center">
        <a
          href="https://github.com/Asadullah-Noor"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <FaGithub className="text-3xl hover:text-emerald-600  text-neutral-400" />
          <p className='text-white'>GitHub</p>
        </a>
        <a
          href="https://www.linkedin.com/in/asadullahnoor-tech/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <IoLogoLinkedin className="text-3xl hover:text-cyan-600 text-neutral-400" />
          <p className='text-white'>LinkedIn</p>
        </a>
        <a
          href="https://x.com/Asadullah_Nor"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <IoLogoTwitter className="text-3xl hover:text-cyan-600 text-neutral-400" />
          <p className='text-white'>Twitter</p>
        </a>
      </div>
      <div className="mt-16 flex justify-center items-center">
        <p className="text-sm text-neutral-300 inline-flex items-center gap-1">
          Copyright <FaRegCopyright className="text-xs" />
          <span className="text-cyan-400">Xhafi-Xolution</span>
        </p>
      </div>
    </div>
  );
};
export default Footer;
