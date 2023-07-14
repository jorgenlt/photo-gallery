import { useState, useEffect, useRef } from 'react'
import { photos } from './photosList'
import { useSelector } from 'react-redux'

const PhotoModal = props => {
  const darkMode = useSelector(state => state.photos.darkMode)

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(props.i)

  const prevImage = () => {
    if (currentPhotoIndex > 0) {
      setCurrentPhotoIndex(prev => prev - 1)
    }
  }

  const nextImage = () => {
    if (currentPhotoIndex < photos.length - 1) {
      setCurrentPhotoIndex(prev => prev + 1)
    }
  }

  const handleKeyDown = e => {
    if (e.key === 'ArrowLeft') {
      prevImage()
    } else if (e.key === 'ArrowRight') {
      nextImage()
    } else {
      props.toggleModal()
    }
  }

  const ref = useRef(null);

  useEffect(() => {
      ref.current.focus();
  }, []);

  return (
    <div 
      className={`img-modal ${darkMode ? 'dark-mode' : 'light-mode'}`}
      onKeyDown={e => handleKeyDown(e)}
      ref={ref}
      tabIndex={0}
    >
      <img 
        className='img-large' 
        src={`/${photos[currentPhotoIndex]}`} 
        alt={props.img}
        onClick={() => props.toggleModal()}
      />
      <div>
        <p>{currentPhotoIndex}</p>
        <span
          className='img-nav'
          onClick={() => prevImage()}
        >
          ←
        </span>
        <span 
          className='img-nav'
          onClick={() => nextImage()}
        >
          →
        </span>
      </div>
    </div>
  )
}

export default PhotoModal