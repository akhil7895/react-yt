import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <div >
      <div className='nav'>
        <h3 ><a href="https://github.com/akhil7895">codeWithAkhil.ai</a></h3>
        <div>
          {/* <a href="/">Home</a> */}
          <Link to='/' >Home</Link>
          {/* <a href="/about">About</a> */}
          <Link to='/about' >About</Link>
          {/* <a href="/contact">Contact</a> */}
          <Link to='/contact' >Contact</Link> 
        </div>
      </div>
    </div>
  )
}

export default navbar
