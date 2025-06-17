// src/components/Impressum.jsx

function Impressum() {
  return (
    <section className="max-w-2xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold mb-4">Impressum</h2>
      <p className="mb-4">
        <strong>Angaben gemäß § 5 TMG</strong><br />
        Denis Michalski<br />
        Musterstraße 1<br />
        12345 Musterstadt<br />
        Deutschland
      </p>
      <p className="mb-4">
        <strong>Kontakt</strong><br />
        E-Mail: <a href="mailto:fitandtravel.ai@gmail.com" className="underline text-blue-600 hover:text-pink-500">dein@email.de</a>
      </p>
      <p className="mb-4">
        <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</strong><br />
        Denis Michalski<br />
        (Adresse wie oben)
      </p>
      <p className="text-sm text-gray-400 mt-8">
        Quelle: <a href="https://www.e-recht24.de" className="underline">e-recht24.de</a>
      </p>
    </section>
  );
}

export default Impressum;
