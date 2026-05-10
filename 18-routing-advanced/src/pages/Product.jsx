import React from 'react'
import {Link, Outlet, useNavigate} from 'react-router-dom'
import Back from './Back'

const Product = () => {

  const navigate  = useNavigate()

  const goBack = () => {
    navigate(-1) // This will take you to the previous page
  }

  return (
    <div>
      {/* <button className='bg-red-400 font-medium px-4 py-2 rounded m-2 cursor-pointer active:scale-95' onClick={goBack}>
        Go Back
      </button> */}
      <Back />

        <div className='flex justify-center gap-10 py-4'>
          <Link to="/product/men" className='text-2xl text-gray-400' >Men</Link>
          <Link to="/product/women" className='text-2xl text-gray-400' >Women</Link>
          <Link to="/product/kids" className='text-2xl text-gray-400'>Kids</Link>
        </div>
        {/* <h2>This is Product page</h2> */}

       <Outlet /> {/* This is used to render the child component of the parent component */} 
      
    </div>
  )
}

export default Product
