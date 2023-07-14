import { createSlice, createSelector } from '@reduxjs/toolkit'
import { photos } from './photosList'

const initialState = {
  darkMode: false,
  photos: photos,
  filterQuery: '',
  filteredPhotos: []
}

export const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    toggleDarkMode: state => {
      state.darkMode = !state.darkMode
    },
    updateFilterQuery: (state, action) => {
      state.filterQuery = action.payload;
    }
  },
})

// Selector for all photos
export const selectAllPhotos = createSelector(
  state => state.photos.photos,
  photos => photos
)

// Action creators are generated for each case reducer function
export const { toggleDarkMode, updateFilterQuery } = photosSlice.actions

export default photosSlice.reducer