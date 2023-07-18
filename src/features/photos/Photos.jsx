import { useSelector } from 'react-redux'
import { selectAllPhotos } from './photosSlice'
import { Oval } from 'react-loader-spinner'
import Photo from './Photo'

const Photos = () => {
  const photos = useSelector(selectAllPhotos)
  const {
    filterQuery,
    filteredPhotos,
    loading
  } = useSelector(state => state.photos)

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
        {
          loading &&
          <Oval
            height={80}
            width={80}
            color="#101319"
            wrapperStyle={{}}
            wrapperClass="loader"
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="#CED2DF"
            strokeWidth={1}
            strokeWidthSecondary={1}
          />
        }
        {filterQuery ? photoElements(filteredPhotos) : photoElements(photos)}
        <li></li>
      </ul>
    </>
  )
}

export default Photos