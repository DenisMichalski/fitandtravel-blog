import profilePic from '../assets/profil.jpg';

function About() {
  return (
    <section className='max-w-2xl mx-auto py-16 px-6 text-center'>
      <h2 className='text-3xl font-bold mb-4'>Über diesen Blog</h2>
      <p className='mb-6 text-lg'>
        Hallo, ich bin Denis – Fitness-Fan & Reisejunkie. <br />
        Dieser Blog inspiriert dich, aktiv zu bleiben, egal wo du gerade bist!
      </p>
      <img
        src={profilePic}
        alt='Profil'
        className='mx-auto rounded-full w-42 h-52 object-cover shadow-lg mb-4'
      />
      <p>
        Folge mir auch auf{' '}
        <a
          href='https://www.instagram.com/fitandtravelblog/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-pink-500 font-bold underline hover:text-yellow-500'
        >
          Instagram
        </a>
        !
      </p>
    </section>
  );
}

export default About;
