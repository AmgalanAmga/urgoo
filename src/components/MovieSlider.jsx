import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectFade } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import MovieContext from '../context/MovieContext'
const MovieSlider = () => {
  const { movies } = useContext(MovieContext)
  return (
    <div className="flex flex-col items-center justify-center mx-auto mb-10">
      <h1 className="py-3 text-2xl text-center text-black">
        Дэлгэцнээ гарч буй кинонууд
      </h1>
      <div className="flex items-center mb-20">
        <Swiper
          modules={[Navigation, EffectFade]}
          navigation
          effect={"fade"}
          speed={800}
          slidesPerView={1}
          loop
          className="mx-auto max-w-screen-xl"
        >
          {movies.map((item, id) => {
            return (
              <SwiperSlide
                key={id}
                className="relative inline-block flex flex-col items-center justify-center p-2 cursor-pointer"
              >
                <img
                  className="block object-cover w-full h-full"
                  src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                  alt={item.title}
                />
                <div className="absolute top-0 left-0 w-full h-[720px] text-white opacity-0 hover:bg-black/30 hover:opacity-100">
                  <p className="flex items-center justify-center h-full text-3xl font-bold tracking-wider text-center">
                    {item.title}
                  </p>
                </div>
                <Link
                  to={`/movie/${item.id}`}
                  className="w-full text-3xl font-semibold text-center text-white bg-sky-500"
                >
                  Цагийн хуваарь ба захиалга
                </Link>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default MovieSlider
