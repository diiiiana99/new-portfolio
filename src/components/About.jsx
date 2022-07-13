import React, {useEffect, useRef} from 'react';
import { init } from "ityped";


const About = () => {


  // const textRef = useRef();

  // useEffect(() => {
  //   init(textRef.current, {
  //     showCursor: true,
  //     backDelay: 1200,
  //     backSpeed:90,
  //     strings: [ "based in NYC🗽","originally from Kazakhstan🇰🇿"],
  //   });
  // }, []);

  return (
    <div name='about' className='w-full h-screen bg-[] text-white'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>

            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
            About
            </p>

          </div>
          <div></div>
          </div>
       
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-10 px-4'>

            <div className='sm:text-right text-4xl font-bold text-pink-500'>
              <p> Former Pro Tennis Player | </p>
              <p> Passionate Developer | </p>
              <p> Fitness Guru | </p>
            </div>
            
    
            <div>
              <p className='text-pink-500 font-bold'>Being a former pro athlete helped me a lot during my journey to become a developer. I was disciplined to be curious, constantly improve my performance, being detail oriented as well as taking ownership and responsibilities for my actions which helped me to shape the person and developer that I am today in my career.</p>  
            </div>
     
          </div>
        
      </div>
    </div>
  );
};

export default About;
