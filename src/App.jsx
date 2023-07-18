import './styles/app.scss'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import 'aos/dist/aos.css'
import Nav from './components/Nav'
import Photos from './features/photos/Photos'
import Footer from './components/Footer'
import { toggleLoading } from './features/photos/photosSlice'

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
