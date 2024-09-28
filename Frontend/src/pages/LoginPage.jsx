import React from 'react'
import { useState,useContext } from 'react'
import { Link ,useNavigate} from 'react-router-dom';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from 'react-toastify';
import userContext from '../context/UserContext';

const LoginPage = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {setUser} = useContext(userContext)
  const navigate = useNavigate();
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      await axios.post('api/user/login',{username,password})
      .then(()=>{
        setUser({username,password})
        return navigate(`/${username}`)
      }   
      )
      .catch((error)=> {
        if(error.response) toast.error(error.response.data.message)
          return ;
      })
  } catch (error) {
      console.error('Error signing in', error);
  }
  };

  return (
    <section className='bg-indigo-50 h-full'>
    <div className='container m-auto max-w-2xl py-48'>
      <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>

      <form onSubmit={submitForm}>
              <h2 className='text-3xl text-center font-semibold mb-6'>Log In</h2>
  
              <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                  username
                </label>
                <input
                  type='text'
                  id='username'
                  name='username'
                  className='border rounded w-full py-2 px-3 mb-2'
                  placeholder='enter your username'
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
                  placeholder='enter password'
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
                 log in
                </button>
                <ToastContainer/>
              </div>
              <div className='mt-4'>
                    <p>Don't have an account pls <Link
            to='/sign-up' className='text-indigo-500'
          >SignUp</Link> </p>
              </div>
            </form>

        </div>
    </div>
</section>
  )
}

export default LoginPage
