import React from 'react'
import MovieSlider from './MovieSlider'
import OrderPage from '../pages/OrderPage'
import requests from '../requests'
const MoviesOn = () => {
  return (
    <div>
      <MovieSlider requestURL={requests.requestPopular} />
      <OrderPage requestURL={requests.requestPopular} />
    </div>
  )
}

export default MoviesOn
