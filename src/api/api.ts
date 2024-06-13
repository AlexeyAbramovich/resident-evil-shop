import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export type GameInfo = {
  name: string
  creator: string
  release: string
  genre: string
  rate: number
  price: number
  platforms: string[]
  'system-requirements': string
  description: string
  trailer: string
  img: string
}

export const fetchGames = createAsyncThunk('games/fetchGames', async () => {
  try {
    const response = await axios.get(
      'https://660500ff2ca9478ea17efb63.mockapi.io/re/resident-evil'
    )
    const games = response.data
    return games
  } catch (e) {
    return []
  }
})
