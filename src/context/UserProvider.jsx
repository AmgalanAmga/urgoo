import { useState, createContext } from 'react'
const UserContext = createContext()
export const UserProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState()
  const [isLogin, setLogin] = useState(false)
  const [isLogout, setLogout] = useState(false)
  const [adultAmount, setAdultAmount] = useState(0)
  const [childrenAmount, setChildrenAmount] = useState(0)
  return (
    <UserContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        isLogin,
        setLogin,
        isLogout,
        setLogout,
        adultAmount,
        setAdultAmount,
        childrenAmount,
        setChildrenAmount,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
export default UserContext
