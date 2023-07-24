import { createSlice, createSelector, createAsyncThunk } from '@reduxjs/toolkit'
import { photos } from './photosList'
import fetchImageUrls from '../../common/storage/fetchImageUrls'

const initialState = {
  status: 'idle',
  userSignedIn: false,
  error: null,
  loading: true,
  darkMode: false,
  photos: photos,
  filterQuery: '',
  filteredPhotos: []
}

// Asynchronous thunk to fetch image URLs.
export const fetchImageUrlsThunk = createAsyncThunk(
  'photos/fetchImageUrls',
  fetchImageUrls
)

export const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    toggleDarkMode: state => {
      state.darkMode = !state.darkMode
    },
    // Filter the photos based on the category or location that includes 
    // the filter query.
    updateFilterQuery: (state, action) => {
      state.filterQuery = action.payload;
      console.log(`filterQuery updated with: ${action.payload}`);
      state.filteredPhotos = state.photos.filter(photo => 
        photo.category.includes(state.filterQuery) || 
        photo.location.includes(state.filterQuery)
      );
    },
    toggleLoading: state => {
      state.loading = false;
    },
    setUserSignedIn: (state, action) => {
      state.userSignedIn = action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchImageUrlsThunk.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchImageUrlsThunk.fulfilled, (state, action) => {
        state.status = 'succeeded';
        action.payload.forEach(image => {

           // Check if the photo already exists in the state.
          const exists = state.photos.some(p => p.id === image.id);
        
          // If the photo doesn't exist, add it to the photos array in the state.
          if (!exists) {
            state.photos.push(image);
          }
        
        });
      })
      .addCase(fetchImageUrlsThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = `
          The fetching of images failed with the following 
          error message: "${action.error.message}"
        `; 
      });
  },
})

// Selector for all photos
export const selectAllPhotos = createSelector(
  state => state.photos.photos,
  photos => photos
)

// Action creators are generated for each case reducer function
export const { 
  toggleDarkMode, 
  updateFilterQuery, 
  toggleLoading, 
  setUserSignedIn
} = photosSlice.actions

export default photosSlice.reducer