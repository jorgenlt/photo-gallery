import { useState, useEffect } from 'react'
import { getRandomElement } from '../../common/utils/helperFunctions'
import PhotoModal from './PhotoModal'
import { photos } from './photosList'

const Photo = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = () => {
    setIsOpen(prev => !prev)
  }

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
      <li
        data-aos="zoom-in"
        data-aos-offset="0"
        data-aos-delay={`${getRandomElement([50, 150, 250, 350])}`}
        data-aos-duration="400"
      >
        <img 
          className='img-small' 
          src={`/${photos[props.i]}`} 
          alt={props.img} 
          onClick={() => toggleModal()}
        />
      </li>
      {
        isOpen && 
        <PhotoModal 
          toggleModal={toggleModal}
          i={props.i}
        />
      }
    </>
  )
}

export default Photo