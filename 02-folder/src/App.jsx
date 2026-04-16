import React from 'react'
import './App.css'
import Card from "./components/Cards.jsx";
import Navbar from './Navbar.jsx';

const App = () => {
  return (
    <div>
      <Navbar />
      <Navbar />
      <Navbar />
      <Card />
      <Card /> 
      <Card />
      <Card />
    </div>
  )
}

export default App
