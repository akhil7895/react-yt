import React, { useEffect, useState } from 'react'

const App2 = () => {
    const [a, seta] = useState(0)
    const [b, setb] = useState(100)

    const changeA = () => {
        console.log("A is changing")
    }
    const changeB = () => {
        console.log("B is changing")
    }

    useEffect(() => {
        changeA()
    },[a])
  return (
    <div>
        <h1>{a}</h1>
        <h1>{b}</h1>
        <button onClick={() => seta(a+1)}>Change A</button>
        <button onClick={() => setb(b-1)}>Change B</button>
    
      
    </div>
    // <h1>hello</h1>
  )
}

export default App2
