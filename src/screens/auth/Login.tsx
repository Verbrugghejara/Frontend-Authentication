import { Link } from 'react-router-dom'
import { app} from '../../utils/firebase'
import {LogIn} from 'lucide-react'

export default () => {
    console.log(app)
  return (
    <div className='flex min-h-screen items-center'>
      <div className='mx-auto w-full max-w-md px-6'>
        <form>
          <header>
            <div>
              <LogIn />
            </div>
            <h2>Sign in</h2>
          </header>
          <div>
            <label htmlFor="email"></label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="password"></label>
            <input type="password" name="password" id="password" />
          </div>
          <div>
            <label htmlFor="remember"></label>
            <input type="checkbox" name="remember" id="remember " />
          </div>
          <div>
            <button>Sign in</button>
            <Link to="/">Forgot password?</Link>
          </div>
          <div>
            <p>
              Don't have an account?
              <Link to="/register">Create an account.</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
