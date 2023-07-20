import { useState, useEffect } from 'react'
import { onAuthStateChanged, getAuth, signOut } from 'firebase/auth'

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
  }, [])
  
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('Signed out successfully.');
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <div className='auth-details'>
      {authUser ? (
        <>
          <p>{`Signed in as ${authUser.email}.`}</p>
          <div>
            <button
            onClick={userSignOut}
            >
              Sign Out
            </button>
          </div>
        </>
      ) : (
        <>
          <p>Signed out.</p>
        </>
      )}
    </div>
  )
}

export default AuthDetails