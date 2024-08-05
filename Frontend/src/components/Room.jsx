import React from 'react'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import { FaMapMarker } from 'react-icons/fa';
import axios from 'axios';

const Room = ({room,isUser =false}) => {

  const onDeleteClick = async (id) => {
    try {
      const confirm =window.confirm('are you sure you want to delete this Room ? ')
    if(!confirm) return;
      await axios.delete(`/api/user/delete/${id}`)
      .then(()=>window.location.reload())
      .catch((error)=> console.error(error))
  } catch (error) {
      console.error('Error signing in', error);
  }
  };
    const [showFullDescription,setShowFullDescription]= useState(false);

    let description=room.description;
  
    if(!showFullDescription){
      description =description.substring(0,90) +'...';
    }
    return (
      <div className='bg-white rounded-xl shadow-md relative'>
      <div className='p-4'>
        <div className='mb-6'>
        <h3 className='text-xl font-bold'>{room.houseName}</h3>
        <div className='text-gray-600 my-2'>only For {room.type}</div> 
        </div>
  
        <div className='mb-5'>{description}</div>
  
       <button
          onClick={() => setShowFullDescription((prevState) => !prevState)}
          className='text-indigo-500 mb-5 hover:text-indigo-600'
        >
          {showFullDescription ? 'Less' : 'More'}
        </button>
    
        <h3 className='text-indigo-500 mb-2'> {'\u20B9'} {room.rent} / month</h3>
  
        <div className='border border-gray-100 mb-5'></div>
  
        <div className='flex flex-col lg:flex-row justify-between mb-4'>
          <div className='text-orange-700 mb-3'>
          <FaMapMarker className='inline text-lg mb-1 mr-1' /> 
            {room.location}
          </div>
          <Link
            to={`/rooms/${room._id}`}
            className='h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm'
          >
            Read More
          </Link> 
          
        </div>
        {isUser ?  <div>
              <Link
                to={`/edit-room/${room._id}`}
                className='bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block'
              >
                Edit PG
              </Link>
              <button
                onClick={() => onDeleteClick(room._id)}
                className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block'
              >
                Delete PG
              </button>
            </div> : <> </> }
      </div>
    </div>
    )
}

export default Room




