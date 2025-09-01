import { useState } from 'react';

function Kontakt() {
  const [success, setSuccess] = useState(false);

  return (
    <>
      <title>Kontakt | Fit &amp; Travel</title>
      <meta
        name='description'
        content='Schreib mir eine Nachricht.'
      />

      <section className='max-w-2xl mx-auto py-16 px-6 text-center bg-white dark:bg-slate-900 rounded-3xl shadow-lg'>
        <h2 className='text-3xl font-bold mb-4 text-slate-900 dark:text-white'>
          Kontakt
        </h2>
        <p className='mb-6 text-lg text-slate-800 dark:text-gray-300'>
          Du hast Fragen, Feedback oder möchtest zusammenarbeiten?
          <br />
          Schreib mir hier direkt eine Nachricht!
        </p>
        {success ? (
          <div className='text-green-600 font-bold my-8'>
            Danke, deine Nachricht wurde gesendet!
          </div>
        ) : (
          <form
            action='https://formspree.io/f/xvgrbbwb'
            method='POST'
            className='space-y-6'
          >
            <input
              type='text'
              name='name'
              placeholder='Dein Name'
              required
              className='w-full px-4 py-2 rounded-xl border border-gray-300 dark:bg-slate-800 dark:text-white'
            />
            <input
              type='email'
              name='email'
              placeholder='Deine E-Mail'
              required
              className='w-full px-4 py-2 rounded-xl border border-gray-300 dark:bg-slate-800 dark:text-white'
            />
            <textarea
              name='message'
              placeholder='Deine Nachricht'
              required
              rows={5}
              className='w-full px-4 py-2 rounded-xl border border-gray-300 dark:bg-slate-800 dark:text-white'
            />
            <button
              type='submit'
              className='px-6 py-3 bg-gradient-to-r from-pink-500 to-yellow-400 text-white text-lg font-bold rounded-xl shadow-lg hover:from-pink-600 hover:to-yellow-500 transition'
            >
              Nachricht senden
            </button>
          </form>
        )}
        <p className='mt-8 text-slate-800 dark:text-gray-300'>
          Oder schau bei{' '}
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
