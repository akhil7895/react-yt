import React from 'react'
import Section1 from './components/sections1/sections1'
import Section2 from './components/sections2/sections2'

const App = () => {

  const users = [
    {
      img:'https://plus.unsplash.com/premium_photo-1675713554219-222b21eb19f3?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'Satisfiedddd'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1706561439968-06634cfc8c99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'Under Served'
    },
    {
      img:'https://images.unsplash.com/photo-1553605455-51e389af5d1e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'UnderBanked'
    },
    {
      img:"https://images.unsplash.com/photo-1543269664-56d93c1b41a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:'',
      tag:'Unemployed'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1663040518652-9bc24a06df88?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'Under Served'
    }
  ]
  // console.log(users);

  return (
    <div className=''>


 
      <Section1 users = {users} />
      <Section2 />

      
    </div>
  )
}

export default App
