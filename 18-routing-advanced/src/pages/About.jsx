import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  
  const navigate = useNavigate()

  const btnClicked = () => {
    navigate('/')
  }

  const prod = () => {
    navigate('/product')
  }

  return (
    <div>
      <button onClick={btnClicked} className='bg-red-400 font-medium px-4 py-2 rounded m-2 cursor-pointer active:scale-95' onClick={btnClicked}>
        Return to home page
      </button>
      <button onClick={prod} className='bg-red-400 font-medium px-4 py-2 rounded m-2 cursor-pointer active:scale-95' onClick={prod}>
        Go to Product page
      </button>
      <h1>About Page</h1>
    </div>
  )
}

export default About
