import React, {useState, useEffect} from 'react';
import NavBrand from '../NavComponents/NavBrand.jsx';
import NavMenu from '../NavComponents/NavMenu.jsx';
import NavSocial from '../NavComponents/NavSocial.jsx';
import './NavFull.css';

import {GiHamburgerMenu, GoX} from 'react-icons/gi';

const NavFull = () => {
  return (
    <div className='NavFull'>
      <NavBrand brandName={'Makerinchief'} brandLink={'/'} />
      <NavMenu />
      <NavSocial />
    </div>
  );
};

export default NavFull;
