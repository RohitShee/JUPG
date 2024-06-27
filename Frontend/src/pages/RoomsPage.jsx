import React from 'react'
import RoomList from '../components/RoomList'
import Navbar from '../components/Navbar'

const RoomsPage = () => {
  return (
    <>
    <Navbar />
     <section className='bg-blue-50 px-4 py-6'> 
                 <RoomList />
        </section>
    </>
       
      
  )
}

export default RoomsPage
