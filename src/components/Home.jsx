import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import {Fade} from 'react-reveal'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[pink] '
    >

      
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full '>
        <Fade bottom>
        <p className='text-pink-500'>Hi, my name is</p>
        </Fade>
        <Fade top>
        <h1 className='text-4xl sm:text-6xl font-bold text-white'>
          Dianna Ganova
        </h1>
        </Fade>
        <Fade bottom>
        <h2 className='text-4xl sm:text-6xl font-bold text-white'>
          I'm a Full Stack Developer.
        </h2>
        </Fade>
        <p className='text-[#1d1e1e] py-4 max-w-[700px]'>

        </p>
        <Link to='work' smooth={true} duration={500}>
        <div>
    
          <Fade left>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
          </Fade>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
