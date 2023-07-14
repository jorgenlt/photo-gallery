import { useState, useEffect } from 'react'
import { getRandomElement } from '../../common/utils/helperFunctions'
import { useSelector } from 'react-redux'
import { selectAllPhotos } from './photosSlice';
import PhotoModal from './PhotoModal'


const Photo = props => {
  const [isOpen, setIsOpen] = useState(false)

  const photos = useSelector(selectAllPhotos)

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
          src={`/${photos[props.i].src}`} 
          alt={props.img} 
          onClick={() => toggleModal()}
        />
      </li>
      {
        isOpen && 
        <PhotoModal 
          toggleModal={toggleModal}
          i={props.i}
          category={props.category}
          year={props.year}
        />
      }
    </>
  )
}

export default Photo