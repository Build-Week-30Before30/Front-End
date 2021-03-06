import React from 'react';
import { Link } from 'react-router-dom';
import './ComponentCSS/NavBar.css';

//NavBar built for before users login
const NavBar = () => {
   return (
         <nav className='login-nav'>
            <h1>30before30</h1>
            <div className='button-contain-nav'>
            <button>
                  <Link className='nav-link' to='/'>
                     Login
                  </Link>
               </button>
               <button>
                  <Link className='nav-link' to='/Signup'>
                     Signup
                  </Link>
               </button>
            </div>
         </nav>
   );
};

export default NavBar;
