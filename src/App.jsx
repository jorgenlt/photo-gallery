import './styles/app.scss'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Nav from './components/Nav'
import Photos from './features/photos/Photos'
import Footer from './components/Footer'
import AddPhotos from './features/photos/AddPhotos'
import { toggleLoading } from './features/photos/photosSlice'
import { firebaseConfig } from '../firebaseConfig'
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const App = () => {
  // Initialize Firebase
  // eslint-disable-next-line no-unused-vars
  const app = initializeApp(firebaseConfig);

  const { darkMode } = useSelector(state => state.photos)
  const dispatch = useDispatch();

  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);  
      }
    });
  }, []);

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
        <Photos />
        {user && <AddPhotos />}
        <Footer />
      </div>
    </div>
  )
}

export default App
