
function Hero() {
  return (
    <section
      className='
      flex flex-col items-center justify-center py-16 px-4 text-center
      bg-gradient-to-br from-blue-100 to-pink-100
      dark:from-slate-900 dark:to-gray-800
      min-h-[60vh] transition-colors
    '
    >
      <img
        src='https://images.pexels.com/photos/2780762/pexels-photo-2780762.jpeg?auto=compress&cs=tinysrgb&h=600'
        alt='Aktiv auf Reisen'
        className='w-full max-w-2xl rounded-3xl shadow-xl mb-8 object-cover'
      />
      <h2 className='text-3xl md:text-5xl font-extrabold mb-4 text-slate-900 dark:text-white'>
        Entdecke Fitness & Abenteuer auf Reisen!
      </h2>
      <p className='max-w-xl mb-6 text-gray-700 dark:text-gray-200 text-lg'>
        Tipps, Motivation und praktische Gadgets für alle, die unterwegs aktiv
        bleiben wollen.
      </p>
      <button className='mt-2 px-8 py-4 text-lg bg-slate-900 dark:bg-blue-800 text-white rounded-xl font-semibold shadow-lg hover:bg-blue-700 dark:hover:bg-pink-600 transition'>
        Jetzt entdecken
      </button>
    </section>
  );
}

export default Hero;
