import { useState } from "react"
import './App.css'


const App = () => {

  const [a, seta] = useState(20);

  function increment(){
    seta(a+1)
  }
  function decrement(){
    if(a>0){

      seta(a-1)
    }else{
      alert("Value can't be -ve")
    }
  }


  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <h1>{a}</h1>
      
    </div>
  )
}

export default App
