function Hero() {
  return (
    <section className='flex flex-col items-center justify-center py-16 px-4 text-center bg-gradient-to-br from-blue-100 to-pink-100 min-h-[60vh]'>
      <img
        src='https://images.pexels.com/photos/2780762/pexels-photo-2780762.jpeg?auto=compress&cs=tinysrgb&h=600'
        alt='Aktiv auf Reisen'
        className='w-full max-w-2xl rounded-3xl shadow-xl mb-8 object-cover'
      />
      <h2 className='text-3xl md:text-5xl font-extrabold mb-4'>
        Entdecke Fitness & Abenteuer auf Reisen!
      </h2>
      <p className='max-w-xl mb-6 text-grey-700 text-lg'>
        Tipps, Motivation und praktische Gadgets für alle, die unterwegs aktiv bleiben wollen.
      </p>
      <a
        href="https://linktr.ee/fitandtravel.ai"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 px-8 py-4 text-lg bg-gradient-to-r from-pink-500 to-yellow-400 text-white rounded-xl font-semibold shadow-lg hover:from-pink-600 hover:to-yellow-500 transition flex items-center gap-2"
      >
        {/* Optional: ein Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
        Jetzt entdecken ⇾
      </a>
    </section>
  );
}

export default Hero;
