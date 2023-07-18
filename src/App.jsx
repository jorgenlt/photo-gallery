import './styles/app.scss'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Nav from './components/Nav'
import Photos from './features/photos/Photos'
import Footer from './components/Footer'
import { isMobile } from "react-device-detect"
import { Oval } from 'react-loader-spinner'
import { toggleLoading } from './features/photos/photosSlice'

const App = () => {
  const {
    darkMode,
    loading
  } = useSelector(state => state.photos)

  const dispatch = useDispatch();
  
  // Initialize AOS library on component mount
  // useEffect(() => {
  //   AOS.init(
  //     { 
  //       startEvent: isMobile ? 'DOMContentLoaded' : 'load',
  //     }
  //   );
  // }, 
  // [])

  useEffect(() => {
    // callback function to call when event triggers
    const onPageLoad = () => {
      AOS.init();
      setTimeout(() => {
        dispatch(toggleLoading());
      }, 800)
      
      // do something else
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
        {loading ? (
          <Oval
            height={80}
            width={80}
            color="#101319"
            wrapperStyle={{}}
            wrapperClass="loader"
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="#CED2DF"
            strokeWidth={1}
            strokeWidthSecondary={1}
          
          /> ) : (
            <Photos />
          )}
        <Footer />
      </div>
    </div>
  )
}

export default App
