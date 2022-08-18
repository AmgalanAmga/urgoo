import React, { useContext } from "react";
import { useParams, useNavigate} from "react-router-dom";
import MovieContext from "../context/MovieContext";
const OrderPage = () => {
  const { movies } = useContext(MovieContext);
  const { id } = useParams();
  const foundMovie = movies.find((movie) => {
    return movie.id === parseInt(id);
  });
  console.log(foundMovie);
  const history = useNavigate()
  const toSeatsPage = () => {
    history('/seats')
  }
  return (
    <div className=" max-w-screen-xl mx-auto">
      <div className="w-full h-[550px] relative mb-36">
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
            <span className="text-white text-4xl bg-gray-500/40 p-4 rounded-full">
              {foundMovie.title}
            </span>
            <div className="w-[500px] mt-5">
              <h2 className="text-3xl text-white">Overview</h2>
              <p className="text-2xl text-white font-semibold text-justify h-48">
                {foundMovie.overview}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <h1 className="text-4xl text-center">Цагийн хуваарь</h1>
        <div className="flex items-center justify-center flex-col">
          <div className="flex space-x-6 mt-10">
            <button className="bg-sky-500 text-xl text-white p-4 rounded-lg hover:bg-sky-500/70">
              12:00
            </button>
            <button className="bg-sky-500 text-xl text-white p-4 rounded-lg hover:bg-sky-500/70">
              14:20
            </button>
            <button className="bg-sky-500 text-xl text-white p-4 rounded-lg hover:bg-sky-500/70">
              16:20
            </button>
            <button className="bg-sky-500 text-xl text-white p-4 rounded-lg hover:bg-sky-500/70">
              19:10
            </button>
            <button className="bg-sky-500 text-xl text-white p-4 rounded-lg hover:bg-sky-500/70">
              21:40
            </button>
          </div>
          <div className="text-2xl font-semibold mt-5">
            <h1>Тасалбарын үнэ</h1>
            <h1>Том хүн 10000?₮</h1>
            <h1>Том хүн 5000?₮</h1>
          </div>
          <form className="mt-4 w-80">
            <h1 className="text-2xl mb-5">Суудлын тоогоо сонгоно уу?</h1>
            <div className="flex justify-between my-2">
              <label htmlFor="" className="text-xl mr-5 bg-gray-300 p-2 rounded-md">Том хүн</label>
              <input type="number" className="border-2 p-2" />
            </div>
            <div className="flex justify-between  ">
              <label htmlFor="" className="text-xl mr-5 bg-gray-300 p-2 rounded-md">Хүүхэд</label>
              <input type="number" className="border-2 p-2" />
            </div>
            <button onClick={toSeatsPage} className=" bg-sky-400 p-2 my-3 text-white text-xl rounded-lg">Тасалбар захиалах</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
