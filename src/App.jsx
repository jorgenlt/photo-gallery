import { useEffect } from 'react'
import './styles/app.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Nav from './components/Nav'
import Photos from './features/photos/Photos'
import Footer from './components/Footer'
import { useSelector } from 'react-redux'

const App = () => {
  const darkMode = useSelector(state => state.photos.darkMode)

  useEffect(() => {
    AOS.init({ startEvent: 'load' });
  }, 
  [])

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
