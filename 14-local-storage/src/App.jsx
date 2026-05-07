import React from 'react'
import axios from'axios'

const App = () => {
  // localStorage.clear()
  // localStorage.setItem('name',"Akhil Chaturvedi")
  // localStorage.setItem('age',22)
  // localStorage.setItem('city','Delhi')
  // localStorage.setItem('hobbies',JSON.stringify(['coding','gaming','music']))

  // const user = localStorage.getItem('name')
  // const age = localStorage.getItem('age')
  // const city = localStorage.getItem('city')
  // const hobbies = JSON.parse(localStorage.getItem('hobbies'))
  
  // console.log(user,age,city,hobbies)
  // localStorage.removeItem('age')

  // const user = {
  //   name:"Akhil Chaturvedi",
  //   age:22,
  //   city:"Auraiya",
  //   hobbies:['coding','gaming','music']
  // }
  // localStorage.clear()
  // // localStorage.setItem('user',user)

  // localStorage.setItem('user',JSON.stringify(user))

  // const userData = JSON.parse(localStorage.getItem('user'))
  // // console.log(typeof(userData));
  // console.log(userData);

  async function demoAPI(){
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(res)
  }

  // const getData = async () => {
  //   const resp = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   // console.log(resp)
  //   const data  = await resp.json()
  //   console.log(data)
  // }

  const getData = async () => {
    const {data} = await axios('https://jsonplaceholder.typicode.com/todos/1')
    console.log(data)
  }
  
  

  return (
    <div>
      
      Hello
      <button className='mt-10' onClick={demoAPI}>DEMO API</button>
      <button className='mt-10' onClick={getData}>GET DATA</button>
    </div>
  )
}

export default App
