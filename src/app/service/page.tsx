import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const page = () => {
  return (
    <div>
      <Navbar />
      <h1 className='text-5xl font-extrabold text-center bg-green-300'>
        WE ARE PROVIDING DELIVERY ALL ACROSS PAKISTAN
      </h1>
      <h2 className='text-3xl font-bold text-center'>
        WE DELIVER TO YOUR DOORSTEP
      </h2>
      <p className='text-2xl'>
       
         Our delivery team is available
         24/7 to ensure that your order reaches you on time.
      </p>
      <p className='text-2xl text-center'>
        EMAIL US AT :123@.COM</p>
        <p className='text-2xl text-center'>
          CONTACT US AT:111-111-111
      </p>
      <Footer/>
    </div>
  )
}

export default page
