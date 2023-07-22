import './styles/app.scss'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Nav from './components/Nav'
import Photos from './features/photos/Photos'
import Footer from './components/Footer'
import AddPhotos from './features/photos/AddPhotos'
import UserOptions from './components/UserOptions'
import { toggleLoading } from './features/photos/photosSlice'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { fetchImageUrlsThunk, setUserSignedIn } from './features/photos/photosSlice'

const App = () => {
  const { darkMode } = useSelector(state => state.photos)

  const { 
    status, 
    error
  } = useSelector(state => state.photos);
  
  const dispatch = useDispatch();

  // Firebase auth
  const auth = getAuth();

  // Check if user is logged in
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        dispatch(setUserSignedIn(true));
      } else {
        dispatch(setUserSignedIn(false));
      }
    });
  }, []);

  // Fetch image-URL's from Firebase.
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchImageUrlsThunk());
    }
  },[status, dispatch])

  // Loader
  useEffect(() => {
    // callback function to call when event triggers
    const onPageLoad = () => {
      setTimeout(() => {
        dispatch(toggleLoading());
      }, 800)
    };
    // Check if the page has already loaded
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad, false);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);
  
  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="app">
        <Nav />
        <UserOptions />
        {error && <p>{error}</p>}
        <Photos />
        <Footer />
      </div>
    </div>
  )
}

export default App
