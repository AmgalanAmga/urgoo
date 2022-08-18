import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MovieContext from '../context/MovieContext'
const MovieSlider = () => {
  const { movies } = useContext(MovieContext)
  return (
    <div className="flex flex-col items-center justify-center mx-auto mb-10">
      <h1 className="py-3 text-2xl text-center text-black">
        Дэлгэцнээ гарч буй кинонууд
      </h1>
      <div className="flex items-center mb-20">
        {movies.map((item, id) => {
          return (
            <div
              key={id}
              className="relative inline-block p-2 cursor-pointer w-96 h-96"
            >
              <img
                className="block object-cover w-full h-full"
                src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                alt={item.title}
              />
              <div className="absolute top-0 left-0 w-full h-full text-white opacity-0 hover:bg-black/30 hover:opacity-100">
                <p className="flex items-center justify-center h-full text-lg font-bold tracking-wider text-center">
                  {item.title}
                </p>
              </div>
              <Link
                to={`/movie/${item.id}`}
                className="w-full text-xl font-semibold text-center text-white bg-sky-500"
              >
                Цагийн хуваарь ба захиалга
              </Link>
            </div>
          )
        })}
      </div>
      <div className="space-x-3">
        {movies.map((movie, i) => (
          <button key={i} className="w-3 h-3 bg-gray-400 rounded-full"></button>
        ))}
      </div>
    </div>
  )
}

export default MovieSlider
