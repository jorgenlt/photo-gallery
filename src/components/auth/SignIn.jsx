import { useState } from 'react'
import { useSelector } from 'react-redux'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const { darkMode } = useSelector(state => state.photos)
  
  const signIn = (e, email, password) => {
    e.preventDefault();

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in 
        const user = userCredential.user;
        console.log(`Signed in as ${user.email}`);
        setEmail('');
        setPassword('');
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`${errorCode}: ${errorMessage}`);
      })
  }
  

  return (
    <div className='sign-in'>
      <form onSubmit={signIn} className={darkMode ? 'dark-mode' : 'light-mode'}>
        <input 
          type="email" 
          name="" 
          placeholder='E-mail'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input 
          type="password" 
          name="" 
          placeholder='Password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <div>
          <button
            type='button'
            className='square_btn'
            onClick={e => signIn(e, email, password)}
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignIn
