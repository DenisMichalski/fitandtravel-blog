import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='bg-slate-900 text-white text-center py-8 mt-16 shadow-lg'>
      <div className='flex flex-col md:flex-row justify-center items-center gap-6'>
        <div>
          © 2025 Fit & Travel Blog &nbsp;|&nbsp;
          by <span className="font-bold text-pink-500">Denis Michalski</span>
          &nbsp;•&nbsp;
          <a
            href="https://www.instagram.com/fitandtravelblog/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-yellow-400"
          >
            Instagram
          </a>
        </div>

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
