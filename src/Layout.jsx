// Layout.jsx
import React from 'react';
import Image from './components/image.jsx';
import Logo from './components/Logo.jsx';
import Quote from './Skil/qoute.jsx';
import Skill from './Skil/Skill.jsx';
import { Outlet } from 'react-router-dom';
import Hover from './Hover.jsx';
const Layout = () => (
  <>
    <div className='from-stone-800 bg-gradient-to-b to-black'>
      <Image />
      <Logo />
      <Quote />
      <Skill />
{/* <Hover/> */}
    </div>
    <Outlet /> {/* Nested routes render here */}
  </>
);

export default Layout;
