import { useState } from "react";
import "./App.css";

function App() {

  const [data, setData] = useState('');

  const formHandler = (e) => {
    e.preventDefault();
    console.log('Form Submitted by :- ', data);
    setData("");
    
  }

  return (
    <>
      <div>
        <h1>Two Way data Binding </h1>
        <form onSubmit={(e) => {
          formHandler(e);
        }} >

          <input type="text" value={data} onChange={(e) => {
            setData(e.target.value)

          }} />
          <br />
          <button>Submit</button>

        </form>
      </div>


    </>
  )
}

export default App;