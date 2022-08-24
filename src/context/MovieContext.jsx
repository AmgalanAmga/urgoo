import { createContext, useState, useEffect } from "react";
import axios from "axios";
import requests from "../requests";
const MovieContext = createContext();
export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [comingMovies, setComingMovies] = useState([]);
  const [moviesDetails, setMoviesDetails] = useState([]);
  const [time, setTime] = useState("");
  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
    axios.get(requests.requestUpcoming).then((res) => {
      setComingMovies(res.data.results);
    });
  }, []);
  return (
    <MovieContext.Provider
      value={{
        movies,
        time,
        setTime,
        moviesDetails,
        setMoviesDetails,
        comingMovies,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
export default MovieContext;
