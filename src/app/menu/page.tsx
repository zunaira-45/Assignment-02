import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const page = () => {
  return (
<div>
  <Navbar />
      <h1 className='text-4xl font-extrabold font-serif text-center bg-yellow-500 p-4'>WELCOME TO MENU PAGE</h1>
      <h2 className='tex-7xl font-extrabold font-serif text-center bg-pink-400 p-4'>YUMMY TASTY UNIQUE</h2>  
      <div className='bg-[url("/images/burger.jpg")] h-[200px] bg-no-repeat bg-right-bottom border-3 p-3'>
      <div className='bg-[url("/images/bur.jpg")] h-[200px] bg-no-repeat bg-left-bottom border-3 p-3'>
    <p className='text-3xl font-bold font-serif text-center py-2 px-3'>Classical Chicken Cheese Burger</p>
    <p className='text-2xl text-center'>Chicken Burger</p>
      <p className='text-2xl text-center'>Chicken Special Cheese Burger</p>
      <p className='text-2xl text-center'>Dynamite Chicken Burger</p>
      <div className='bg-[url("/images/burger.jpg")] h-[400px] bg-no-repeat bg-left-bottom border-3 p-3'>
      <div className='bg-[url("/images/bur.jpg")] h-[200px] bg-no-repeat bg-right-bottom border-3 p-3'>
    
      
      <div>
        <h3 className='text-3xl font-bold font-serif text-center'>BEEF SECTION BURGER</h3>
        <p className='text-2xl text-center'>Classical Beef Cheese Burger</p>
      <p className='text-2xl text-center' >Beef Burger</p>
      <p className='text-2xl text-center'>Beef Special Cheese Burger</p>
      <p className='text-2xl text-center'>Dynamite Beef Burger</p>
      </div>


        <div>
        <h1 className='text-3xl font-bold font-serif text-center'>
          FRIES SECTION
        </h1>
        <p className='text-2xl text-center'> Chicken cheese Fries</p>
        <p className='text-2xl text-center'>Pizza Fries</p>
        <p className='text-2xl text-center'>Masala Fries</p>
        <p className='text-2xl text-center'>Matka Fries</p>
        <p className='text-2xl text-center'>Simple Fries</p>
        </div>


      <div>
        <h1 className='text-3xl font-bold font-serif text-center'>Refreshments</h1>
      </div>
      <p className='text-2xl text-center'>
        Fanta
      </p>
      <p className='text-2xl text-center'>
        Next Cola
      </p>
      <p className='text-2xl text-center'>
        Juices
      </p>
      <Footer/>
      </div>
      </div>
      </div>
      </div>
      </div>
      )
}


export default page
