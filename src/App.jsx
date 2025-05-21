import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Detail from './Components/Detail/Detail'
import Projects from './Components/Projects/Projects'
import About from './Components/About/About'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/detail' element={<Detail />}/>
      </Routes>
    </>
  )
}
//<Route path='/detail/:id' element={<Detail />}/>
export default App
