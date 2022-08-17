import { createContext } from "react";
import requests from "../requests";
const MovieContext = createContext()
export const MovieProvider = ({ children }) => {
    return (
        <MovieContext.Provider value={(requests)}>
            {children}
        </MovieContext.Provider>
    )
}
export default MovieContext