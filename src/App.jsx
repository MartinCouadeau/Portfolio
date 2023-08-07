import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </>
  )
}
//<Route path='/detail/:id' element={<Detail />}/>
export default App
