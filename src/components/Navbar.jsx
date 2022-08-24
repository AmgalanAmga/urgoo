import { Link } from 'react-router-dom'
import mongolia from '../images/mongolia.png'
import america from '../images/united-states.png'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { TiSocialYoutubeCircular } from 'react-icons/ti'
import LoggedIn from './LoggedIn'
import Nevt from './Nevt'
import { useContext } from 'react'
import UserContext from '../context/UserProvider'
import Logout from './Logout'
const Navbar = () => {
  const { isLogin, isLogout, setLogout, setLogin } = useContext(UserContext)
  const logoutF = () => {
    setLogout(false)
    setLogin(false)
  }
  return (
    <div className="flex max-w-screen-xl mx-auto">
      <Link
        to="/"
        className="flex flex-col items-center justify-center px-3 py-5 -space-y-3 bg-black"
      >
        <p className="text-[#BFBFBF] uppercase">urgoo cinema</p>
        <p className="text-5xl font-bold text-white uppercase">imax</p>
      </Link>
      <div className="w-full">
        <div className="flex bg-[#343434] items-center justify-end py-4 px-5">
          <span className="uppercase text-[#EAE9E9] whitespace-nowrap">
            call center: 77117711
          </span>
          {isLogin ? (
            <div className="mx-6 text-[#EAE9E9]">
              <LoggedIn />
            </div>
          ) : (
            <Link to="/login" className="mx-6 text-[#EAE9E9]">
              <Nevt />
            </Link>
          )}

          <div className="flex items-center space-x-2">
            <FaInstagram className="bg-white rounded-sm cursor-pointer hover:scale-110" />
            <TiSocialYoutubeCircular className="bg-white rounded-sm cursor-pointer hover:scale-110" />
            <FaTwitter className="bg-white rounded-sm cursor-pointer hover:scale-110" />
            <FaFacebookF className="bg-white rounded-sm cursor-pointer hover:scale-110" />
            <img src={america} alt="" className="w-5 cursor-pointer" />
            <img src={mongolia} alt="" className="w-5 cursor-pointer" />
            <Link to="/" onClick={logoutF}>
              {!isLogout ? '' : <Logout />}
            </Link>
          </div>
        </div>
        <div className="flex justify-end items-center bg-gradient-to-b from-[#D7D7D7] to-[#F6F6F6]">
          <Link
            to="/"
            className="p-5 uppercase duration-300 hover:bg-black hover:text-white whitespace-nowrap"
          >
            эхлэл
          </Link>
          <Link
            to="/imax"
            className="uppercase p-4 bg-[#038ED5] hover:bg-black text-2xl font-bold text-white duration-300 rounded-sm whitespace-nowrap"
          >
            imax
          </Link>
          <Link
            to="/comingsoon"
            className="p-5 uppercase duration-300 hover:bg-black hover:text-white whitespace-nowrap"
          >
            тун удахгүй
          </Link>
          <Link
            to="/movie"
            className="p-5 uppercase duration-300 hover:bg-black hover:text-white whitespace-nowrap"
          >
            захиалга
          </Link>
          <Link
            to="/services"
            className="p-5 uppercase duration-300 hover:bg-black hover:text-white whitespace-nowrap"
          >
            үйлчилгээ
          </Link>
          <Link
            to="/price"
            className="p-5 uppercase duration-300 hover:bg-black hover:text-white whitespace-nowrap"
          >
            үнэ урамшуулал
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
