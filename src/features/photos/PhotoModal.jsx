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
  
  // Determine the current set of photos based on whether a filter query is applied
  const currentPhotos = filterQuery ? filteredPhotos : photos

  // Retrieve the current photo based on the currentPhotoIndex
  const currentPhoto = currentPhotos[currentPhotoIndex]

  // Function to navigate to the previous image
  const prevImage = () => {
    if (currentPhotoIndex > 0) {
      setCurrentPhotoIndex(prev => prev - 1)
    }
  }

  // Function to navigate to the next image
  const nextImage = () => {
    if (currentPhotoIndex < currentPhotos.length - 1) {
      setCurrentPhotoIndex(prev => prev + 1)
    }
  }

  // Event handler for keyboard inputs
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

  // Focus on the modal element when the component mounts
  // to ensure that the key events work as expected
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
      {/* Display the current photo */}
      <img 
        className='img-large' 
        src={currentPhoto.src}
        alt={currentPhoto.src}
        onClick={() => props.toggleModal()}
      />

      {/* Display the category of the current photo */}
      <figcaption>{`${currentPhoto.category}, ${currentPhoto.location}`}</figcaption>
      
      {/* Navigation controls */}
      <div className='img-nav'>
        <span
          onClick={() => prevImage()}
        >
          prev
        </span>
        /
        <span 
          onClick={() => nextImage()}
        >
          next
        </span>
      </div>

      {/* Close button */}
      <HiXMark 
        className='img-modal--close'
        onClick={() => props.toggleModal()} 
      />
    </div>
  )
}

export default PhotoModal