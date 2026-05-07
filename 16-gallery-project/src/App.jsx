import React, { useEffect, useState } from 'react'
import axios from 'axios'


const App = () => {

  const [data, setdata] = useState([])
  const [index, setindex] = useState(1)

  useEffect(function(){
fetchData()
  },[index])

  const handleNext = () => {
    setindex(index + 1)
    setdata([])
   
  }

  const handlePrev = () => {
    if(index > 1){
      setindex(index - 1)
      setdata([])
    }
  }

  
  const fetchData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=40`)      
    setdata(response.data)
    console.log(response.data);
    
  }
  let user = <h3 className='text-gray-400 absolute top-1/2 left-1/2 -translatex-1/2 -translatey-1/2 '>Loading....</h3>

  if(data.length > 0){
    user  = data.map(function(elem , idx) {
      return <a href={elem.url} target='_blank'>
        {/* <h1 className='fixed text-6xl'>{index}</h1> */}
        <div key={idx} className='w-fit'>

        <div className='h-40 w-44 bg-white overflow-hidden'>
        <img className='h-full w-full object-cover rounded' src={elem.download_url} alt="" />
      </div>
      <h2  className='font-bold text-lg'>{elem.author}</h2>
      </div>
      </a>
    })
  }

  return (
    <div className='bg-black overflow-auto h-screen text-white   text-4xl font-bold'>

      {/* <button 
      onClick={fetchData}
      className='bg-green-600 text-white active:scale-95 px-5 py-2 rounded'>Get Data</button> */}

      <div className='h-[80%] flex flex-wrap gap-4 '>
        {
          user
        }
      </div>
      <div className='fixed bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center items-center p-4'>

       <button

       style={{opacity : index == 1 ? 0.5 :1}}
       
       onClick={() => {
        handlePrev()

       }}
       className='bg-amber-400 text-black text-2xl m-4 cursor-pointer active:scale-95 rounded px-4 py-2 font-semibold '>prev</button> 
       <h4 className=' text-red-700 bg-amber-400 rounded'>Page{index }</h4>
        <button onClick={() => {
          handleNext()
 
        }} className='bg-amber-400 text-black text-2xl m-4 cursor-pointer active:scale-95 rounded px-4 py-2 font-semibold'>next</button>

 
      </div>
      
    </div>
  )
}

export default App
