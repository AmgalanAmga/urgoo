import React, { useContext, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import MovieContext from '../context/MovieContext'
import UserContext from '../context/UserProvider'
const OrderPage = () => {
  const { movies, setMoviesDetails, setTime, time } = useContext(MovieContext)
  const {
    adultAmount,
    setAdultAmount,
    childrenAmount,
    setChildrenAmount,
  } = useContext(UserContext)
  const { id } = useParams()
  const timeArray = ['12:00', '14:20', '16:20', '19:10', '21:40']
  const foundMovie = movies.find((movie) => {
    return movie.id === parseInt(id)
  })
  const history = useNavigate()
  const toSeatsPage = (e) => {
    e.preventDefault()
    if (!adultAmount && !childrenAmount)
      return alert('Хүний тоогоо сонгоно уу?')
    if (!time) return alert('Цагаа сонгоно уу?')
    return [setMoviesDetails(foundMovie), history('/seats')]
  }
  const getTime = (e) => {
    const { id } = e.target
    const timeButton = document.querySelectorAll('button')
    timeButton.forEach((button) => {
      if (button.getAttribute('id') === id)
        return (button.style.backgroundColor = 'gray')
      return (button.style.backgroundColor = '#38BDF8')
    })

    setTime(id)
  }
  return (
    <div className="max-w-screen-xl mx-auto ">
      <div className="w-full h-[550px] relative mb-48">
        <div className="absolute top-0 left-0 -z-10">
          <div className="">
            <img
              src={`https://image.tmdb.org/t/p/original/${foundMovie.backdrop_path}`}
              alt=""
            />
          </div>
        </div>
        <div className="flex items-center justify-around w-full h-full">
          <div>
            <img
              className="w-72"
              src={`https://image.tmdb.org/t/p/original/${foundMovie.poster_path}`}
              alt=""
            />
          </div>
          <div>
            <span className="p-4 text-4xl text-white rounded-full bg-gray-500/40">
              {foundMovie.title}
            </span>
            <div className="w-[500px] mt-5">
              <h2 className="text-3xl text-white">Overview</h2>
              <p className="h-48 text-2xl font-semibold text-justify text-white">
                {foundMovie.overview}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <h1 className="text-4xl text-center">Цагийн хуваарь</h1>
        <div className="flex flex-col items-center justify-center">
          <div className="flex mt-10 space-x-6">
            {timeArray.map((time) => (
              <button
                id={time}
                onClick={(e) => getTime(e)}
                className="p-4 text-xl text-white rounded-lg bg-[#38BDF8] hover:bg-sky-500/70"
              >
                {time}
              </button>
            ))}
          </div>
          <div className="mt-5 text-2xl font-semibold">
            <h1>Тасалбарын үнэ</h1>
            <h1>Том хүн 10000₮</h1>
            <h1>Том хүн 5000₮</h1>
          </div>
          <form className="mt-4 w-80">
            <h1 className="mb-5 text-2xl">Суудлын тоогоо сонгоно уу?</h1>
            <div className="flex justify-between my-2">
              <label
                htmlFor=""
                className="p-2 mr-5 text-xl bg-gray-300 rounded-md whitespace-nowrap"
              >
                Том хүн
              </label>
              <input
                type="number"
                className="p-2 border-2"
                value={adultAmount}
                min={'0'}
                onChange={(e) => setAdultAmount(e.target.value)}
              />
            </div>
            <div className="flex justify-between ">
              <label
                htmlFor=""
                className="p-2 mr-5 text-xl bg-gray-300 rounded-md"
              >
                Хүүхэд
              </label>
              <input
                type="number"
                className="p-2 border-2"
                min={'0'}
                value={childrenAmount}
                onChange={(e) => setChildrenAmount(e.target.value)}
              />
            </div>
            <button
              onClick={(e) => toSeatsPage(e)}
              className="p-2 my-3 text-xl text-white rounded-lg bg-sky-400"
            >
              Тасалбар захиалах
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default OrderPage
