import { HiXMark, HiOutlineBars3 } from "react-icons/hi2";

const NavMobile = () => {
  return (
    <>
      {/* open menu */}
      <div className="nav--mobile-open">
          <span><HiOutlineBars3 /></span>
      </div>

      <div className='nav--mobile-links'>
          {/* close menu */}
          <div className="nav--mobile-close" data-pushbar-close>
              <span><HiXMark /></span>
          </div>
          {/* menu content */}
          <ul>
            <li>link</li>
          </ul>
      </div>
    </>
  )
}

export default NavMobile