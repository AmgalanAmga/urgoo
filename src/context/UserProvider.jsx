import { useState, createContext } from "react";
const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState();
  const [isLogin, setLogin] = useState(false)
  const [isLogout, setLogout] = useState(false)
  const [adultAmount, setAdultAmount] = useState(Number);
  const [chilrenAmount, setChildrenAmount] = useState(Number);
  return <UserContext.Provider value={{loggedIn, setLoggedIn, isLogin, setLogin, isLogout, setLogout, adultAmount, setAdultAmount, chilrenAmount, setChildrenAmount}}>{children}</UserContext.Provider>;
};
export default UserContext