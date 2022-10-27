import React, {useState, useEffect} from 'react';
import NavHome from '../NavComponents/NavHome.jsx';
import NavMenu from '../NavComponents/NavMenu.jsx';
import NavSocial from '../NavComponents/NavSocial.jsx';
import './NavCollapse.css'

import {GiHamburgerMenu, GoX} from 'react-icons/gi';

const NavCollapse = ({orientation}) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  const handleClick = (event) => {
    event.preventDefault();
    // Close the menu if an anchor tag is clicked.
    const {nodeName} = event.target;
    if (nodeName === 'A') {
      setShowMenu(false);
    }
  };

  return (
    <div className='NavCollapse'>
      <div className='nav-collapse-header'>
        <NavHome />
        <button className='nav-ham-btn' onClick={toggleMenu}>
          <GiHamburgerMenu size={60}
            style={showMenu ?
            {transform: 'rotate(90deg)'} : {transform: 'rotate(0deg)'}} />
        </button>
      </div>
      {
        showMenu ?
        <div className='nav-collapse-content' onClick={handleClick}>
          <NavMenu />
          <NavSocial />
        </div> : null
      }
    </div>
  );
};

export default NavCollapse;
