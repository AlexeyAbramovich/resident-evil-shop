import { createSlice } from '@reduxjs/toolkit'
import { GameInfo } from '../api/api'

export const currentGameSlice = createSlice({
  name: 'currentGame',
  initialState: {} as GameInfo,
  reducers: {
    setCurrentGame: (state, action) => {
      state = action.payload
      return state
    },
  },
})

export const {setCurrentGame} = currentGameSlice.actions
export default currentGameSlice.reducer


