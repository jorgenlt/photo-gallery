import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  darkMode: false,
}

export const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    toggleDarkMode: state => {
      state.darkMode = !state.darkMode
      console.log(!state.darkMode);
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleDarkMode } = photosSlice.actions

export default photosSlice.reducer