import { configureStore } from '@reduxjs/toolkit'
import photosReducer from '../features/photos/photosSlice'

export const store = configureStore({
  reducer: {
    photos: photosReducer
  },
})
