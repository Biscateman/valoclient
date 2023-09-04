import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Newagent from './components/Newagent/Newagent'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/newagent' element={<Newagent />} ></Route>
      </Routes>
    </div>
  )
}

export default App