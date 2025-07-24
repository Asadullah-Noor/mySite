// Resume/resume.jsx
import React from 'react';
import { Link } from 'react-router-dom';
const ResumA = () => {
  return (
    <div className="text-center p-6">
      <h2 className="text-2xl font-bold mb-4">My Resume</h2>
      <a
        href="/Asadullah Noor.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded inline-block"
      >
        View Resume
      </a>
      <a
        href="/Asadullah Noor.pdf"
        download
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded ml-4 inline-block"
      >
        Download Resume
      </a>

      {/* Go back home */}
      <div className="mt-6">
        <Link to="/" className="text-cyan-500 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ResumA;
