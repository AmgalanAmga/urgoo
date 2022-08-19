import React, {useContext} from 'react'
import UserContext from '../context/UserProvider'
const LoggedIn = () => {
    const { loggedIn } = useContext(UserContext)

  return (
      <div>{ loggedIn.user.email}</div>
  )
}

export default LoggedIn