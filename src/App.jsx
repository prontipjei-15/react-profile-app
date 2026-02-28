import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'  
import About from './views/About'
import Capabilities from './views/Capabilities'
import Experience from './views/Experience'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} /> 
        <Route path='/about' element={<About />} />
        <Route path='/capabilities' element={<Capabilities />} />
        <Route path='/experience' element={<Experience />} />
      </Routes>
    </BrowserRouter>
  )
}