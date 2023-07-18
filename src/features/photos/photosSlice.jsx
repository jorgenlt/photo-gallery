import { createSlice, createSelector } from '@reduxjs/toolkit'
import { photos } from './photosList'

const initialState = {
  loading: true,
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
      console.log(`filterQuery updated with: ${action.payload}`);
      state.filteredPhotos = state.photos.filter(photo => photo.category.includes(state.filterQuery));
    },
    toggleLoading: state => {
      state.loading = false;
    }
  },
})

// Selector for all photos
export const selectAllPhotos = createSelector(
  state => state.photos.photos,
  photos => photos
)

// Action creators are generated for each case reducer function
export const { toggleDarkMode, updateFilterQuery, toggleLoading } = photosSlice.actions

export default photosSlice.reducer