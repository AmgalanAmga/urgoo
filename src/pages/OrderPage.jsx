import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const OrderPage = ({ requestURL }) => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get(requestURL).then((response) => {
      setMovies(response.data.results)
    })
  }, [requestURL])
  console.log(movies)
  const { id } = useParams()
  const movie = movies.find((movie) => {
    return movie.backdrop_path === id
  })
  console.log(movie)
  return <div>sddf</div>
}

export default OrderPage
