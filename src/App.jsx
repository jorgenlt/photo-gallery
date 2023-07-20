import './styles/app.scss'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import 'aos/dist/aos.css'
import Nav from './components/Nav'
import Photos from './features/photos/Photos'
import Footer from './components/Footer'
import { toggleLoading } from './features/photos/photosSlice'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyCPjRrG0qhIKyj1D_NkpLVSDMZDlj8Xps8",
  authDomain: "photo-gallery-02.firebaseapp.com",
  projectId: "photo-gallery-02",
  storageBucket: "photo-gallery-02.appspot.com",
  messagingSenderId: "214278098284",
  appId: "1:214278098284:web:4d58ab177b7fad61a4f749"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


const App = () => {
  const { darkMode } = useSelector(state => state.photos)

  const dispatch = useDispatch();

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
