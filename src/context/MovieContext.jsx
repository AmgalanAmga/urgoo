import { createContext, useState, useEffect } from "react";
import axios from "axios";
import requests from "../requests";
const MovieContext = createContext();
export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, [requests.requestPopular]);
  return (
    <MovieContext.Provider value={{movies}}>
      {children}
    </MovieContext.Provider>
  );
};
export default MovieContext;
