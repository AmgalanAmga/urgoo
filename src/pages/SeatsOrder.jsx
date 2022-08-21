import { fireConfig } from '../keys'
import { initializeApp } from 'firebase/app'
import UserContext from '../context/UserProvider'
import MovieContext from '../context/MovieContext'
import React, { useState, useContext } from 'react'
import { getFirestore, collection, setDoc, doc  } from 'firebase/firestore'

const SeatsOrder = () => {
  const [seats, setSeats] = useState([])
  const headers = [
    'Таны нэр',
    'Киноны нэр',
    'Суудлын дугаар',
    'Суудлын тоо',
    'Цаг',
    'Төлбөр',
  ]
  const [isClicked, setIsClicked] = useState(false)
  const { moviesDetails, time } = useContext(MovieContext)
  const { adultAmount, childrenAmount, loggedIn } = useContext(UserContext)
  const seatsArray = new Array(15).fill(new Array(20).fill(''))
  const seatIds = (a, b, e) => {
    if (seats.length !== parseInt(adultAmount) + parseInt(childrenAmount)) {
      const rowFrom = String.fromCharCode(a + 65)
      setSeats([...seats, { row: rowFrom, col: b + 1 }])
      e.target.style.visibility = 'hidden'
      setIsClicked(true)
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
    try {
      const docRef = await setDoc(doc(database, 'orders'), {
        name: loggedIn.user.email,
        movieName: moviesDetails.title,
        seatNums: seats,
        amountSeats: parseInt(adultAmount) + parseInt(childrenAmount),
        movieTime: time,
      })
      alert('Захиалга амжилттай')
      console.log('Document written with ID: ', docRef.id)
    } catch (e) {
      console.error(e)
      alert('Login or Register')
    }
  }
  return (
    <div className="max-w-screen-md mx-auto mt-10 flex flex-col items-center justify-center">
      <h1 className="mb-10">Суудлын дугаараа сонгоно уу?</h1>
      <div className="w-96 h-96 flex items-center justify-center flex-col">
        {seatsArray.map((row, j) => {
          let rowLetter = String.fromCharCode(65 + j)
          return (
            <div className="flex justify-between gap-1" key={j}>
              <h1 className="mr-2">{rowLetter}</h1>
              {row.map((col, i) => (
                <button
                  onClick={(e) => seatIds(j, i, e)}
                  key={i}
                  className="h-5 w-5 text-sm my-1 bg-gray-400 rounded-md"
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )
        })}
      </div>
      <div className="border border-black p-4 rounded-xl mt-10">
        <div className="flex justify-between w-full gap-x-3">
          {headers.map((head, l) => (
            <h1 key={l} className="whitespace-nowrap text-xl font-semibold ">
              {head}
            </h1>
          ))}
        </div>
        <div className="flex justify-between w-full">
          <h1>{loggedIn.user.email}</h1>
          <h1 className="w-28 truncate">{moviesDetails.title}</h1>
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
        className="mt-5 bg-sky-400 p-3 rounded-lg uppercase text-white font-semibold text-lg"
      >
        Төлбөр төлөх
      </button>
    </div>
  )
}

export default SeatsOrder
