import './styles/app.scss'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Nav from './components/Nav'
import Photos from './features/photos/Photos'
import Footer from './components/Footer'
import { toggleLoading } from './features/photos/photosSlice'
import { initializeApp } from "firebase/app";

const App = () => {

  const firebaseConfig = {
    apiKey: "AIzaSyCPjRrG0qhIKyj1D_NkpLVSDMZDlj8Xps8",
    authDomain: "photo-gallery-02.firebaseapp.com",
    projectId: "photo-gallery-02",
    storageBucket: "photo-gallery-02.appspot.com",
    messagingSenderId: "214278098284",
    appId: "1:214278098284:web:4d58ab177b7fad61a4f749",
    databaseURL: 'https://photo-gallery-02-default-rtdb.europe-west1.firebasedatabase.app/'
  };

  // Initialize Firebase
  // eslint-disable-next-line no-unused-vars
  const app = initializeApp(firebaseConfig);

  const { darkMode } = useSelector(state => state.photos)

  const dispatch = useDispatch();

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
        <Footer />
      </div>
    </div>
  )
}

export default App
