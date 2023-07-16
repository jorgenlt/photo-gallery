import Photo from './Photo'
import { useSelector } from 'react-redux'
import { selectAllPhotos } from './photosSlice';

const Photos = () => {
  const photos = useSelector(selectAllPhotos)
  const filterQuery = useSelector(state => state.photos.filterQuery)
  const filteredPhotos = useSelector(state => state.photos.filteredPhotos)

  const photoElements = (photos) =>{
    return (
      photos.map((photo, i) => (
        <Photo
          key={photo.id}
          src={photo.src}
          category={photo.category}
          i={i}
        />
      ))
    )
  }

  return(
    <>
      <ul className="photos">
        {filterQuery ? photoElements(filteredPhotos) : photoElements(photos)}
        <li></li>
      </ul>
    </>
  )
}

export default Photos