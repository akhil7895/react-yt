import "./App.css"

function App(){

  function formHandler(e){
    e.preventDefault();
    console.log("Form Submitted Successfully");
  }



  return(
    <>
      <form onSubmit={(e) => {
        formHandler(e)
      }}>
        <input type="text"  />
        <button>Submit</button>

      </form>
      {/* <h1>Hello</h1> */}
    
    
    </>
  )
}

export default App;