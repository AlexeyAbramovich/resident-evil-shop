import { createSlice } from '@reduxjs/toolkit'
import { GameInfo } from '../api/api'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [] as GameInfo[],
  reducers: {
    addGameToCart: (state, action) => {
      state.push(action.payload)
    },
    removeGameFromCart: (state, action) => {
      state = state.filter((gameInfo) => gameInfo.name !== action.payload)
      return state
    },
    removeAllGamesFromCart: (state) =>{
      state.length = 0
    }
  },
})

export const { addGameToCart, removeGameFromCart, removeAllGamesFromCart } = cartSlice.actions
export default cartSlice.reducer
