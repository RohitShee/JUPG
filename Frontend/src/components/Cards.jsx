import React from 'react'
import {Link} from 'react-router-dom'
import Card from './Card';
const Cards = () => {
  return (
    <section className='py-4'>
    <div className='container-xl lg:container m-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
        <Card>
          <h2 className='text-2xl font-bold'>For Students</h2>
          <p className='mt-2 mb-4'>
           Find your dream room and sail on a new adventure today
          </p>
          <Link
            to='/rooms'
            className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700'
          >
            Find Room
          </Link> 
          
        </Card>
        <Card bg='bg-indigo-100'>
          <h2 className='text-2xl font-bold'>For Owners</h2>
          <p className='mt-2 mb-4'>
            List Your Room for finding a good tenants
          </p>
          <Link
            to='/add-room'
            className='inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-400'
          >
           Add Room
          </Link> 
          
        </Card>
      </div>
    </div>
  </section>
  )
}

export default Cards
