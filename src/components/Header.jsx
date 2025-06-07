import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

function Header() {
  return (
    <header className="bg-slate-900 dark:bg-gray-100 text-white dark:text-slate-900 px-6 py-4 flex justify-between items-center shadow-lg transition-colors">
      <h1 className="text-2xl font-extrabold tracking-tight">
        <Link
          to="/"
          className="hover:text-blue-300 dark:hover:text-pink-600 transition-colors"
        >
          Fit &amp; Travel
        </Link>
      </h1>
      <nav className="space-x-6 text-lg font-semibold flex items-center">
        <Link
          to="/"
          className="hover:text-blue-300 dark:hover:text-pink-600 transition-colors"
        >
          Home
        </Link>
        <Link
          to="/"
          className="hover:text-blue-300 dark:hover:text-pink-600 transition-colors"
        >
          Blog
        </Link>
        <Link
          to="/"
          className="hover:text-blue-300 dark:hover:text-pink-600 transition-colors"
        >
          Über
        </Link>
        <DarkModeToggle />
      </nav>
    </header>
  );
}

export default Header;
