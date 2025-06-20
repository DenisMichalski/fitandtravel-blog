import { Helmet } from 'react-helmet-async';

function Kontakt() {
  return (
    <>
      <Helmet>
        <title>Kontakt | Fit &amp; Travel</title>
        <meta
          name='description'
          content='Schreib mir eine E-Mail oder melde dich via Instagram! Feedback, Fragen und Kooperationen sind Herzlich willkommen.'
        />
        <meta
          property='og:title'
          content='Kontakt | Fit &amp; Travel'
        />
        <meta
          property='og:description'
          content='Schreib mir eine E-Mail oder melde dich via Instagram! Feedback, Fragen und Kooperationen sind herzlich willkommen.'
        />
        <meta
          property='og:image'
          content='https://images.pexels.com/photos/2780762/pexels-photo-2780762.jpeg?auto=compress&cs=tinysrgb&h=600" '
        />
      </Helmet>
      <section className='max-w-2xl mx-auto py-16 px-6 text-center bg-white dark:bg-slate-900 rounded-3xl shadow-lg'>
        <h2 className='text-3xl font-bold mb-4 text-slate-900 dark:text-white'>
          Kontakt
        </h2>
        <p className='mb-6 text-lg text-slate-800 dark:text-gray-300'>
          Du hast Fragen, Feedback oder möchtest zusammenarbeiten?
          <br />
          Schreib mir gern eine E-Mail – ich antworte schnell!
        </p>
        <a
          href='mailto:fitandtravel.ai@gmail.com'
          className='inline-block px-6 py-3 bg-gradient-to-r from-pink-500 to-yellow-400 text-white text-lg font-bold rounded-xl shadow-lg hover:from-pink-600 hover:to-yellow-500 transition'
        >
          {' '}
          E-Mail schreiben
        </a>
        <p className='mt-8 text-slate-800 dark:text-gray-300'>
          Oder Schau bei{' '}
          <a
            href='https://www.instagram.com/fitandtravelblog/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-pink-500 font-bold underline hover:text-yellow-400 transition'
          >
            Instagram
          </a>{' '}
          vorbei!
        </p>
      </section>
    </>
  );
}

export default Kontakt;
