import React, {useState, useEffect, useContext} from 'react';
import NavFull from './NavFull/NavFull.jsx';
import NavCollapse from './NavCollapse/NavCollapse.jsx';

import './Navbar.css';

import useWindowSize from '../../hooks/WindowContext/useWindowSize.js';

const Navbar = () => {
  const {width, height, orientation} = useWindowSize();
  return (
    <div className='Navbar'>
      {
        width > 1400 ?
          <>
          <NavFull />
          </> :
          <NavCollapse width={width} orientation={orientation} />
      }
    </div>
  );
};

export default  Navbar;
