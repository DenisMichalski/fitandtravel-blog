import { buildLinktreeUrl, trackLinktreeClick } from "../utils/linktree";

function Hero() {
  return (
    <>
      <title>Fit &amp; Travel Blog – Start</title>
      <meta
        name="description"
        content="Fitness auf Reisen: Workouts, Routinen & Tipps für unterwegs."
      />

      <section
        className="flex flex-col items-center justify-center py-16 px-4 text-center
  bg-gradient-to-br from-blue-100 to-pink-100 dark:from-slate-800 dark:to-slate-900 min-h-[60vh]"
      >
        <img
          src="https://images.pexels.com/photos/2780762/pexels-photo-2780762.jpeg?auto=compress&cs=tinysrgb&h=600"
          alt="Aktiv auf Reisen"
          className="w-full max-w-2xl rounded-3xl shadow-xl mb-8 object-cover"
        />
        <h2 className="text-slate-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-4">
          Entdecke Fitness & Abenteuer auf Reisen!
        </h2>
        <p className=" text-slate-900 dark:text-white max-w-xl mb-6 text-grey-700 text-lg">
          Tipps, Motivation und praktische Gadgets für alle, die unterwegs aktiv
          bleiben wollen.
        </p>
        <a
          href={buildLinktreeUrl({
            source: "homepage",
            content: "hero_button",
          })}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackLinktreeClick({
              location: "hero_button",
            })
          }
        >
          Jetzt entdecken ⇾
        </a>
      </section>
    </>
  );
}

export default Hero;
