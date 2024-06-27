import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from 'react-toastify';

const SignInPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const navigate = useNavigate();

    const submitForm = async (e) => {
      e.preventDefault();
      try {
        await axios.post('api/user/sign-up',{username,fullName,password})
        .then(()=>{
          return navigate('/')
        }   
        )
        .catch((error)=> toast.error(error.response.data.message))
    } catch (error) {
        console.error('Error signing in', error);
    }
    };


    return (
        <section className='bg-indigo-50 '>
        <div className='container m-auto max-w-2xl py-40'>
          <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
    
          <form onSubmit={submitForm}>
                  <h2 className='text-3xl text-center font-semibold mb-6'>Sign Up</h2>
      
                  <div className='mb-4'>
                  <label className='block text-gray-700 font-bold mb-2'>
                      username
                    </label>
                    <input
                      type='text'
                      id='username'
                      name='username'
                      className='border rounded w-full py-2 px-3 mb-2'
                      placeholder='eg. Beautiful Apartment In Miami'
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>

                  <div className='mb-4'>
                    <label className='block text-gray-700 font-bold mb-2'>
                     fullName
                    </label>
                    <input
                      type='text'
                      id='fullName'
                      name='fullName'
                      className='border rounded w-full py-2 px-3 mb-2'
                      placeholder='eg. Beautiful Apartment In Miami'
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>


                  <div className='mb-4'>
                    <label className='block text-gray-700 font-bold mb-2'>
                      password
                    </label>
                    <input
                      type='text'
                      id='password'
                      name='password'
                      className='border rounded w-full py-2 px-3 mb-2'
                      placeholder='eg. Beautiful Apartment In Miami'
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div>
                <button
                  className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
                  type='submit'
                >
                  Sign up
                </button>
                <ToastContainer />
              </div>
                  
                </form>
    
            </div>
        </div>
    </section>
      )
}

export default SignInPage









