import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect, useRef } from 'react'
import { HiXMark, HiOutlineBars3 } from "react-icons/hi2";
import { CSSTransition } from 'react-transition-group'

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const darkMode = useSelector(state => state.photos.darkMode);

  const toggleNav = () => {
    setIsOpen(prev => !prev)
  }

  const nodeRef = useRef(null)

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
          <span><HiOutlineBars3 /></span>
      </div>


        <CSSTransition
          in={isOpen}
          nodeRef={nodeRef}
          timeout={100}
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
                <span><HiXMark /></span>
            </div>
            {/* menu content */}
            <ul>
              <li>link</li>
            </ul>
          </div>
      </CSSTransition>
      
    </>
  )
}

export default NavMobile