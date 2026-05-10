import React from 'react'
import { useNavigate } from 'react-router-dom'

const Back = () => {
    const navigate = useNavigate()
  return (
    <div>
        <button 
        onClick={() =>{
            navigate(-1)
        } }
        className='bg-red-400 font-medium px-4 py-2 rounded m-2 cursor-pointer active:scale-95' >
    
        Go Back
        </button>
      
    </div>
  )
}

export default Back
