import { useState } from 'react'
import SignIn from './auth/SignIn'
import AuthDetails from './auth/AuthDetails'


const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <footer>
        <p>© 2023 Jørgen Larsen Tjønnteig</p>
        <p className='open-sign-in' onClick={() => setIsOpen(prev => !prev)}>sign in</p>
        {
          isOpen &&
          <>
            <SignIn />
            <AuthDetails />
          </>
        }
      </footer>
    </>
  )
}

export default Footer