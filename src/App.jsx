import { useState } from 'react'
import './App.css'
import { BrowserRouter as Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"


const App = () => {


  return (
    <div>
      <h1 className="text-3xl text-bold text-red">
        Hello World
      </h1>
      <Home />
    </div>
  )
}

export default App
