import { useDispatch, useSelector } from 'react-redux'
import { toggleDarkMode, updateFilterQuery } from '../features/photos/photosSlice'
import Dropdown from './Dropdown'

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
            <Dropdown 
              title='norway'
              darkMode={darkMode}
              links={[
                {
                  name: 'all',
                  onClick: () => dispatch(updateFilterQuery(''))

                },
                {
                  name: 'oslo',
                  onClick: () => dispatch(updateFilterQuery(''))

                },
                {
                  name: 'lofoten',
                  onClick: () => dispatch(updateFilterQuery(''))

                },
                {
                  name: 'vesterålen',
                  onClick: () => dispatch(updateFilterQuery(''))

                }
              ]}
            />
            <Dropdown 
              title='south east asia'
              darkMode={darkMode}
              links={[
                {
                  name: 'all',
                  onClick: () => dispatch(updateFilterQuery(''))
                },
                {
                  name: 'thailand',
                  onClick: () => dispatch(updateFilterQuery(''))

                },
                {
                  name: 'indonesia',
                  onClick: () => dispatch(updateFilterQuery(''))

                },
                {
                  name: 'vietnam',
                  onClick: () => dispatch(updateFilterQuery(''))

                },
                {
                  name: 'philipphines',
                  onClick: () => dispatch(updateFilterQuery(''))

                }
              ]}
            />
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