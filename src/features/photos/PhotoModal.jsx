import { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { selectAllPhotos } from './photosSlice';

const PhotoModal = props => {
  const darkMode = useSelector(state => state.photos.darkMode)
  const photos = useSelector(selectAllPhotos)

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(props.i)

  const currentPhoto = photos[currentPhotoIndex]

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
        src={`/${currentPhoto.src}`}
        alt={props.img}
        onClick={() => props.toggleModal()}
      />
      <div>
        <p>{currentPhotoIndex} / {currentPhoto.category} / {currentPhoto.year}</p>
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