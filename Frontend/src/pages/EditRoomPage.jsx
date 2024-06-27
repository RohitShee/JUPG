import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';

const EditRoomPage = () => {

    const {id} =useParams()

    const [houseName, setHouseName] = useState('');
    const [type, setType] = useState('Boys');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [rent, setRent] = useState('');
    const [walkingDistance, setWalkingDistance] = useState('less than 5 min');
    const [landmark, setLandmark] = useState('');
    const [owner, setOwner] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [extraContactNo, setExtraContactNo] = useState('');
    const [rules, setRulse] = useState('');
    const navigate = useNavigate();
      useEffect(()=>{
        const fetchRoom =async()=>{
          try{
            await axios.get(`/api/user/rooms/${id}`)
            .then((res)=>{
            setHouseName(res.data.houseName)
            setType(res.data.type)
            setLocation(res.data.location)
            setDescription(res.data.description)
            setRent(res.data.rent)
            setWalkingDistance(res.data.walkingDistance)
            setLandmark(res.data.landmark)
            setOwner(res.data.owner)
            setContactNo(res.data.contactNo)
            setExtraContactNo(res.data.extraContactNo)
            setRulse(res.data.rules)
            })
           
          }catch(error){
              console.log('Error Fetching data',error)
          }
        }
  
        fetchRoom();
         
     },[]);


    

  
    const submitForm = async (e) => {
      e.preventDefault();
      try {
        await axios.patch(`api/user/edit-room/${id}`,{houseName,type,location,description,rent,walkingDistance,landmark,owner,contactNo,extraContactNo,rules})
        .then(()=>{
          return navigate('/user')
        }   
        )
        .catch((error)=> console.error(error))
    } catch (error) {
        console.error('Error signing in', error);
    }
    };

  
    return (
      <>
      <section className='bg-indigo-50'>
        <div className='container m-auto max-w-2xl py-24'>
          <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
            <form onSubmit={submitForm}>
              <h2 className='text-3xl text-center font-semibold mb-6'>Edit Room</h2>
  
              <div className='mb-4'>
                <label className='block text-gray-700 font-bold mb-2'>
                  House Name
                </label>
                <input
                  type='text'
                  id='houseName'
                  name='houseName'
                  className='border rounded w-full py-2 px-3 mb-2'
                  placeholder='add name of your house '
                  required
                  value={houseName}
                  onChange={(e) => setHouseName(e.target.value)}
                />
              </div>

              <div className='mb-4'>
                <label
                  htmlFor='type'
                  className='block text-gray-700 font-bold mb-2'
                >
                  Available For
                </label>
                <select
                  id='type'
                  name='type'
                  className='border rounded w-full py-2 px-3'
                  required
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value='Boys'>Boys</option>
                  <option value='Girls'>Girls</option>
                  <option value='Boys/Girls'>Boys/Girls</option>
                </select>
              </div>
              
              <div className='mb-4'>
                <label
                  htmlFor='description'
                  className='block text-gray-700 font-bold mb-2'
                >
                  Description
                </label>
                <textarea
                  id='description'
                  name='description'
                  className='border rounded w-full py-2 px-3'
                  rows='4'
                  placeholder='add facilities and room description'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
  
              <div className='mb-4'>
                <label
                  className='block text-gray-700 font-bold mb-2'
                >
                  Rent(in Rupees /month)
                </label>
                <input
                  id='rent'
                  name='rent'
                  className='border rounded w-full py-2 px-3'
                  required
                  value={rent}
                  onChange={(e) => setRent(e.target.value)}
                />
              </div>

              <div className='mb-4'>
                <label
                  htmlFor='walkingDistance'
                  className='block text-gray-700 font-bold mb-2'
                >
                  walking Distance
                </label>
                <select
                  id='walkingDistance'
                  name='walkingDistance'
                  className='border rounded w-full py-2 px-3'
                  required
                  value={walkingDistance}
                  onChange={(e) => setWalkingDistance(e.target.value)}
                >
                  <option value='less than 5 min'>less than 5 min</option>
                  <option value='5-15 min'>5-15 min</option>
                  <option value='15-30'>15-30 min</option>
                  <option value='30+ min'>30+ min</option>
                </select>
              </div>

  
              <div className='mb-4'>
                <label className='block text-gray-700 font-bold mb-2'>
                  Location
                </label>
                <input
                  type='text'
                  id='location'
                  name='location'
                  className='border rounded w-full py-2 px-3 mb-2'
                  placeholder='Room Location'
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700 font-bold mb-2'>
                 LandMark
                </label>
                <input
                  type='text'
                  id='landmark'
                  name='landmark'
                  className='border rounded w-full py-2 px-3 mb-2'
                  placeholder='landmark near house'
                  required
                  value={landmark}
                  onChange={(e) => setLandmark(e.target.value)}
                />
              </div>
  
              <h3 className='text-2xl mb-5'>Owner Info</h3>
  
              <div className='mb-4'>
                <label
                  htmlFor='owner'
                  className='block text-gray-700 font-bold mb-2'
                >
                  owner Name
                </label>
                <input
                  type='text'
                  id='owner'
                  name='owner'
                  className='border rounded w-full py-2 px-3'
                  placeholder='owner Name'
                  required
                  value={owner}
                  onChange={(e) => setOwner(e.target.value)}
                />
              </div>
  
              <div className='mb-4'>
                <label
                  htmlFor='company_description'
                  className='block text-gray-700 font-bold mb-2'
                >
                  Rules regulation to maintain 
                </label>
                <textarea
                  id='rules'
                  name='rules'
                  className='border rounded w-full py-2 px-3'
                  rows='4'
                  placeholder='Rules of your house'
                  value={rules}
                  onChange={(e) => setRulse(e.target.value)}
                ></textarea>
              </div>
  
              <div className='mb-4'>
                <label
                  htmlFor='contactNo'
                  className='block text-gray-700 font-bold mb-2'
                >
                  Contact Number
                </label>
                <input
                  type='text'
                  id='contactNo'
                  name='contactNo'
                  className='border rounded w-full py-2 px-3'
                  placeholder="owner's contact Number"
                  required
                  value={contactNo}
                  onChange={(e) => setContactNo(e.target.value)}
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='extraContactNo'
                  className='block text-gray-700 font-bold mb-2'
                >
                  extra Contact Number
                </label>
                <input
                  type='tel'
                  id='extraContactNo'
                  name='extraContactNo'
                  className='border rounded w-full py-2 px-3'
                  placeholder='Optional phone of owner'
                  value={extraContactNo}
                  onChange={(e) => setExtraContactNo(e.target.value)}
                />
              </div>
  
              <div>
                <button
                  className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
                  type='submit'
                >
                  Add Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      </>
    );
}

export default EditRoomPage
