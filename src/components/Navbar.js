import React, { useState } from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

import { FaBookOpen} from 'react-icons/fa';
import {GiHamburgerMenu} from 'react-icons/gi'
const Navbar = () => {
  const [ShowMediaIcons,setShowMediaIcons]=useState(false);
  return (
    <div>
      <nav className='main-nav'>
        {/* 1st part */}
        <div className='logo-name'>
          <h2>
            <span>E</span>asy
            <span>E</span>ntrance
          </h2>

        </div>
        {/* 2nd part */}
        <div className= {ShowMediaIcons? 'menu-link mobile-menu-link':'menu-link'}>
          <ul>
            <Link to='/' ><li>Home</li> </Link>
            {/* <li>
              <a href='#'>Home</a>
            </li> */}
            <Link to='/entrance-exams' ><li>Entrance Exams</li> </Link>
            {/* <li>
              <a href='#'>About</a>
            </li> */}
             <Link to='/about' ><li>About</li> </Link>
            {/* <li>
              <a href='#'>Contact</a>
            </li> */}
            <Link to='/contact' ><li>Contact</li> </Link>
          </ul>
        </div>
        {/* 3rd part */}
        <div className='logo'>
          <ul className='desktop'>
            <li><FaBookOpen></FaBookOpen></li>
          </ul>
          {/* hamburger */}
          <div className='hamburger-menu'>
            <a href='#' onClick={()=>setShowMediaIcons(!ShowMediaIcons)}>
              <GiHamburgerMenu></GiHamburgerMenu>
            </a>
          </div>
        </div>
      </nav>
      
    </div>
  )
}

export default Navbar
