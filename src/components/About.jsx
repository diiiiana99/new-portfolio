import React, {useEffect, useRef} from 'react';
import { init } from "ityped";


const About = () => {


  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1200,
      backSpeed:90,
      strings: [ "based in NYC🗽","originally from Kazakhstan🇰🇿"],
    });
  }, []);

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
              <p>I am <span ref={textRef}></span></p>
            </div>
    
            <div>
              <p className='text-pink-500'>I am eager to create high-quality web applications and mobile applications that benefits everyone around me. I specialize in developing software for freelance clients and small business. I am hungry to learn more and be part of the community, team and business to collabarate, share ideas and excel my knowledge.</p>  
            </div>
     
          </div>
        
      </div>
    </div>
  );
};

export default About;
