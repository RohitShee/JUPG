import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom'
import { useParams} from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { FaMapMarker } from 'react-icons/fa';
import axios from 'axios';

const RoomPage = () => {
   const {id} =useParams()
   const [room,setRoom] = useState([]);
     useEffect(()=>{
       const fetchRoom =async()=>{
         try{
           await axios.get(`/api/user/rooms/${id}`)
           .then((res)=>{
            setRoom(res.data)
           })
          
         }catch(error){
             console.log('Error Fetching data',error)
         }
       }
 
       fetchRoom(); 
     },[]);
  return (
    <>
    <section>
      <div className='container m-auto py-6 px-6'>
        <Link
          to='/rooms'
          className='text-indigo-500 hover:text-indigo-600 flex items-center'
        >
          <FaArrowLeft className='mr-2' /> Back to Room List
        </Link>
      </div>
    </section>

    <section className='bg-indigo-50'>
      <div className='container m-auto py-10 px-6'>
        <div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
          <main>
            <div className='bg-white p-6 rounded-lg shadow-md text-center md:text-left'>
            <h1 className='text-3xl font-bold mb-4'>{room.houseName}</h1>
              <div className='text-gray-500 mb-4'> Only For {room.type}</div>
              
              <div className='text-gray-500 mb-4 flex align-middle justify-center md:justify-start'>
                <FaMapMarker className='text-orange-700 mr-1' />
                <p className='text-orange-700'>{room.location}</p>
              </div>
              <p className='text-orange-700'> near {room.landmark}</p>
                <p className='text-grey-500'> At a walking distance of {room.walkingDistance}</p>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
              <h3 className='text-indigo-800 text-lg font-bold mb-6'>
                room Description and Facilities
              </h3>
              <p className='mb-4'>{room.description}</p>
              <h3 className='text-indigo-800 text-lg font-bold mb-2'>
               Rent
              </h3>

              <p className='mb-4'> {'\u20B9'} {room.rent}/ month</p>
            </div>
          </main>

          <aside>
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <h3 className='text-xl font-bold mb-6'>Owner Info</h3>
              <h3 className='text-xl'>Owner Name</h3>
              <h2 className='text-2xl'>{room.owner}</h2>

              <hr className='my-4' />

              <h3 className='text-xl'>contact Number</h3>

              <p className='my-2 bg-indigo-100 p-2 font-bold'>
              {room.contactNo}
              </p>
              <h3 className='text-xl'>extra contact Number</h3>

              <p className='my-2 bg-indigo-100 p-2 font-bold'>
                {room.extraContactNo}
              </p>
              <h3 className='text-xl'>Rules</h3>
              <p className='my-2'>{room.rules}</p>
            </div>
            
          </aside>
        </div>
      </div>
    </section>
  </>
  )
}

export default RoomPage




