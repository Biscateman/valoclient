import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Newagent from './components/Newagent/Newagent'
import Agents from './components/Agents/Agents'
import Home from './components/Home/Home'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} ></Route>
        <Route exact path='/newagent' element={<Newagent />} ></Route>
        <Route exact path='/agents/Duelist' element={<Agents role={'Duelist'} />} ></Route>
        <Route exact path='/agents/Initiator' element={<Agents role={'Initiator'} />} ></Route>
        <Route exact path='/agents/Controller' element={<Agents role={'Controller'} />} ></Route>
        <Route exact path='/agents/Sentinel' element={<Agents role={'Sentinel'} />} ></Route>
      </Routes>
    </div>
  )
}

export default App