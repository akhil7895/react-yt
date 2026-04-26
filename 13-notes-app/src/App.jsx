import React, { useState } from 'react'
import "./index.css"
import {X} from 'lucide-react';

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault()
    // console.log("Form Submitted");
    const copyArr = [...task]
    copyArr.push({ title, desc })
    setTask(copyArr)
    // console.log(task);

    setTitle("");
    setDesc("");


  }

  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [task, setTask] = useState([])

  const deleteData = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx,1);
    setTask(copyTask)


  }




  return (
    <div className='h-full overflow-auto text-white bg-black lg:flex '>


      <form
        onSubmit={(e) => {
          submitHandler(e)
        }}

        className='flex items-start lg:w-1/2 flex-col gap-4 p-10  '>
        <h1 className='text-3xl  font-bold'>Add Notes</h1>


        <input
          className='px-5 w-full py-2 border-2 outline-none rounded'
          type="text"
          value={title}
          placeholder='Enter Notes Heading'
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        <textarea type="text"
          placeholder='Enter Details'
          className='px-5 w-full py-2  h-32 outline-none border-2 rounded'
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value)
          }}
        />

        <button
          onClick={() => {
            displayDetails()
          }}
          className='px-5 py-2 w-full outline-none active:bg-blue-300  bg-blue-500 text-white rounded-full'
        >Add Notes</button>


      </form>
      <div className='p-10 lg:w-1/2 lg:border-l-2 h-screen'>

        <h1 className='text-3xl  font-bold'>Your Notes</h1>
        <div className='flex gap-5 flex-wrap items-start justify-start mt-6  h-full overflow-auto'>

          {task.map(function (elem, idx) {
            return (
              <div key={idx} className=' flex items-start h-52 w-40 rounded-xl relative justify-between flex-col h-62 w-40 bg-cover  rounded-2xl bg-[url("https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png")] text-black p-3'>

      
                <div className='mt-10 ml-10 '>
                  <h3 className='font-bold mb-4 text-xl font-bold '>{elem.title}</h3>
                  <p className='leading-tight font-medium'>{elem.desc}</p>
                </div>
                <button onClick={() => {
                  deleteData(idx)
                }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>

              </div>
            )
          })}



        </div>

      </div>

    </div>
  )
}

export default App
