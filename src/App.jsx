import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import MoviesOn from './components/MoviesOn'
import ComingSoon from './pages/ComingSoon'
import OrderPage from './pages/OrderPage'
import Login from './pages/Login'
import Signup from './pages/Signup'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<MoviesOn />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
        <Route path="/movie/:id" element={<OrderPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App
