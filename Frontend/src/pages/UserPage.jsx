import { useState,useEffect } from 'react'
import { useParams,Link } from 'react-router-dom'
import Room from '../components/Room'
import axios from 'axios'
import Navbar from '../components/Navbar'

const UserPage = () => {
    const {username} = useParams()
    const [rooms,setRooms] = useState([]);

    useEffect(()=>{
      const fetchRooms =async()=>{
        try{
          await axios.get(`/api/user/${username}`)
          .then((res)=>{
            console.log(res.data)
           setRooms(res.data)
          })
         
        }catch(error){
            console.log('Error Fetching data',error)
        }
      }

      fetchRooms();
      
    },[]);

  return (
    <>
    <section>
      <Navbar />
    <div className='container m-auto py-10 px-6'>

        <div className=' bg-indigo-50 text-5xl text-indigo-500 p-6 mb-4'>
            welcome, {username}
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>

        <div className='bg-grey-200 p-6 rounded-lg mb-4 shadow-md'>
        <p className='text-xl text-black mb-4'>
           See All Available Pg here 
        </p>
        <Link
            to={'/rooms'}
            className=' inline-block bg-black hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center'
          >
            view All PGs
          </Link> 
        </div>

        <div className='bg-indigo-200 p-6 mb-4 rounded-lg shadow-md'>
        <p className='text-xl text-grey-200 mb-4'>
           Looking For Tenants 
        </p>
        <Link
            to={'/add-room'}
            className='inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-400'
          >
            Add Your Pg Here
          </Link> 
        </div>

        </div>
        <div className='bg-indigo-50 p-6 rounded-lg shadow-md mt-6'>
        <h3 className='text-xl font-bold mb-6'>Manage Your PG</h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {rooms.map((room) => (
                <Room key={room._id} room={room} isUser={true} />
              ))}
            </div>
        </div>

    </div>
    </section>

    </>
  )
}

export default UserPage
