import React from 'react';
import {Fade} from 'react-reveal'
import Tilt from "react-tilt";



const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-pink-500 bg-img-[../assets/bg1.png]'>
      <div className='max-w-[1000px] mx-auto p-12 flex flex-col justify-center w-full h-full mt-60px'>
        <Fade top>
        <div className=''>
          <p className='text-4xl  font-bold inline border-b-4 text-white border-pink-600'>
            Work
          </p>
          <p className='py-6 font-bold'>Check out some of my recent work</p>
        </div>
        </Fade>

{/* Container */}

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* Grid Item */}
            <Fade left>
              <Tilt>
          <div
            style={{ backgroundImage: `url(${'https://i.ibb.co/fGCt3wX/desk-shetrades.png'})`}}
            className='shadow-lg shadow-[#f774c5] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-1xl font-bold text-pink tracking-wider' >
               SheCodes Coding App
              </span>
              <div className='pt-8 text-center'>
                <a href='https://youtu.be/wmqvXji233s'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 hover:bg-pink-400 hover:border-pink-100 text-white  font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/diiiiana99/SheCodes'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 hover:bg-pink-400 hover:border-pink-100 text-white  font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          </Tilt>
          </Fade>
            <Fade left>
            <Tilt>
          <div
            style={{ backgroundImage: `url(${'https://i.ibb.co/0YfQy6V/desk-fenty.png'})` }}
            className='shadow-lg shadow-[#f774c5] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-1xl font-bold text-pink tracking-wider'>
               Fenty Beauty E-Commerce 
              </span>
              <div className='pt-8 text-center'>
                <a href='https://vimeo.com/707940460'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 hover:bg-pink-400 hover:border-pink-100 text-white  font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/diiiiana99/fenty-beauty-project-react'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 hover:bg-pink-400 hover:border-white text-white  font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          </Tilt>
          </Fade>
          <Fade top>
          <Tilt>
          <div
            style={{ backgroundImage: `url(${'https://i.ibb.co/ZXKBSZD/des-shetades.png'})` }}
            className='shadow-lg shadow-[#f774c5] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-1xl font-bold text-pink tracking-wider'>
                SheTrades Crypto App
              </span>
              <div className='pt-8 text-center'>
                <a href='https://shielded-wave-83109.herokuapp.com/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2  hover:bg-pink-400 hover:border-pink-100 text-white  font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/diiiiana99/SheTrades'>
                  <button className='text-center rounded-lg px-4 py-3 m-2  hover:bg-pink-400 hover:border-pink-100 text-white  font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          </Tilt>
          </Fade>
            {/* Grid Item */}
            <Fade right>
            <Tilt>
          <div
            style={{ backgroundImage: `url(${'https://i.ibb.co/nn1m3cc/des-mercedes.png'})` }}
            className='shadow-lg shadow-[#f774c5] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-1xl font-bold text-pink tracking-wider'>
              Mercedes House Real Estate App
              </span>
              <div className='pt-8 text-center'>
                <a href='https://vimeo.com/707942729'>
                  <button className='text-center rounded-lg px-4 py-3 m-2  hover:bg-pink-400 hover:border-pink-100 text-white  font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href=''>
                  <button className='text-center rounded-lg px-4 py-3 m-2  hover:bg-pink-400 hover:border-pink-100 text-white  font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          </Tilt>
          </Fade>
          <Fade left>
          <Tilt>
          <div
            style={{ backgroundImage: `url(${'https://i.ibb.co/R2mrhY2/des-tesla.png'})` }}
            className='shadow-lg shadow-[#f774c5] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-1xl font-bold text-pink tracking-wider'>
                Tesla Clone React App
              </span>
              <div className='pt-8 text-center'>
                <a href='https://aqueous-oasis-77613.herokuapp.com/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2  hover:bg-pink-400 hover:border-pink-100 text-white  font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/diiiiana99/Tesla-Clone'>
                  <button className='text-center rounded-lg px-4 py-3 m-2  hover:bg-pink-400 hover:border-pink-100 text-white font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
        
          </div>
          </Tilt>
          </Fade>
 
            {/* Grid Item */}
           
        </div>
      

      </div>
    </div>
  );
};

export default Work;
