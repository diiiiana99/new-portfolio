import React from 'react';
import {Fade} from 'react-reveal'
import Tilt from "react-tilt";



const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-pink-500 bg-[]'>
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
            style={{ backgroundImage: `url(${'https://img.freepik.com/free-photo/software-developer-concept-grow-coding-development-icon-pink-background-language-programming-engineering-minimal-cartoon-sytle-3d-render-illustration_598821-680.jpg?w=2000'})` }}
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
            style={{ backgroundImage: `url(${'https://i0.wp.com/glossense.com/wp-content/uploads/2020/09/Fenty-Beauty-Sephora-Canada-Shop-Fenty-Beauty-HoloDaze-2020-Holiday-Christmas-Collection-Canadian-New-Releases-Gift-Ideas-Glossense.jpg?resize=620%2C382&ssl=1'})` }}
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
            style={{ backgroundImage: `url(${'https://thumbs.dreamstime.com/b/pink-bitcoin-gold-coin-isolated-color-background-bit-d-render-illustration-cryptocurrency-crypto-business-managment-risk-189145379.jpg'})` }}
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
            style={{ backgroundImage: `url(${'https://images.ctfassets.net/giye6gngze72/6UBn9ABS6IG8wuQkWGISgQ/ec6d614ba56d46545255be9d3b2208d4/MercedesHouse_ResidencesPhoto.jpg'})` }}
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
            style={{ backgroundImage: `url(${'https://i.ytimg.com/vi/J24mQQrggnQ/maxresdefault.jpg'})` }}
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
          <Fade right>
          <Tilt>
          <div
            style={{ backgroundImage: `url(${'https://sc01.alicdn.com/kf/HTB1D8APk7CWBuNjy0Faq6xUlXXaf/220563943/HTB1D8APk7CWBuNjy0Faq6xUlXXaf.jpg'})` }}
            className='shadow-lg shadow-[#f774c5] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-1xl font-bold text-pink tracking-wider'>
                Pandora Bridal Shop App
              </span>
              <div className='pt-8 text-center'>
                <a href='https://desolate-caverns-29825.herokuapp.com/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2  hover:bg-pink-400 hover:border-pink-100 text-white font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/diiiiana99/Bridal-Shop'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 hover:bg-pink-400 hover:border-pink-100 text-white font-bold text-lg'>
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
