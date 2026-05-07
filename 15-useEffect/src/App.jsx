import React, { useEffect, useState } from 'react'

const App = () => {
  const [num, setnum] = useState(0)
  const [num2, setnum2] = useState(100)
  useEffect( () => {
    alert("useEffect is called.....")
    
  },[num])
  return (
    <div>
      <h1>{num}</h1>
      <h1>{num2}</h1>
      <button onClick={() => {
        setnum(num+1);
        console.log("Button is clicked .....");
      }} 
      >Change</button>
      <button
        onDoubleClick={() => {
          setnum2(num2+100)
        }}
      >DBL change</button>
      
    </div>
  )
}

export default App
