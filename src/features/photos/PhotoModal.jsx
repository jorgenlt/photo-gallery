import { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { selectAllPhotos } from './photosSlice'
import { HiXMark } from "react-icons/hi2";

const PhotoModal = props => {
  const darkMode = useSelector(state => state.photos.darkMode)
  const photos = useSelector(selectAllPhotos)
  const filterQuery = useSelector(state => state.photos.filterQuery)
  const filteredPhotos = useSelector(state => state.photos.filteredPhotos)

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(props.i)
  
  const currentPhotos = filterQuery ? filteredPhotos : photos
  const currentPhoto = currentPhotos[currentPhotoIndex]

  const prevImage = () => {
    if (currentPhotoIndex > 0) {
      setCurrentPhotoIndex(prev => prev - 1)
    }
  }

  const nextImage = () => {
    if (currentPhotoIndex < currentPhotos.length - 1) {
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
      <div className='img-nav'>
        {/* <p>{currentPhotoIndex} / {currentPhoto.category} / {currentPhoto.year}</p> */}
        <span
          onClick={() => prevImage()}
        >
          prev
        </span>
        &nbsp;/&nbsp;
        <span 
          onClick={() => nextImage()}
        >
          next
        </span>
      </div>
      <HiXMark 
        className='img-modal--close'
        onClick={() => props.toggleModal()} 
      />
    </div>
  )
}

export default PhotoModal