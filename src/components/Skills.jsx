import React from 'react';
import {Fade} from 'react-reveal'



const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#000000] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-3 flex flex-col justify-center w-full h-full'>
          <Fade top>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4'>These are the tools that I utilize to create my work</p>
          </div>
          </Fade>
          <Fade bottom>
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#ff6ed6] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src='https://cdn.worldvectorlogo.com/logos/html-1.svg' alt="" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#ff6ed6] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src='https://www.pngkey.com/png/full/377-3771917_scss-logo.png' alt="" />                 
               <p className='my-4'>CSS/SCSS</p>
              </div>
              <div className='shadow-md shadow-[#ff6ed6] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src='https://cdn.worldvectorlogo.com/logos/javascript-1.svg' alt="" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#ff6ed6] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' alt="" />
                  <p className='my-4'>REACT/REACT NATIVE</p>
              </div>
              <div className='shadow-md shadow-[#ff6ed6] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYpGs6WHzwI-PDxpL9VRsDEb0YWcq8mSPnI9C2rpAPovNiDz04tyVkh5WzFq4IMpqhCN4&usqp=CAU' alt="" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#ff6ed6] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src='https://www.logolynx.com/images/logolynx/b7/b7e4dd606f33fc1192c1371d0bec8b7b.png' alt="" />
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='shadow-md shadow-[#ff6ed6] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src='https://www.edureka.co/blog/wp-content/uploads/2019/02/What-is-Ruby-on-Rails-1.png' alt="" />
                  <p className='my-4'>RUBY-ON-RAILS</p>
              </div>
              <div className='shadow-md shadow-[#ff6ed6] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src='https://ezerus.com.au/wp-content/uploads/2019/05/aws-logo-aws-new-logo-album-on-imgur-ideas.png' alt="" />
                  <p className='my-4'>AWS</p>
              </div>
              <div className='shadow-md shadow-[#ff6ed6] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/768px-Stack_Overflow_icon.svg.png' alt="" />
                  <p className='my-4'>STACK OVERFLOW</p>
              </div>
              <div className='shadow-md shadow-[#ff6ed6] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png' alt="" />
                  <p className='my-4'>GOOGLE</p>
              </div>
          </div>
          </Fade>
      </div>
    </div>
  );
};

export default Skills;
