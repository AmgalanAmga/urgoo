import { fireConfig } from '../key.js'
import { initializeApp } from 'firebase/app'
import UserContext from '../context/UserProvider'
import MovieContext from '../context/MovieContext'
import React, { useState, useContext, useEffect } from 'react'
import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  getDocs,
  query,
} from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
const SeatsOrder = () => {
  const [seats, setSeats] = useState([])
  const [fromData, setFromData] = useState([])
  const [mTime, setMTime] = useState('')
  const headers = [
    'Таны нэр',
    'Киноны нэр',
    'Суудлын дугаар',
    'Суудлын тоо',
    'Цаг',
    'Төлбөр',
  ]
  const navigate = useNavigate()
  const { moviesDetails, time, setTime } = useContext(MovieContext)
  const {
    isLogin,
    loggedIn,
    adultAmount,
    setAdultAmount,
    childrenAmount,
    setChildrenAmount,
  } = useContext(UserContext)

  const seatsArray = new Array(15).fill(new Array(20).fill(''))
  const seatIds = (a, b, e) => {
    if (seats.length !== parseInt(adultAmount) + parseInt(childrenAmount)) {
      const rowFrom = String.fromCharCode(a + 65)
      setSeats([
        ...seats,
        { row: rowFrom, col: b + 1, sold: true, id: e.target.id },
      ])
      e.target.style.visibility = 'hidden'
    }
  }
  const firebaseConfig = {
    apiKey: fireConfig.apiKey,
    authDomain: fireConfig.authDomain,
    projectId: fireConfig.projectId,
    storageBucket: fireConfig.storageBucket,
    messagingSenderId: fireConfig.messagingSenderId,
    appId: fireConfig.appId,
    measurementId: fireConfig.measurementId,
  }

  const app = initializeApp(firebaseConfig)
  const database = getFirestore(app)
  const addToDatabase = async () => {
    if (isLogin) {
      if (seats.length === 0)
        return alert('Суудлаа сонгодоо, эсвэл зогсоогоороо үз!!!')
      if (seats.length < parseInt(adultAmount) + parseInt(childrenAmount))
        return alert(`Суудал дутуу сонгосон байна`)
      try {
        const docRef = await addDoc(collection(database, 'orders'), {
          name: loggedIn.user.email,
          movieName: moviesDetails.title,
          seatNums: seats,
          amountSeats: parseInt(adultAmount) + parseInt(childrenAmount),
          movieTime: time,
        })
        alert('Захиалга амжилттай')
        navigate('/')
        setTime()
        console.log('Document written with ID: ', docRef.id)
        setAdultAmount(0)
        setChildrenAmount(0)
      } catch (e) {
        console.error(e.message)
      }
    } else {
      alert('Login or Register')
      navigate('/login')
    }
  }
  const read = async () => {
    const seatButtons = document.querySelectorAll('button')
    const querySnapshot = await getDocs(collection(database, 'orders'))
    setMTime(time)
    querySnapshot.forEach((doc) => {
      const name = doc.data().movieName
      if (name === moviesDetails.title)
        return doc.data().seatNums.map((seatN) => {
          seatButtons.forEach((seat) => {
            if (seat.getAttribute('id') === seatN.id)
              return (seat.style.visibility = 'hidden')
          })
        })
    })
  }
  useEffect(() => {
    read()
  }, [])
  return (
    <div className="flex flex-col items-center justify-center max-w-screen-md mx-auto mt-10">
      <h1 className="mb-10">Суудлын дугаараа сонгоно уу?</h1>
      <div className="flex flex-col items-center justify-center w-96 h-96">
        {seatsArray.map((row, j) => {
          let rowLetter = String.fromCharCode(65 + j)
          return (
            <div className="flex justify-between gap-1" key={j}>
              <h1 className="mr-2">{rowLetter}</h1>
              {row.map((col, i) => {
                return (
                  <button
                    id={rowLetter + i}
                    onClick={(e) => seatIds(j, i, e)}
                    key={i}
                    className="w-5 h-5 my-1 text-sm bg-gray-400 rounded-md"
                  >
                    {i + 1}
                  </button>
                )
              })}
            </div>
          )
        })}
      </div>
      <div className="p-4 mt-10 border border-black rounded-xl">
        <div className="flex justify-between w-full gap-x-3">
          {headers.map((head, l) => (
            <h1 key={l} className="text-xl font-semibold whitespace-nowrap ">
              {head}
            </h1>
          ))}
        </div>
        <div className="flex justify-between w-full">
          <h1>{isLogin ? loggedIn.user.email : 'User'}</h1>
          <h1 className="truncate w-28">{moviesDetails.title}</h1>
          <div>
            {seats.map((seat, k) => (
              <div key={k}>
                <h1>
                  Эгнээ: {seat.row}; Суудал: {seat.col}
                </h1>
              </div>
            ))}
          </div>
          <div className="w-20">
            <h1>Том хүн: {adultAmount}</h1>
            <h1>Хүүхэд: {childrenAmount}</h1>
          </div>
          <h2>{time}</h2>
          <div className="text-center">
            <h1>
              {adultAmount >= 1 && childrenAmount === 0
                ? adultAmount * 10000
                : childrenAmount >= 1 && adultAmount === 0
                ? childrenAmount * 5000
                : adultAmount * 10000 + childrenAmount * 5000}
            </h1>
          </div>
        </div>
      </div>
      <button
        onClick={addToDatabase}
        className="p-3 mt-5 text-lg font-semibold text-white uppercase rounded-lg bg-sky-400"
      >
        Төлбөр төлөх
      </button>
    </div>
  )
}

export default SeatsOrder
