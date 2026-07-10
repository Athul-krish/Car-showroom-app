import AddCar from './components/AddCar'
import SearchCar from './components/SearchCar'
import DeleteCar from './components/DeleteCar'
import ViewCar from './components/ViewCar'
import Navbar from './components/Navbar'
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
