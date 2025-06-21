import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='bg-slate-900 text-white text-center py-8 mt-16 shadow-lg'>
      <div className='flex flex-col md:flex-row justify-center items-center gap-6'>
        <span>&copy; {new Date().getFullYear()} Fit &amp; Travel Blog · Ein Projekt von Denis Michalski</span>
        
        <Link
          to='/impressum'
          className='hover:underline hover:text-blue-300 transition'
        >
          Impressum
        </Link>
        <Link
          to='/datenschutz'
          className='hover:underline hover:text-blue-300 transition'
        >
          Datenschutz
        </Link>

        <Link
          to='/kontakt'
          className='hover:underline hover:text-blue-300 transition'
        >
          Kontakt
        </Link>
      </div>
      <Link>
        <div className='mt-4 text-sm text-gray-400'>
          Powered by React &amp; Tailwind CSS
        </div>
      </Link>
    </footer>
  );
}

export default Footer;
