import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ComingSoon from './pages/ComingSoon'
import OrderPage from './pages/OrderPage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import MovieSlider from './components/MovieSlider'
import SeatsOrder from './pages/SeatsOrder'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieSlider />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
        <Route path="/movie/:id" element={<OrderPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/seats" element={<SeatsOrder />} />
      </Routes>
    </div>
  )
}

export default App