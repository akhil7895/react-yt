import React from 'react'
import Card from './Components/Card'

const App = () => {
  return (
    <>
    <div className="parent">
      <Card name="Akhil Chaturvediiii" age={22} img ="https://images.unsplash.com/photo-1772528205616-e65dc0994c7b?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  />
      <Card name="Alice Sharma" age={44} img="https://images.unsplash.com/photo-1773497007741-b0348d3ad123?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

    </div>
    
    </>
  )
}

export default App

