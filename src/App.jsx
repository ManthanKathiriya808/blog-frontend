
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home/Home'
import Two from './pages/Home/Two'

function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path='/' element={<Home/>} />
          <Route  path='/two' element={<Two/>} />
        </Routes>
      </BrowserRouter>
   </>
  )
}
//fsbfgbdßfgb



export default App
