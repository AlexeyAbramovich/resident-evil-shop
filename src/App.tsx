import { Header } from './components/header'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchGames } from './api/api'
import { HomePage } from './pages/home-page'
import { UnknownAction } from '@reduxjs/toolkit'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GamePage } from './pages/game-page'
import { OrderPage } from './pages/order-page'
import './reset.scss'
import './app.scss'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGames() as unknown as UnknownAction)
  }, [])

  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
          <Routes>
            <Route path="/game/:name" element={<GamePage />} />
          </Routes>
          <Routes>
            <Route path="/order" element={<OrderPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
