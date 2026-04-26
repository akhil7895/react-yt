import './index.css'

const App = () => {

  function btnClick(){
    console.log("Button Clicked")
  }

  function mouseEnter(){
    console.log("Mouse Entered...");
  }
  function mouseDown(){
    console.log("Mouse Exit...")
  }

  function inputChangeing(value){
    console.log("Typing....", value)
  }

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={btnClick}>Click Mee!!!</button>
      <button onDoubleClick={btnClick}>Double CLick Meee!!!</button>
      <button onMouseEnter={mouseEnter} onMouseDown={mouseDown}>Enter the mouse</button>
      <h1 onClick={btnClick}>This is heading </h1>

      <hr />

      <button
        onClick={() => {
          console.log("Embaded function inside btn")
        }}
      >
        Click me!!
      </button><br />
    
    <input 
      onChange={function(elem){
        inputChangeing(elem.target.value)
      }}
    
    type="text" />

<br />
      <div onMouseMove={(elem) => {
        console.log(elem.clientX , " ",elem.clientY)
      }} className='box'></div>
      <div onWheel={() => {
        alert("Mouse wheel is scrolling...")
      }}>
        <div className="page1"></div>
        <div className="page2"></div>
        <div className="page3"></div>
      </div>

    </div>

    
  )
}

export default App
