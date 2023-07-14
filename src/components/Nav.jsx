import { useDispatch, useSelector } from 'react-redux'
import { toggleDarkMode, updateFilterQuery } from '../features/photos/photosSlice'

const Nav = () => {
  const dispatch = useDispatch()
  const darkMode = useSelector(state => state.photos.darkMode)

  return (
    <>
      <nav>
        <header>
          <h1>Photo Gallery</h1>
          <h2>by jørgen larsen tjønnteig</h2>
        </header>
        <div>
          <ul>
            <li
              onClick={() => dispatch(updateFilterQuery(''))}
            >
              all</li>
            <li
              onClick={() => dispatch(updateFilterQuery('nature'))}
            >
              nature
            </li>
            <li
              onClick={() => dispatch(updateFilterQuery('animals'))}
            >animals</li>
            <li>norway</li>
            <li>asia</li>
            <li>|</li>
            <li
              onClick={() => dispatch(toggleDarkMode())}
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav