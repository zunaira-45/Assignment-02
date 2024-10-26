import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-rose-600 h-12'>
    <div className='text-black-700 flex justify-between items-center'>
      <h1 className='text-3xl m-2 cursor-pointer hover:not-italic font-extrabold'>BURGER NEXT</h1> 

      <nav>
        <ul className='flex gap-3 mr-4'>
          <li>
            <Link className='hover:text-blue-100 font-serif text-2xl'href="/menu">Menu</Link>
          </li>
          <li>
            <Link className='hover:text-blue-100 font-serif text-2xl' href="/contact">Contact</Link>
          </li>
          <li>
            <Link className='hover:text-blue-100 font-serif text-2xl' href="/service">Service</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>


  
  )
}

export default Navbar
