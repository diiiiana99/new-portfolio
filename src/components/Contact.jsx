import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[pink] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/a48d369a-82e7-4819-9914-a03a79a899fe" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-white'>Contact</p>
                <p className='text-white py-4'>You can react out to me via diannaganova@yahoo.com or form down below</p>
            </div>
            <input className='bg-[#eaeaea] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#eaeaea]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#eaeaea] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-400 hover:border-pink-100 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact