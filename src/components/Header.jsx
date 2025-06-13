// src/components/Header.jsx
import { Link, useLocation } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';


function Header() {
  const { pathname } = useLocation();

  // Für aktiven Link eine kleine visuelle Hervorhebung:
  const linkClass = (path) =>
    `hover:text-blue-300 transition-colors ${
      pathname === path ? 'underline font-bold' : ''
    }`;
  
  return (
    <header className='bg-slate-900 text-white px-6 py-4 flex justify-between items-center shadow-lg'>
      <h1 className='text-2xl font-extrabold tracking-tight'>
        <Link
          to='/'
          className='hover:text-blue-300 transition-colors'
        >
          Fit &amp; Travel
        </Link>
      </h1>
      <nav className='space-x-6 text-lg font-semibold flex items-center'>
        <Link
          to='/'
          className={linkClass('/')}
        >
          Home
        </Link>
        <Link
          to='/blog'
          className={linkClass('/blog')}
        >
          Blog
        </Link>
        <Link
          to='/about'
          className={linkClass('/about')}
        >
          Über
        </Link>
        <DarkModeToggle />
      </nav>
    </header>
  );
}

export default Header;
