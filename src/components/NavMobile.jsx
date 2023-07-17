import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect, useRef } from 'react'
import { toggleDarkMode, updateFilterQuery } from '../features/photos/photosSlice'
import { 
  HiXMark, 
  HiOutlineBars3,
  HiChevronDown,
  HiChevronRight
} from "react-icons/hi2";
import { CSSTransition } from 'react-transition-group'

const NavMobile = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector(state => state.photos.darkMode);

  const [isOpen, setIsOpen] = useState(false);
  const [showNorway, setShowNorway] = useState(false)
  const [showEurope, setShowEurope] = useState(false)
  const [showSouthEastAsia, setShowSouthEastAsia] = useState(false)
  const [showEastAsia, setShowEastAsia] = useState(false)

  // Function to toggle the mobile navigation menu
  const toggleNav = () => {
    setIsOpen(prev => !prev)
  }

  const nodeRef = useRef(null);

  // Function to handle sub-menu selection
  const handleSub = query => {
    dispatch(updateFilterQuery(query));
    toggleNav();
  }

  // Function to handle click outside of the mobile 
  // navigation menu to close it
  const clickOutside = e => {
    if (e.target.className === "nav--mobile-overlay") {
      toggleNav();
    }
  };

  // Add or remove 'overflow-hidden' class on the body 
  // based on the state of the mobile navigation menu
  useEffect(() => {
    const body = document.body;

    if(isOpen) {
      body.classList.add('overflow-hidden');
    } else {
      body.classList.remove('overflow-hidden');
    }
  }, [isOpen]);

  return (
    <>
      {/* open menu */}
      <div 
        className="nav--mobile-open"
        onClick={() => toggleNav()}
      >
        <HiOutlineBars3 />
      </div>

      {/* overlay on main page while mobile nav is open */}
      {isOpen && <div className='nav--mobile-overlay' onClick={e => clickOutside(e)} ></div>}

      <CSSTransition
        in={isOpen}
        nodeRef={nodeRef}
        timeout={200}
        classNames={'nav--mobile'}
        unmountOnExit
      >
        <div 
          className={`nav--mobile ${darkMode ? 'dark-mode' : 'light-mode'}`}
          ref={nodeRef}
        >
          {/* close menu */}
          <div 
            className="nav--mobile-close" 
            onClick={() => toggleNav()}
          >
            <HiXMark />
          </div>
          {/* menu content */}
          <ul>
            <li onClick={() => handleSub('')} >all</li>
            
            {/* norway */}
            <li 
              onClick={() => setShowNorway(prev => !prev)} 
            >
              norway {showNorway ? <HiChevronDown/> : <HiChevronRight/>}
            </li>
            { 
              showNorway &&
              <>
                <li 
                  className='nav--mobile-sub'
                  onClick={() => handleSub('norway')}
                >
                  all
                </li>
                <li 
                  className='nav--mobile-sub'
                  onClick={() => handleSub('oslo')}
                >
                  oslo
                </li>
                <li 
                  className='nav--mobile-sub'
                  onClick={() => handleSub('lofoten')}
                >
                  lofoten
                </li>
                <li 
                  className='nav--mobile-sub'
                  onClick={() => handleSub('vesteraalen')}
                >
                  vesterålen
                </li>
                <li 
                  className='nav--mobile-sub'
                  onClick={() => handleSub('moss')}
                >
                  moss
                </li>
              </>
            }
            
            {/* europe */}
            <li 
              onClick={() => setShowEurope(prev => !prev)} 
            >
              europe {showEurope ? <HiChevronDown/> : <HiChevronRight/>}
            </li>
            {
              showEurope &&
              <>
                <li 
                  className='nav--mobile-sub'
                  onClick={() => handleSub('europe')}
                >
                  all
                </li>
                <li 
                  className='nav--mobile-sub'
                  onClick={() => handleSub('austria')}
                >
                  austria
                </li>
                <li 
                  className='nav--mobile-sub'
                  onClick={() => handleSub('belgium')}
                >
                  belgium
                </li>
                <li 
                  className='nav--mobile-sub'
                  onClick={() => handleSub('czech-republic')}
                >
                  czech republic
                </li>
                <li 
                  className='nav--mobile-sub'
                  onClick={() => handleSub('finland')}
                >
                  finland
                </li>
                <li 
                  className='nav--mobile-sub'
                  onClick={() => handleSub('france')}
                >
                  france
                </li>
                <li 
                  className='nav--mobile-sub'
                  onClick={() => handleSub('germany')}
                >
                  germany
                </li>
                <li 
                  className='nav--mobile-sub'
                  onClick={() => handleSub('hungary')}
                >
                  hungary
                </li>
                <li 
                  className='nav--mobile-sub'
                  onClick={() => handleSub('malta')}
                >
                  malta
                </li>
                <li 
                  className='nav--mobile-sub'
                  onClick={() => handleSub('netherlands')}
                >
                  netherlands
                </li>
              </>
            }

            {/* south east asia */}
            <li 
              onClick={() => setShowSouthEastAsia(prev => !prev)} 
            >
              south east asia {showSouthEastAsia ? <HiChevronDown/> : <HiChevronRight/>}
            </li>
            {
              showSouthEastAsia &&
              <>
                <li 
                  className='nav--mobile-sub'
                  onClick={() => handleSub('south-east-asia')}
                >
                  all
                </li>
                <li 
                  className='nav--mobile-sub'
                  onClick={() => handleSub('indonesia')}
                >
                  indonesia
                </li>
                <li 
                  className='nav--mobile-sub'
                  onClick={() => handleSub('malaysia')}
                >
                  malaysia
                </li>
                <li 
                  className='nav--mobile-sub'
                  onClick={() => handleSub('philippines')}
                >
                  philippines
                </li>
                <li 
                  className='nav--mobile-sub'
                  onClick={() => handleSub('thailand')}
                >
                  thailand
                </li>
              </>
            }
            
            {/* east asia */}
            <li 
              onClick={() => setShowEastAsia(prev => !prev)} 
            >
              east asia {showEastAsia ? <HiChevronDown/> : <HiChevronRight/>}
            </li>
            {
              showEastAsia &&
              <>
                <li 
                  className='nav--mobile-sub'
                  onClick={() => handleSub('east-asia')}
                >
                  all
                </li>
                <li 
                  className='nav--mobile-sub'
                  onClick={() => handleSub('south-korea')}
                >
                  south korea
                </li>
                <li 
                  className='nav--mobile-sub'
                  onClick={() => handleSub('taiwan')}
                >
                  taiwan
                </li>
              </>
            }
            
            <li onClick={() => handleSub('usa')} >usa</li>
            <li></li>
            <li
              onClick={() => {
                dispatch(toggleDarkMode());
                toggleNav();
              }}
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </li>
          </ul>
        </div>
      </CSSTransition>
    </>
  )
}

export default NavMobile