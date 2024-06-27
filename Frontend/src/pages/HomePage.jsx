import React from 'react'
import Navbar from '../components/Navbar'
import Cards from '../components/Cards'
import Hero from '../components/Hero'
import RoomList from '../components/RoomList'
import ViewAllRooms from '../components/ViewAllRooms'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards />
      <RoomList isHome={true} />
     <ViewAllRooms />
    </div>
  )
}

export default HomePage
