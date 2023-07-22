import { useState, useEffect } from 'react'
import PhotoModal from './PhotoModal'

const Photo = props => {
  const [isOpen, setIsOpen] = useState(false)
  
  // Function to toggle photo modal
  const toggleModal = () => {
    setIsOpen(prev => !prev)
  }

  // Add or remove 'overflow-hidden' class on the body 
  // based on wether the modal is open.
  useEffect(() => {
    const body = document.body;

    if(isOpen) {
      body.classList.add('overflow-hidden');
    } else {
      body.classList.remove('overflow-hidden');
    }
  }, [isOpen])
  
  return(
    <>
      <li>
        <img
          className='img-small' 
          src={props.src}
          alt={props.src} 
          onClick={() => toggleModal()}
        />
      </li>
      {
        isOpen && 
        <PhotoModal 
          toggleModal={toggleModal}
          i={props.i}
          category={props.category}
        />
      }
    </>
  )
}

export default Photo