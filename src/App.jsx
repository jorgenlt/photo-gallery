import { useEffect } from 'react'
import './styles/app.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Nav from './components/Nav'
import Photos from './components/Photos'
import Footer from './components/Footer'

const App = () => {
  useEffect(() => {
    AOS.init({ startEvent: 'load' });
    // window.addEventListener('load', AOS.refresh);
  }, 
  [])

  return (
    <>
      <Nav />
      <Photos />
      <Footer />
    </>
  )
}

export default App
