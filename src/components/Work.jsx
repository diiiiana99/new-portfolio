import React from 'react';
import {Fade} from 'react-reveal'


const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#000000]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <Fade top>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'>!Check out some of my recent work</p>
        </div>
        </Fade>

{/* Container */}

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* Grid Item */}
            <Fade left>
          <div
            style={{ backgroundImage: `url(${'https://i0.wp.com/glossense.com/wp-content/uploads/2020/09/Fenty-Beauty-Sephora-Canada-Shop-Fenty-Beauty-HoloDaze-2020-Holiday-Christmas-Collection-Canadian-New-Releases-Gift-Ideas-Glossense.jpg?resize=620%2C382&ssl=1'})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
               Fenty Beauty E-Commerce App
              </span>
              <div className='pt-8 text-center'>
                <a href='https://vimeo.com/704936414'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/diiiiana99/fenty-beauty-project-react'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          </Fade>
          <Fade top>
          <div
            style={{ backgroundImage: `url(${'https://thumbs.dreamstime.com/b/pink-bitcoin-gold-coin-isolated-color-background-bit-d-render-illustration-cryptocurrency-crypto-business-managment-risk-189145379.jpg'})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                SheTrades
              </span>
              <div className='pt-8 text-center'>
                <a href='https://mysterious-forest-31007.herokuapp.com/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/diiiiana99/SheTrades'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          </Fade>
            {/* Grid Item */}
            <Fade right>
          <div
            style={{ backgroundImage: `url(${'https://sc01.alicdn.com/kf/HTB1D8APk7CWBuNjy0Faq6xUlXXaf/220563943/HTB1D8APk7CWBuNjy0Faq6xUlXXaf.jpg'})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Pandora Bridal
              </span>
              <div className='pt-8 text-center'>
                <a href='https://desolate-caverns-29825.herokuapp.com/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/diiiiana99/Bridal-Shop'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          </Fade>
          <Fade left>
          <div
            style={{ backgroundImage: `url(${'https://i.ytimg.com/vi/J24mQQrggnQ/maxresdefault.jpg'})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Tesla Clone
              </span>
              <div className='pt-8 text-center'>
                <a href='https://aqueous-oasis-77613.herokuapp.com/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/diiiiana99/Tesla-Clone'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
        
          </div>
          </Fade>
            {/* Grid Item */}
            <Fade top>
          <div
            style={{ backgroundImage: `url(${'https://metro.co.uk/wp-content/uploads/2019/04/Menu-Shot-b993.jpg?quality=90&strip=all'})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Uber Eats Clone
              </span>
              <div className='pt-8 text-center'>
                <a href=''>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/diiiiana99/food-delivery-app'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>  
          </Fade>    
        </div>
      

      </div>
    </div>
  );
};

export default Work;
