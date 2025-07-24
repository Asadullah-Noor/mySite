import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';  // Import your layout
import Project from './Project/project.jsx';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="projects" element={<Project />} />
          <Route path="/" element={<Layout />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
