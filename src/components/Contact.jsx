import React,{useState} from 'react'
import Tilt from "react-tilt";
import validateForm from './validateForm';


const Contact = () => {
  const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPass, setConfirmPass] = useState('');
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		const resultError = validateForm({ name, email, password, confirmPass });

    const messageVariants = {
      hidden: { y: 30, opacity: 0 },
      animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
    };

    const buttonVariants = {
      hover: {
        scale: 1.05,
        color: '',
        boxShadow: '0px 0px 8px white',
        transition: {
          duration: 0.3,
          yoyo: Infinity,
        },
      },
    };

    const formData = [
      { label: 'Name', value: name, onChange: (e) => setName(e.target.value), type: 'text' },
      { label: 'Email', value: email, onChange: (e) => setEmail(e.target.value), type: 'email' },
      {
        label: 'Password',
        value: password,
        onChange: (e) => setPassword(e.target.value),
        type: 'password',
      },
      {
        label: 'Confirm Password',
        value: confirmPass,
        onChange: (e) => setConfirmPass(e.target.value),
        type: 'password',
      },
    ];
  

  

		if (resultError !== null) {
			setError(resultError);
			return;
		}
		setName('');
		setEmail('');
		setPassword('');
		setConfirmPass('');
		setError(null);
		setSuccess('Application was submitted!');
	};
  return (

    <div name='contact' className='w-full h-screen bg-[] flex justify-center items-center p-4'>
        <form onSubmit={handleSubmit} method='POST' action="https://getform.io/f/a48d369a-82e7-4819-9914-a03a79a899fe" className='flex flex-col max-w-[600px] w-full' >
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-white'>Contact</p>
                <p className='text-pink-500 font-bold py-4'>You can react out to me via diannaganova@yahoo.com or form down below</p>
            </div>
            <input className='bg-[#eaeaea] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#eaeaea]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#eaeaea] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-pink-500 border-2 hover:bg-pink-200 hover:border-pink-100 px-4 py-3 my-8 mx-auto flex items-center '>Let's Collaborate</button>
        </form>
    </div>

  )
}

export default Contact