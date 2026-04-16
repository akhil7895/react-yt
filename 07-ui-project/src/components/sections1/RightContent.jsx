import React from 'react'
import RightCard from './RightCard'

const  RightContent = (props) => {

  
  return (
    <div id='right' className='h-full p-4 rounded-4xl overflow-x-auto flex flex-nowrap gap-10 bg-blue-100 w-2/3'> 

    {/* {
      props.users.map((user,index) => {
        return(
          <RightCard key={index} users = {user} img = {user.img} />
        )
      }
      )

    } */}
    <RightCard users = {props.users} />




      
</div>
)
}

export default RightContent
