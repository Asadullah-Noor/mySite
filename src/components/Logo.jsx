import React from 'react';
import { Link } from 'react-router-dom';
import { DocumentTextIcon, CodeBracketIcon } from '@heroicons/react/24/solid';
const Logo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
     <a href='/Asadullah.pdf' target="_blank" rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-400 to-emerald-600
                   text-white rounded-xl py-3 px-5 shadow-md hover:shadow-xl transition duration-300 transform
                   hover:-translate-y-1 hover:from-gray-900 hover:to-black"
      >
        <DocumentTextIcon className="h-5 w-5 mr-2" />
        Resume
      </a>

      <Link
        to="/projects"
        className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-400 to-emerald-600
                   text-white rounded-xl py-3 px-5 shadow-md hover:shadow-xl transition duration-300 transform
                   hover:-translate-y-1 hover:from-gray-900 hover:to-black"
      >
        <CodeBracketIcon className="h-5 w-5 mr-2" />
        Projects
      </Link>
    </div>
  );
};

export default Logo;
