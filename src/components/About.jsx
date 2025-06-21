import { Helmet } from 'react-helmet-async';
import profilePic from '../assets/profil.jpg';

function About() {
  return (
    <>
      <Helmet>
        <title>Über mich | Fit &amp; Travel</title>
        <meta
          name='description'
          content='Erfahre mehr über Denis und diesen Blog: Fitness, Reisen und Motivation auf der ganzen Welt.'
        />
        <meta
          property='og:title'
          content='Über mich | Fit &amp; Travel'
        />
        <meta
          property='og:description'
          content='Erfahre mehr über Denis und diesen Blog: Fitness, Reisen und Motivation auf der ganzen Welt.'
        />
        <meta
          property='og:image'
          content='https://images.pexels.com/photos/2780762/pexels-photo-2780762.jpeg?auto=compress&cs=tinysrgb&h=600'
        />
      </Helmet>
      <section className='max-w-2xl mx-auto py-16 px-6 text-center bg-white dark:bg-slate-900 rounded-3xl shadow-lg'>
        <h2 className='text-3xl font-bold mb-4 text-slate-900 dark:text-white'>
          Über diesen Blog
        </h2>
        <p className='mb-6 text-lg text-slate-800 dark:text-gray-300'>
          Hallo, ich bin Denis – Fitness-Fan & Reisejunkie. <br />
          Dieser Blog inspiriert dich, aktiv zu bleiben, egal wo du gerade
          bist!
        </p>
        <img
          src={profilePic}
          alt='Profil'
          className='mx-auto rounded-full w-50 h-50 object-cover shadow-lg mb-4'
        />
        <p className='text-slate-800 dark:text-gray-300'>
          Folge mir auch auf{' '}
          <a
            href='https://www.instagram.com/fitandtravelblog/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-pink-500 font-bold underline hover:text-yellow-400 transition'
          >
            Instagram
          </a>
          !
        </p>
      </section>
    </>
  );
}

export default About;
