import { useId } from 'react';
import { Link } from 'react-router-dom';
import { useUser  } from '../../context/UserContext';

export default function Navbar() {
  const inputId = useId();
  const { isLoggedIn, login, logout } = useUser ();
  
  return (
    <nav className='grid grid-cols-3 justify-between px-24 py-4 bg-black items-center'>
        <ul>
          <li className='flex items-center justify-center'>
            <Link to='/' className='text-white hover:text-green-500 active:text-green-300'>Home</Link>
          </li>
        </ul>
        <ul className='flex justify-center items-center'>
          <li className='w-full'>
            <input type="text" className='text-black active:text-black focus:text-black px-4 py-2 w-full' name="search" id={inputId} placeholder='Search product...' />
          </li>
        </ul>
        {!isLoggedIn ? (
            <ul className='flex gap-2 justify-end'>
              <li className='text-white hover:text-green-500 active:text-green-300'>
                <button onClick={login}>Sign in</button>
              </li>
              <li>
                <Link className='text-white hover:text-green-500 active:text-green-300' to="/signup">Sign up</Link>
              </li>
            </ul>
        ) : (
            <ul className='flex justify-end gap-2'>
              <li>
                <Link className='text-white hover:text-green-500 active:text-green-300' to="/cart">Cart</Link>
              </li>
              <li>
                <Link to='/orders' className='text-white hover:text-green-500 active:text-green-300'>My Orders</Link>
              </li>
              <li>
                <button onClick={logout} className='text-white hover:text-green-500 active:text-green-300'>Sign out</button>
              </li>
            </ul>
        )}
    </nav>
  );
}