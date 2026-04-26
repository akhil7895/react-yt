// import React, { useState } from 'react'

// const App = () => {
//   const [name, setName] = useState({name:"Akhil",age:22});
//   function changeName(){
//     const newName = {...name}
//     newName.name = "Alice Sharme";
//     console.log(newName);
    
//     setName(newName)
//   }
//   const [arr,setArr] = useState([1,2,3,4,5]);
//   function changeArr(){
//     const newArr = [...arr];
//     newArr.push(999);
//     setArr(newArr);
//   }
//   const [val,setVal] = useState("");



//   return (
//     <div>
//       <h1>
//         {name.name}
//       </h1>
//       <button onClick={changeName}>Change</button>
//       <hr />
//       <h1>{arr}</h1>
//       <input type="text" name="" value={val}  id="" />
//       <button onClick={changeArr}>ChangeArr</button>
      
//     </div>
//   )
// }

// export default App
import React, { useState } from 'react'

const App = () => {
  const [name, setName] = useState({ name: "Akhil", age: 22 });

  function changeName() {
    const newName = { ...name };
    newName.name = "Alice Sharme";
    setName(newName);
  }

  const [arr, setArr] = useState([1, 2, 3, 4, 5]);
  const [val, setVal] = useState("");

  function changeArr() {
    const newArr = [...arr];
    newArr.push(val);   // input value added
    setArr(newArr);
    setVal("");         // clear input after add
  }

  const [num,setNum] = useState(0);
  function batchUpdate(){
    setNum(num+1);
    setNum(num+1);
    setNum(num+1);

  }
  function batchUpdateCorrectly(){
    setNum(prev=>prev+1);
    setNum(prev=>prev+1);
    setNum(prev=>prev+1);
  }

    

  return (
    <div>
      <h1>{name.name}</h1>
      <button onClick={changeName}>Change</button>

      <hr />

      <h1>{arr.join(", ")}</h1>

      <input
        type="text"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        placeholder="Enter value"
      />

      <button onClick={changeArr}>Add to Array</button>
      <hr />
      <h1>Batch Update</h1>
      <h2>{num}</h2>
      <button onClick={batchUpdate}>Batch Update Not Working </button>
      <button onClick={batchUpdateCorrectly}>Batch Update Working </button>
    </div>
  );
};

export default App;