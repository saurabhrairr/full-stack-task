import React from 'react'
import Registerform from './component/Registerform'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import RegisterDetail from './component/RegisterDetail'

function App() {
  return (
    <BrowserRouter>
 <Routes>

  <Route path='/'   element={<Registerform/> }></Route>
  <Route path='/RegisterDetail'   element={<RegisterDetail/> }></Route>
 
 </Routes>

 
 </BrowserRouter>
  )
}

export default App
