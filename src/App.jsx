import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddCar from './assets/components/AddCar'
import SearchCar from './assets/components/SearchCar'
import DeleteCar from './assets/components/DeleteCar'
import ViewCar from './assets/components/ViewCar'
import Navbar from './assets/components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddCar/>}/>
          <Route path='/add' element={<AddCar/>}/>
          <Route path='/search' element={<SearchCar/>}/>
          <Route path='/delete' element={<DeleteCar/>}/>
          <Route path='/view' element={<ViewCar/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
