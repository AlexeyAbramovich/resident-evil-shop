import { configureStore } from '@reduxjs/toolkit'
import gamesReducer from './gamesSlice'
import filterSlice from './filterSlice'
import cartSlice from './cartSlice'
import currentGameSlice from './currentGameSlice'
import cartStateSlice from './cartStateSlice'

export const store = configureStore({
  reducer: {
    games: gamesReducer,
    filter: filterSlice,
    cart: cartSlice,
    currentGame: currentGameSlice,
    cartState: cartStateSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
