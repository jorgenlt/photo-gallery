<h1>Photo Gallery</h1>

<div>
  <p>A photo portfolio site for photographers.</p>
  </br>
  <p>Visit site: <a href="https://photography.jorgenlt.no" target="_blank">photography.jorgenlt.no</a></p>
  </br>
</div>

<img src="https://github.com/jorgenlt/photo-gallery/assets/108831121/564fbb7f-bba1-448c-a8fb-61d3eb559ed3" alt="Photo Gallery on desktop." height='500px'/>

</br></br>

<img src="https://github.com/jorgenlt/photo-gallery/assets/108831121/b6ddc85f-338f-4e57-8944-1350ae8df27c" alt="Photo Gallery on mobile." height="500px" /><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><img src="https://github.com/jorgenlt/photo-gallery/assets/108831121/a6070d86-8e26-4b5b-85c2-41103778ea98" alt="Photo Gallery on mobile." height="500px" />

<h2>Features</h2>
<ul>
  <li>Browse photos by category.</li>
  <li>View photos in full size.</li>
  <li>Upload new images to category of choice.</li>
</ul>


<h2>Technologies</h2>
<p>
  The application is build with React on the <a href="https://vitejs.dev/" target="_blank">Vite.js</a> framework. 
  The app combines <a href="https://redux-toolkit.js.org/" target="_blank">Redux Toolkit</a>
  , <a href="https://redux.js.org/usage/writing-logic-thunks" target="_blank">Redux Thunk</a>, 
  and selectors to manage the state and actions. Sign in functionality is handled 
  with <a href="https://firebase.google.com/docs/auth/web/start" target="_blank">Firebase Authentication</a> and uploaded 
  photos are stored in <a href="https://firebase.google.com/docs/storage/web/start" target="_blank">Firebase Storage</a>.
</p>


<h2>Installation</h2>

1. Install the required dependencies using npm: 
  
    `npm install`

<h2>Usage</h2>

1. Start the application by running the following command: 
  
    `npm run dev`


<h2>Technical challenges</h2>

<h3>The Redux slice</h3>

 <p>Setting up the Redux with Redux Toolkit to mangage the app.</p>
              
```.js
// src/features/photos/photosSlice.jsx

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
      console.log(\`filterQuery updated with: \${action.payload}\`);
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
        state.error = \`
          The fetching of images failed with the following 
          error message: "\${action.error.message}"
        \`; 
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
```

<h3>Fetch all image URL's from photos stored in Firebase Storage.</h3>

```.js
// src/common/storage/fetchImageUrls.js

import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

const storage = getStorage();

// Returns an array of objects containing the image URLs, categories, and locations
const fetchImageUrls = async () => {
  
  const listRef = ref(storage);
  
  const res = await listAll(listRef);
  
  const urls = await Promise.all(
    res.items.map(async (item) => {
      const url = await getDownloadURL(item);
      const tags = item.name.split('--');
      const location = tags[0];
      const category = tags[1];

      return {
        id: item.name,
        src: url,
        category,
        location
      };
    })
  );

  return urls;
}

export default fetchImageUrls;
```

<h3>Folder structure</h3>

```.bash
├── app
│   └── store.jsx
├── App.jsx
├── assets
├── common
│   ├── storage
│   │   ├── fetchImageUrls.js
│   │   └── uploadImage.js
│   └── utils
│       └── firebase.js
├── components
│   ├── auth
│   │   ├── AuthDetails.jsx
│   │   ├── SignIn.jsx
│   │   └── SignUp.jsx
│   ├── Dropdown.jsx
│   ├── Footer.jsx
│   ├── Nav.jsx
│   ├── NavMobile.jsx
│   └── UserOptions.jsx
├── features
│   └── photos
│       ├── ImageModal.jsx
│       ├── Photo.jsx
│       ├── Photos.jsx
│       ├── photosList.js
│       ├── photosSlice.jsx
│       └── UploadImage.jsx
├── main.jsx
└── styles
    ├── app.scss
    ├── components
    │   ├── _auth.scss
    │   ├── _dropdown.scss
    │   ├── _footer.scss
    │   ├── _index.scss
    │   ├── _nav-mobile.scss
    │   ├── _nav.scss
    │   └── _user-options.scss
    ├── config
    │   ├── _base.scss
    │   ├── _index.scss
    │   └── _variables.scss
    └── features
        ├── _image-modal.scss
        ├── _index.scss
        ├── _photos.scss
        └── _upload-image.scss
```

<h2>Upcoming features</h2>
<ul>
  <li>Enable sign up.</li>
  <li>A user can create their own personal portfolio.</li>
  <li>A user can CRUD categories and sub-categories.</li>
  <li>Visitors can like(vote) a picture.</li>
</ul>
