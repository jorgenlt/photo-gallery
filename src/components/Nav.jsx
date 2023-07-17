import { useDispatch, useSelector } from 'react-redux'
import { toggleDarkMode, updateFilterQuery } from '../features/photos/photosSlice'
import Dropdown from './Dropdown'
import NavMobile from './NavMobile'

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
        <div className='nav--desktop'>
          <ul>
            <li
              onClick={() => dispatch(updateFilterQuery(''))}
            >
              all</li>
            <Dropdown 
              title='norway'
              darkMode={darkMode}
              links={[
                {
                  name: 'all',
                  onClick: () => dispatch(updateFilterQuery('norway'))

                },
                {
                  name: 'oslo',
                  onClick: () => dispatch(updateFilterQuery('oslo'))

                },
                {
                  name: 'lofoten',
                  onClick: () => dispatch(updateFilterQuery('lofoten'))

                },
                {
                  name: 'vesterålen',
                  onClick: () => dispatch(updateFilterQuery('vesteraalen'))

                },
                {
                  name: 'moss',
                  onClick: () => dispatch(updateFilterQuery('moss'))

                }
              ]}
            />
            <Dropdown 
              title='europe'
              darkMode={darkMode}
              links={[
                {
                  name: 'all',
                  onClick: () => dispatch(updateFilterQuery('europe'))
                },
                {
                  name: 'austria',
                  onClick: () => dispatch(updateFilterQuery('austria'))

                },
                {
                  name: 'belgium',
                  onClick: () => dispatch(updateFilterQuery('belgium'))

                },
                {
                  name: 'czech republic',
                  onClick: () => dispatch(updateFilterQuery('czech-republic'))

                },
                {
                  name: 'finland',
                  onClick: () => dispatch(updateFilterQuery('finland'))

                },
                {
                  name: 'france',
                  onClick: () => dispatch(updateFilterQuery('france'))

                },
                {
                  name: 'germany',
                  onClick: () => dispatch(updateFilterQuery('germany'))

                },
                {
                  name: 'hungary',
                  onClick: () => dispatch(updateFilterQuery('hungary'))

                },
                {
                  name: 'malta',
                  onClick: () => dispatch(updateFilterQuery('malta'))

                },
                {
                  name: 'netherlands',
                  onClick: () => dispatch(updateFilterQuery('netherlands'))

                }
              ]}
            />
            <Dropdown 
              title='south east asia'
              darkMode={darkMode}
              links={[
                {
                  name: 'all',
                  onClick: () => dispatch(updateFilterQuery('south-east-asia'))
                },
                {
                  name: 'indonesia',
                  onClick: () => dispatch(updateFilterQuery('indonesia'))

                },
                {
                  name: 'malaysia',
                  onClick: () => dispatch(updateFilterQuery('malaysia'))

                },
                {
                  name: 'philippines',
                  onClick: () => dispatch(updateFilterQuery('philippines'))

                },
                {
                  name: 'thailand',
                  onClick: () => dispatch(updateFilterQuery('thailand'))

                }
              ]}
            />
            <Dropdown 
              title='east asia'
              darkMode={darkMode}
              links={[
                {
                  name: 'all',
                  onClick: () => dispatch(updateFilterQuery('east-asia'))
                },
                {
                  name: 'south korea',
                  onClick: () => dispatch(updateFilterQuery('south-korea'))

                },
                {
                  name: 'taiwan',
                  onClick: () => dispatch(updateFilterQuery('taiwan'))

                }
              ]}
            />
            <li
              onClick={() => dispatch(updateFilterQuery('usa'))}
            >
              usa
            </li>
            <li>|</li>
            <li
              onClick={() => dispatch(toggleDarkMode())}
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </li>
          </ul>
        </div>
        
        {/* mobile navigation menu */}
        <div className='nav--mobile'>
          <NavMobile />
        </div>
      </nav>
    </>
  )
}

export default Nav