import { Link, useLocation } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import { useState } from 'react';

function Header() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = (path) =>
    `block px-4 py-2 md:inline hover:text-blue-300 transition-colors ${
      pathname === path ? 'underline font-bold' : ''
    }`;

  return (
    <header className="bg-slate-900 text-white px-4 py-4 flex items-center justify-between shadow-lg relative">
      {/* Logo */}
      <h1 className="text-xl font-extrabold tracking-tight">
        <Link to="/" className="hover:text-blue-300 transition-colors">
          Fit &amp; Travel
        </Link>
      </h1>

      {/* Desktop-Navigation */}
      <nav className="hidden md:flex space-x-6 text-lg font-semibold items-center">
        <Link to="/" className={linkClass('/')}>Home</Link>
        <Link to="/blog" className={linkClass('/blog')}>Blog</Link>
        <Link to="/about" className={linkClass('/about')}>Über</Link>
        <Link to="/kontakt" className={linkClass('/kontakt')}>Kontakt</Link>
        <DarkModeToggle />
      </nav>

      {/* Mobile-Menü Button */}
      <button
        className="md:hidden ml-2"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Menü öffnen/schließen"
      >
        {/* Hamburger-Icon */}
        <svg width="28" height="28" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h20M4 16h20" />
        </svg>
      </button>

      {/* Mobile-Menü */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-slate-900 shadow-lg flex flex-col items-center z-50 py-4 space-y-2 md:hidden">
          <Link to="/" className={linkClass('/')} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/blog" className={linkClass('/blog')} onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link to="/about" className={linkClass('/about')} onClick={() => setMenuOpen(false)}>Über</Link>
          <Link to="/kontakt" className={linkClass('/kontakt')} onClick={() => setMenuOpen(false)}>Kontakt</Link>
          <DarkModeToggle />
        </div>
      )}
    </header>
  );
}

export default Header;

