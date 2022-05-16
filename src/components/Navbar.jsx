import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { IoIosPaper } from 'react-icons/io';
import {Fade} from 'react-reveal'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);





  return (
    
    <div className='sticky  w-full h-[80px] flex justify-between items-center px-4 bg-[] text-white font-bold'>
      <div>
        DiannaGanova 👩🏻‍💻
      </div>

      {/* menu */}
      <Fade top>
      <ul className='hidden md:flex font-bold'>
        <li className='font-bold'>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='font-bold'>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='font-bold'>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='font-bold'>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='font-bold'>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      </Fade>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 '>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute text-gray-600 left-0 top-0 w-full bg-pink-200 px-1 py-1 flex flex-row  opacity-1'
        }
      >
    
    
        <li className='py-6 text-1xl font-bold'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-.5xl font-bold'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-.5xl font-bold'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li className='flex justify-between my-6 font-bold'>
          <a href='https://www.linkedin.com/in/dianna-ganova-529295189/'>
            <FaLinkedin className='icon  text-1xl' />
          </a>
          </li>
          <li>
          <a href='https://github.com/diiiiana99'>
            <FaGithub className='icon text-1xl my-6'/>
          </a>
          </li>
          <li>
          <a href='https://www.docdroid.net/UJ4lZdz/dianna-ganova-resume-1-pdf'>
            <IoIosPaper className='icon text-1xl my-6' />
            </a>
          </li>
        
      </ul>

      {/* Social icons */}
        <Fade left>
      <div className='hidden lg:flex fixed flex-col top-[2%] left-0 bg-pink'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-86px] hover:ml-[-10px] duration-300 bg-blue-350'>
            <a
              className='flex justify-between items-center w-full text-white'
              href='https://www.linkedin.com/in/dianna-ganova-529295189/'
            >
              LinkedIn <FaLinkedin size={43} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-86px] hover:ml-[-10px] duration-300 '>
            <a
              className='flex justify-between items-center w-full text-white '
              href='https://github.com/diiiiana99'
            >
              Github <FaGithub size={43} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-86px] hover:ml-[-10px] duration-300   hover:border-pink-600 '>
            <a
              className='flex justify-between items-center w-full text-white' 
              href='https://www.docdroid.net/jrconOK/dianna-ganova-resume-2-pdf'
                        >
              Resume <IoIosPaper size={43} />
            </a>
          </li>
        </ul>
      </div>
      </Fade>
    </div>
   
  );
};

export default Navbar;
