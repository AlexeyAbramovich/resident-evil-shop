import { createSlice } from '@reduxjs/toolkit'
import { GameInfo, fetchGames } from '../api/api'



type GamesData = {
    games: GameInfo[],
    loading: boolean,
    error: string | null
}

const initialState: GamesData = {
    games: [],
    loading: true,
    error: null
}

export const gamesSlice = createSlice({
  name: 'gamesData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGames.pending, (state)=>{
        state.loading = true
        state.error = null
    })
    builder.addCase(fetchGames.fulfilled, (state, action)=>{
        state.loading = false
        state.games = action.payload
        state.error = null
    })
    builder.addCase(fetchGames.rejected, (state)=>{
        state.loading = false
        state.games = []
        state.error = 'Error while fetching data...'
    })
  }
})

export default gamesSlice.reducer
