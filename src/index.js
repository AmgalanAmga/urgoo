import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles.css'
import { BrowserRouter } from 'react-router-dom'
import { MovieProvider } from './context/MovieContext'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <MovieProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MovieProvider>
  </React.StrictMode>,
)
