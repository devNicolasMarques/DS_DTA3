import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Register } from './pages/Register'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Login/>}></Route> */}
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
