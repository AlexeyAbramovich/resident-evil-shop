import { createSlice } from '@reduxjs/toolkit'

export const cartStateSlice = createSlice({
  name: 'cartState',
  initialState: false,
  reducers: {
    setCartState: (state, action) => {
      state = action.payload
      return state
    },
  },
})

export const { setCartState } = cartStateSlice.actions
export default cartStateSlice.reducer
