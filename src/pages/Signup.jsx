import React, { useState } from 'react'
import { initializeApp } from 'firebase/app'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { fireConfig } from '../key'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
const Signup = () => {
  const [isCreated, setIsCreated] = useState(false)
  const [isExists, setIsExists] = useState(false)
  const firebaseConfig = {
    apiKey: fireConfig.apiKey,
    authDomain: fireConfig.authDomain,
    projectId: fireConfig.projectId,
    storageBucket: fireConfig.storageBucket,
    messagingSenderId: fireConfig.messagingSenderId,
    appId: fireConfig.appId,
    measurementId: fireConfig.measurementId,
  }
  const navigate = useNavigate()
  const app = initializeApp(firebaseConfig)
  const handleSignUp = (e) => {
    e.preventDefault()
    const { email, password } = e.target.elements
    const auth = getAuth(app)
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((res) => console.log(res))
      .catch((err) => {
        if (err.code === 'auth/email-already-in-use') {
          setIsExists(true)
        }
      })
    setIsCreated(true)
  }
  const closeBtn = () => {
    return [setIsCreated(false), setIsExists(false), navigate('/')]
  }
  return (
    <div className="relative max-w-screen-xl mx-auto w-full h-[calc(100vh-120px)] flex items-center justify-center flex-col">
      <h1 className="mb-3 text-3xl">Нэвтрэх</h1>
      <form
        className="flex flex-col p-2 space-y-2 border-4 rounded-lg w-72"
        onSubmit={handleSignUp}
      >
        <input
          id="name"
          type="text"
          placeholder="Нэрээ оруулна уу"
          className="p-2 bg-gray-200 outline-none"
          autoComplete="off"
        />
        <input
          id="email"
          type="email"
          placeholder="Имэйл хаягаа оруулна уу"
          className="p-2 bg-gray-200 outline-none"
          autoComplete="off"
        />
        <input
          id="number"
          type="text"
          placeholder="Утасны дугаараа оруулна уу"
          className="p-2 bg-gray-200 outline-none"
          autoComplete="off"
        />
        <input
          id="password"
          type="password"
          placeholder="Нууц үгээ оруулна уу"
          className="p-2 bg-gray-200 outline-none"
          autoComplete="off"
        />
        <button className="p-1 font-semibold text-white bg-sky-500">
          Signup
        </button>
        <Link to="/login" className="text-center">
          Login
        </Link>
      </form>
      <div
        style={
          !isCreated
            ? { display: 'none' }
            : {
                display: 'flex',
              }
        }
        className="absolute z-40 items-center justify-center w-full h-full text-black bg-black/50"
      >
        <div
          style={
            !isCreated
              ? { display: 'none' }
              : {
                  display: 'flex',
                  transform: 'scale(1)',
                }
          }
          className="relative w-56 h-20 p-3 scale-75 bg-white rounded-xl"
        >
          <AiOutlineCloseCircle
            onClick={closeBtn}
            className="absolute cursor-pointer top-2 right-2"
          />
          <span>
            {isExists
              ? 'Бүртгэлтэй имэйл байна'
              : 'Хэрэглэгч амжилттай бүртгэгдлээ'}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Signup
