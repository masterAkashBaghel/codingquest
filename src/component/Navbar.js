import React, { useState } from 'react';
import logo from '../assets/Logo.png'
import { BsSun } from 'react-icons/bs';
import { MdOutlineDarkMode } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
 

const Navbar = ({toggleDarkMode,isDarkMode}) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
   
  const logos = '<ContestQuest/>';

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
 

  return (
    <div className={`  ${isDarkMode ? 'bg-[#054275] text-white' : 'bg-white text-black'} hello`}> 
      <div className='container mx-auto px-4 py-2 flex  lg:justify-around  md:justify-between sm:justify-between items-center'>
        <div className='flex items-center'>
          {/* Logo */}
          <img className='h-[80px]' src={logo} alt='logo' />
          <h1 className=' font-bold lg:text-2xl md:text-xl sm:text-lg'>{logos}</h1>
        </div>
        {/* Hamburger Menu (for small and extra-small screens) */}
        <div className='absolute right-2 lg:hidden'>
          <button
            onClick={toggleMobileMenu}
            className='text-2xl text-gray-500 focus:outline-none mr-6'
          >
            ☰
          </button>
           
        </div>
       
        {/* Navigation Menu (for larger screens) */}
        <nav className='hidden lg:flex lg:space-x-5'>
          <ul className='lg:flex gap-10 text-xl  '>
          <NavLink to='/' className="nav-link" onClick={toggleMobileMenu}>
            Home
          </NavLink>
          <NavLink to='/Sites' className="nav-link" onClick={toggleMobileMenu}>
            Sites
          </NavLink>
             
            <NavLink to= '/Contest' className="nav-link" onClick={toggleMobileMenu}>
           All Contests
          </NavLink>

          <NavLink to='/About' className="nav-link" onClick={toggleMobileMenu}>
            About
          </NavLink>
          <li>
          <button onClick={toggleDarkMode}>
  {isDarkMode ? <BsSun></BsSun> : <MdOutlineDarkMode></MdOutlineDarkMode>}
</button>

          </li>
          </ul>
       
        </nav>

          
      </div>
      {/* Hamburger Menu Items (for small and extra-small screens) */}
      {isMobileMenuOpen && (
        <div className='ml-4 lg:hidden '>
          <ul className='flex flex-col gap-3 items-center justify-center'>
            <li> <NavLink to='/' className="nav-link" onClick={toggleMobileMenu}>
            Home
          </NavLink></li>
            <li>   <NavLink to='/Sites' className="nav-link" onClick={toggleMobileMenu}>
             Supported Sites
          </NavLink></li>
            <li> <NavLink to= '/Contest' className="nav-link" onClick={toggleMobileMenu}>
         All Contests
          </NavLink></li>
            <li> <NavLink to='/About' className="nav-link" onClick={toggleMobileMenu}>
            About CodingQuest
          </NavLink></li>

          <li>
          <button onClick={toggleDarkMode}>
  {isDarkMode ? <BsSun></BsSun> : <MdOutlineDarkMode></MdOutlineDarkMode>} 
</button>
          </li>
           
          </ul>
        
        </div>
      )}
    </div>
  );
};

export default Navbar;
