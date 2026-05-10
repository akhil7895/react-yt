import React from 'react'
import { Link } from 'react-router-dom'
import Back from '../pages/Back'

const Navbar = () => {
  return (
    <div className='flex bg-red-600 py-4 px-8 justify-between '>
        <h3>codeWithAkhil.ai</h3>
        {/* <div className='flex gap-8'>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/product">Product</a>
        </div> */}

        <div className='flex gap-10'>
          <Link to='/' className='text-lg font-medium' >Home</Link>
          <Link to='/about' className='text-lg font-medium' >About</Link>
          <Link to='/product' className='text-lg font-medium' >Product</Link>
          <Link to='/courses' className='text-lg font-medium' >Courses</Link>

        </div>

        <Back />
      
    </div>
  )
}

export default Navbar
