import React from 'react'

const RightCardContent = (props) => {
  return (
        <div className="h-full w-80 shrink-0 overflow-hidden relative bg-red-400 rounded-4xl">
        <img id='right' className="h-full  w-full  object-cover" src={props.img} alt="" />
 

        <div className="absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between">

            <h2 className="bg-white rounded-full h-12 w-12 justify-center flex items-center text-xl font-semibold">{props.index + 1}</h2>
            <div>
                <p className="text-xl text-white mb-16 leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit ducimus consectetur blanditiis enim tempora minima.</p>
                <div className="flex justify-between">
                    <button className="bg-blue-600 text-white font-medium px-8 py-3 rounded-full">{props.tag }</button>

                    <button className="bg-blue-600 text-white font-semibold px-5 py-3 text-lg rounded-full">
                        <i className="ri-arrow-right-line"></i>
                    </button>
                </div>
            </div>
        </div>
        
        </div>
  )
}

export default RightCardContent
