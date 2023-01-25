import React from 'react';




const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[] text-white'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-3 flex flex-col justify-center w-full h-full'>
     
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4 text-pink-500 font-bold'>These are the tools that I utilize to create my work</p>
          </div>

              
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#ff6ed6] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src='https://cdn.worldvectorlogo.com/logos/html-1.svg' alt="" />
                  <p className='my-4 text-pink-500'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#ff6ed6] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src='https://www.pngkey.com/png/full/377-3771917_scss-logo.png' alt="" />                 
               <p className='my-4 text-pink-500'>CSS/SCSS</p>
              </div>
              <div className='shadow-md shadow-[#ff6ed6] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src='https://cdn.worldvectorlogo.com/logos/javascript-1.svg' alt="" />
                  <p className='my-4 text-pink-500'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#ff6ed6] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' alt="" />
                  <p className='my-4 text-pink-500'>REACT/REACT NATIVE</p>
              </div>
              <div className='shadow-md shadow-[#ff6ed6] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src='https://camo.githubusercontent.com/a86a8278da4c5b5a43330e1ea28e6ba050007a837128b5dff5b35d5ff0f1248a/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f313630302f312a365867664443566e3831415958363858766432492d674032782e706e67' alt="" />
                  <p className='my-4 text-pink-500'>Figma</p>
              </div>
              <div className='shadow-md shadow-[#ff6ed6] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYpGs6WHzwI-PDxpL9VRsDEb0YWcq8mSPnI9C2rpAPovNiDz04tyVkh5WzFq4IMpqhCN4&usqp=CAU' alt="" />
                  <p className='my-4 text-pink-500' >GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#ff6ed6] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src='https://www.logolynx.com/images/logolynx/b7/b7e4dd606f33fc1192c1371d0bec8b7b.png' alt="" />
                  <p className='my-4 text-pink-500'>NODE JS</p>
              </div>
              <div className='shadow-md shadow-[#ff6ed6] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src='https://www.edureka.co/blog/wp-content/uploads/2019/02/What-is-Ruby-on-Rails-1.png' alt="" />
                  <p className='my-4 text-pink-500'>RUBY-ON-RAILS</p>
              </div>
            

          </div>
      </div>
    </div>
  );
};

export default Skills;
