import { createSlice } from '@reduxjs/toolkit'

export type Filter = {
  filter: string
}

const initialState: Filter = {
  filter: ''
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload
    },
  },
})

export const { setFilter } = filterSlice.actions
export default filterSlice.reducer
