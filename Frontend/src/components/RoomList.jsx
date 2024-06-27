import { useState,useEffect } from 'react';
import Spinner from './Spinner';
import Room from './Room';
import axios from 'axios';

const RoomList = ({isHome =false}) => {
    const [rooms,setRooms] = useState([]);
  const [loading,setLoading] = useState(true);

    useEffect(()=>{
      const fetchRooms =async()=>{
        const apiUrl =isHome ? '/api/user/someRooms' : '/api/user/rooms';
        try{
          await axios.get(apiUrl)
          .then((res)=>{
           setRooms(res.data)
          })
         
        }catch(error){
            console.log('Error Fetching data',error)
        }finally{
          setLoading(false);
        }
      }

      fetchRooms();
      
    },[]);

    return (
      <section className='bg-blue-50 px-4 py-10'>
        <div className='container-xl lg:container m-auto'>
          <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
            {!isHome ? 'Available PGs' : 'view PGs'}
          </h2>
  
         
         {loading ? (
            <Spinner loading={loading} />
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {rooms.map((room) => (
                <Room key={room._id} room={room} />
              ))}
            </div>
          )} 
        </div>
      </section>
    )
}

export default RoomList






