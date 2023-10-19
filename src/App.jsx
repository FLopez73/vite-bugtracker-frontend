import { useState } from 'react'
import './App.css'
import { BrowserRouter as Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Header from './pages/Header'
import BugIndex from './pages/BugIndex'
import BugEdit from './pages/BugEdit'
import BugNew from './pages/BugNew'
import BugShow from './pages/BugShow'
import NotFound from './pages/NotFound'
import Footer from './pages/Footer'

const App = () => {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
