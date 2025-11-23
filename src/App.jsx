import React from 'react'
import NavBar from './components/NavBar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Students from './pages/Students'
import Contact from './pages/Contact'
import PageNotFound from './pages/PageNotFound'
import StudentDetails from './pages/StudentDetails'


const App = () => {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/student' element={<Students/>}/>
      <Route path='/student/:sid' element={<StudentDetails/>}/>

      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    
    </>
  )
}

export default App