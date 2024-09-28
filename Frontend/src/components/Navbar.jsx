import { useContext} from 'react'
import {NavLink} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import userContext from '../context/UserContext'

const Navbar = () => {
  const navigate = useNavigate()
  const {user} = useContext(userContext) 

  const logoutUser = async () => {
    try {
      const confirm =window.confirm('are you sure you want to logout ? ')
    if(!confirm) return;
      await axios.post(`/api/user/logout`)
      .then(()=> navigate('/'))
      .catch((error)=> console.error(error))
  } catch (error) {
      console.error('Error signing in', error);
  }
  };

  const linkClass = ({ isActive  }) =>
  isActive
    ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
    : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';

  return (
    <nav className='bg-indigo-500 border-b border-indigo-200'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='flex h-20 items-center justify-between'>
          <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
           <NavLink className='flex flex-shrink-0 items-center mr-4' to='/'> 
              <span className='hidden md:block text-white text-2xl font-bold ml-2'>
                JUPG
              </span>
           </NavLink> 
            <div className='md:ml-auto'>
              <div className='flex space-x-2'>
               <NavLink to={`/${user.username}`} className={linkClass}>
                  User
                </NavLink>
                <NavLink to='/rooms' className={linkClass}>
                  PGS
                </NavLink>
                <NavLink to='/add-room' className={linkClass}>
                  Add PGS
                </NavLink>
                <button  onClick={() => logoutUser()} className='text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'>
                  log out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
