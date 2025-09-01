function Impressum() {
  return (
    <section className="max-w-2xl mx-auto py-16 px-6 bg-white dark:bg-slate-900 rounded-3xl shadow-xl">
      {/* React 19: wird automatisch in <head> gehoben */}
      <title>Impressum | Fit &amp; Travel Blog</title>
      <meta name="description" content="Impressum und Anbieterkennzeichnung für den Fit & Travel Blog." />
      <meta name="robots" content="index,follow" />

      <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Impressum</h2>

      <address className="not-italic mb-4 text-slate-900 dark:text-gray-300">
        <strong>Angaben gemäß § 5 TMG</strong>
        <br />
        Denis Michalski
        <br />
        Postfach 31 17 35
        <br />
        70477 Stuttgart
        <br />
        Deutschland
      </address>

      <p className="mb-4 text-slate-900 dark:text-gray-300">
        <strong>Kontakt</strong>
        <br />
        E-Mail:{" "}
        <a
          href="mailto:fitandtravel.ai@gmail.com"
          className="underline text-blue-600 dark:text-pink-400 hover:text-pink-500"
        >
          fitandtravel.ai@gmail.com
        </a>
      </p>

      <p className="mb-4 text-slate-900 dark:text-gray-300">
        <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</strong>
        <br />
        Denis Michalski
        <br />
        (Adresse wie oben)
      </p>

      <p className="text-sm text-gray-400 dark:text-gray-500 mt-8">
        Quelle:{" "}
        <a href="https://www.e-recht24.de" className="underline">
          e-recht24.de
        </a>
      </p>

      {/* Sichtbarer Deploy-Marker */}
      <small className="block mt-4 text-xs text-gray-500" data-rev="IMP-2025-09-01">
        Impressum aktualisiert
      </small>
    </section>
  );
}

export default Impressum;

