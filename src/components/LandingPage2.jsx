import React from 'react'
import shetrades from './assets/shetrades.png';

const LandingPage2 = () => {
  return (
    <div name='home' className='w-full h-screen bg-black flex flex-col justify-between'>
    <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
            <h1 className='py-3 text-5xl md:text-7xl font-bold text-white'>SheTrades </h1>
            <p className='text-3xl text-white'>Built on React </p>
            <p className='text-3xl text-white'>Designed on Figma</p>
            <a className='py-3 px-6 sm:w-[60%] my-4' href='https://www.youtube.com/watch?v=3pkQJhyUnEA'><button className='py-3 px-6 sm:w-[60%] my-4'>Watch Demo</button></a>
        </div>
        <div>
            <img className='w-screen	 h-400' src={shetrades} alt="/" />
        </div>
        <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
        mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
        border border-slate-300 rounded-xl text-center shadow-xl'>
        </div>
    </div>              
</div>

  )
}

export default LandingPage2
