import React from 'react'
import Cards from '../components/Cards'
import Hero from '../components/Hero'
import RoomList from '../components/RoomList'
import ViewAllRooms from '../components/ViewAllRooms'
import HomePageNav from '../components/HomePageNav'

const HomePage = () => {
  return (
    <div>
      <HomePageNav />
      <Hero />
      <Cards />
      <RoomList isHome={true} />
     <ViewAllRooms />
    </div>
  )
}

export default HomePage
