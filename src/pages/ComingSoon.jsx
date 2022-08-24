import React, { useContext } from "react";
import MovieContext from "../context/MovieContext";
const ComingSoon = () => {
  const { comingMovies } = useContext(MovieContext);
  console.log(comingMovies);
  return (
    <div className="grid grid-cols-3 lg:grid-cols-4 justify-items-center mt-10 max-w-screen-xl mx-auto gap-3">
      {comingMovies.map((coMovie) => (
        <div className="w-72 m-5 rounded-2xl overflow-hidden relative">
          <img
            className="block object-cover w-full h-full"
            src={`https://image.tmdb.org/t/p/original/${coMovie.backdrop_path}`}
            alt={coMovie.title}
          />
          <div className="absolute top-10 left-0 w-full h-full text-white opacity-0 hover:bg-black/30 hover:opacity-100 hover:top-0 duration-300 ease-in-out">
            <p className="flex items-center justify-center h-full text-2xl font-semibold tracking-wider text-center">
              {coMovie.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComingSoon;
