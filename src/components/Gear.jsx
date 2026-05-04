import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { trackOutboundClick, withUtm } from "../utils/outbound";
import AuthorBadge from "./AuthorBadge";

function TrustBox({ title, text }) {
  return (
    <div
      className="
    mb-5 rounded-2xl p-5
    bg-white border border-slate-200
    dark:bg-slate-800 dark:border-slate-700
  "
    >
      <div className="font-bold text-slate-900 dark:text-white">{title}</div>
      <div className="mt-2 text-slate-600 dark:text-slate-300 leading-relaxed">
        {text}
      </div>
    </div>
  );
}

const GEAR = [
  {
    category: "Fitness (Hotel & Unterwegs)",
    subtitle: "Leicht, kompakt, effektiv – perfekt für Reisen.",
    items: [
      {
        title: "Training überall ohne Geräte",
        description:
          "Ideal für Hotelzimmer, Strand oder Park — leicht & vielseitig.",
        href: "https://www.decathlon.de/p/fitness-band-trainingsband-3er-set-widerstand-5-6-7-kg-blau-bordeauxrot/305336/c113c88c381m8528803",
        merchant: "Decathlon",
        affiliate: false,
        badges: ["Hotel", "Ohne Gym", "Leicht"],
        featured: true,
      },
      {
        title: "Komfort & Hygiene beim Training unterwegs",
        description:
          "Trainiere überall sauber und bequem — vom Hotelzimmer bis zum Strand.",
        href: "https://www.amazon.de/gaiam-Exercise-Foldable-Workouts-Cranberry/dp/B07XYY3BHN?tag=fitandtrave0b-21",
        merchant: "Amazon",
        affiliate: true,
        badges: ["Mobility", "Sauber", "Reisetauglich"],
        featured: true,
      },
      {
        title: "Gesunde Routine auch auf Reisen",
        description:
          "Protein, Snacks oder Supplements immer griffbereit. Praktisch für unterwegs.",
        href: "https://www.amazon.de/Blender-Bottle-Shaker-Flasche-Pillen-Organizer-Proteinpulver/dp/B0CN17WPTX?tag=fitandtrave0b-21",
        merchant: "Amazon",
        affiliate: true,
        badges: ["Routine", "Praktisch", "Kompakt"],
      },
      {
        title: "5-Minuten Cardio überall",
        description:
          "Cardio-Training für unterwegs – leicht, effektiv, platzsparend.",
        href: "https://www.decathlon.de/p/geschwindigkeits-springseil-speed-rope-grun/311896/c219m8807817",
        merchant: "Decathlon",
        affiliate: false,
        badges: ["Cardio", "Ultraleicht", "Schnell"],
      },
    ],
  },
  {
    category: "Travel & Outdoor Essentials",
    subtitle: "Praktisch, robust, reisetauglich.",
    items: [
      {
        title: "Stressfrei packen & schneller finden",
        description: "Perfekt für Navigation, Fotos und lange Reisetage.",
        href: "https://www.amazon.de/-/en/TRIPPED-Travel-Gear-Compression-Organizer/dp/B0B92LC2CN?tag=fitandtrave0b-21",
        merchant: "Amazon",
        affiliate: true,
        badges: ["Organisation", "Stressfrei", "Travel Hack"],
      },
      {
        title: "Nie wieder leerer Akku unterwegs",
        description: "Must-have für Stadt, Strand, Wandern – Akku safe.",
        href: "https://www.shopwudn.com/products/fast-charging-4000-mah-ultra-slim-built-in-iphone-lightning-cable-micro-usb-plug-black",
        merchant: "ShopWudn",
        affiliate: false,
        badges: ["Must-have", "Kompakt", "Zuverlässig"],
      },
      {
        title: "Alles dabei – ohne schwer zu tragen",
        description:
          "Perfekt für Sightseeing, Strandtage und spontane Abenteuer.",
        href: "https://www.decathlon.vn/en-VN/p/hiking-backpack-30l-nh-arpenaz-100-quechua-8920035.html",
        merchant: "Decathlon",
        affiliate: false,
        badges: ["Leicht", "Outdoor", "Alltag"],
      },
      {
        title: "Handgepäck ready & auslaufsicher",
        description: "Spart Platz und verhindert Chaos im Kulturbeutel.",
        href: "https://www.amazon.de/-/en/Squeezable-Containers-Toiletries-Conditioner-Accessories/dp/B0CD432W5M?tag=fitandtrave0b-21",
        merchant: "Amazon",
        affiliate: true,
        badges: ["Handgepäck", "Auslaufsicher", "Platzsparend"],
      },
    ],
  },
];

const topPicks = GEAR.flatMap((section) =>
  section.items
    .filter((item) => item.featured)
    .map((item) => ({
      ...item,
      category: section.category,
    }))
);

function GearCard({ item, category, page }) {
  const utmContent = `${category
    .toLowerCase()
    .replace(/\s+/g, "_")}_${item.title.toLowerCase().replace(/\s+/g, "_")}`;

  const trackedHref = withUtm(item.href, {
    source: "blog",
    medium: "gear",
    campaign: "direct_links",
    content: utmContent,
  });

  return (
    <a
      href={trackedHref}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        trackOutboundClick({
          destination: trackedHref,
          label: item.title,
          location: page,
          page,
          merchant: item.merchant || "unknown",
          affiliate: item.affiliate || false,
        })
      }
      className="
  group block rounded-2xl p-5
  bg-white text-slate-900 border border-slate-200
  transition-all duration-200 ease-out
  hover:-translate-y-1 hover:shadow-2xl hover:border-pink-300/60
  dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700
  dark:hover:border-pink-300/30
"
    >
      {item.featured && (
        <div className="mb-3">
          <span
            className="
            inline-block text-xs font-bold px-3 py-1 rounded-full
            bg-pink-500 text-white shadow-sm
          "
          >
            ⭐ Top Empfehlung
          </span>
        </div>
      )}

      <div className="font-bold text-lg mb-2">{item.title}</div>

      <div className="flex flex-wrap gap-2 mb-3">
        {item.merchant && (
          <span className="text-[11px] font-semibold px-2 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300">
            {item.merchant}
          </span>
        )}

        {item.affiliate && (
          <span className="text-[11px] font-semibold px-2 py-1 rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-500/20 dark:text-yellow-300">
            Affiliate-Link
          </span>
        )}
      </div>

      {Array.isArray(item.badges) && item.badges.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {item.badges.map((badge) => (
            <span
              key={badge}
              className="
  text-[11px] font-semibold px-2 py-1 rounded-full
  bg-slate-100 text-slate-700
  dark:bg-slate-700 dark:text-slate-100
  group-hover:bg-slate-200 dark:group-hover:bg-slate-600
  transition-colors duration-200
"
            >
              {badge}
            </span>
          ))}
        </div>
      )}

      <div className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
        {item.description}
      </div>

      <div
        className="font-semibold text-blue-600 dark:text-blue-400
      group-hover:translate-x-0.5 transition-transform duration-200"
      >
        Empfehlung ansehen →
      </div>
    </a>
  );
}

export default function Gear() {
  const page = "gear";

  return (
    <>
      <Helmet>
        <title>Best Travel Fitness Gear | Fit & Travel</title>

        <meta
          property="og:image"
          content="https://fitandtravelblog.de/og-cover.jpg"
        />
        <meta
          property="og:image:alt"
          content="Fit & Travel Gear Empfehlungen"
        />
        <meta
          name="twitter:image"
          content="https://fitandtravelblog.de/og-cover.jpg"
        />

        <meta
          name="description"
          content="Entdecke meine Empfehlungen für Fitness unterwegs und praktische Travel Essentials – kompakt, reisetauglich und ideal für Hotel, Strand und Alltag."
        />

        <link rel="canonical" href="https://fitandtravelblog.de/gear" />

        {/* Open Graph (Facebook / LinkedIn / WhatsApp) */}

        <meta
          property="og:title"
          content="Fitness & Travel Gear Empfehlungen | Fit & Travel"
        />

        <meta
          property="og:description"
          content="Praktische Empfehlungen für Fitness unterwegs und Travel Essentials – ideal für Hotel, Strand und Reisen."
        />

        <meta property="og:type" content="website" />

        <meta property="og:url" content="https://fitandtravelblog.de/gear" />

        <meta property="og:site_name" content="Fit & Travel" />

        {/* Twitter / X */}

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Fitness & Travel Gear Empfehlungen | Fit & Travel"
        />

        <meta
          name="twitter:description"
          content="Meine Empfehlungen für Fitness unterwegs und praktische Travel Essentials."
        />
      </Helmet>

      <section className="max-w-5xl mx-auto px-6 py-10">
        <header className="mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Gear & Empfehlungen
          </h1>
          <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            Meine Empfehlungen für Fitness unterwegs und praktische Travel
            Essentials – kompakt, nützlich und ideal für Reisen.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold
                       bg-slate-900 text-white hover:opacity-90 transition
                       dark:bg-white dark:text-slate-900"
            >
              ← Zur Startseite
            </Link>

            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold
                       border border-slate-300 text-slate-900 hover:bg-slate-50 transition
                       dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              Blog ansehen
            </Link>

            <div className="ml-auto">
              <AuthorBadge />
            </div>
          </div>
        </header>

        <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
          Hinweis: Einige Links sind Affiliate-Links. Wenn du darüber etwas
          kaufst, erhalte ich eine kleine Provision – für dich bleibt der
          Preis gleich.
        </div>

        {topPicks.length > 0 && (
          <section className="mb-12">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Meine Top Empfehlungen 🔥
              </h2>
              <p className="text-slate-600 dark:text-slate-300">
                Wenn du nur mit wenigen Essentials starten willst, sind das meine
                wichtigsten Empfehlungen für Fitness & Reisen.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {topPicks.map((item) => (
                <GearCard
                  key={item.title}
                  item={item}
                  category={item.category}
                  page={`${page}_top_picks`}
                />
              ))}
            </div>
          </section>
        )}

        <div className="grid gap-10">
          {GEAR.map((section) => (
            <div key={section.category}>
              <div className="mb-4">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  {section.category}
                </h2>
                <p className="text-slate-600 dark:text-slate-300">
                  {section.subtitle}
                </p>
              </div>

              <TrustBox
                title={`Warum diese ${section.category} Empfehlungen?`}
                text={
                  section.category.includes("Fitness")
                    ? "Alles hier ist leicht, passt ins Handgepäck und funktioniert ohne Gym. Ideal für Hotelzimmer, Strand oder Park – schnell, simpel und effektiv."
                    : "Diese Essentials sparen dir Zeit und Nerven unterwegs. Weniger Chaos, mehr Komfort – und du bist für Tagestrips und spontane Abenteuer ready."
                }
              />

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {section.items.map((item) => (
                  <GearCard
                    key={item.title}
                    item={item}
                    category={section.category}
                    page={page}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
