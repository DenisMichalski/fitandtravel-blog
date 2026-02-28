import React from "react";
import { trackOutboundClick, withUtm } from "../utils/outbound";
import AuthorBadge from "./AuthorBadge";
import { Link } from "react-router-dom";

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
        href: "https://www.decathlon.de/p/fitness-band-trainingsband-3er-set-widerstand-5-6-7-kg-blau-bordeauxrot/305336/c113c88c381m8528803?utm_source=blog&utm_medium=gear&utm_campaign=direct_links&utm_content=fitness_resistance_bands",
        badges: ["Hotel", "Ohne Gym", "Leicht"],
      },
      {
        title: "Komfort & Hygiene beim Training unterwegs",
        description:
          "Trainiere überall sauber und bequem — vom Hotelzimmer bis zum Strand.",
        href: "https://www.amazon.de/gaiam-Exercise-Foldable-Workouts-Cranberry/dp/B07XYY3BHN?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&smid=AHF33ROPJ2LOJ%3Fsource%3Dps-sl-shoppingads-lpcontext&utm_source=blog&utm_medium=gear&utm_campaign=direct_links&utm_content=fitness_yoga_mat",
        badges: ["Mobility", "Sauber", "Reisetauglich"],
      },
      {
        title: "Gesunde Routine auch auf Reisen",
        description:
          "Protein, Snacks oder Supplements immer griffbereit. Praktisch für unterwegs.",
        href: "https://www.amazon.de/Blender-Bottle-Shaker-Flasche-Pillen-Organizer-Proteinpulver/dp/B0CN17WPTX?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A3517BHP4L5HFZ%3Fsource%3Dps-sl-shoppingads-lpcontext&psc=1&utm_source=blog&utm_medium=gear&utm_campaign=direct_links&utm_content=fitness_shaker_container",
        badges: ["Routine", "Praktisch", "Kompakt"],
      },
      {
        title: "5-Minuten Cardio überall",
        description:
          "Cardio-Training für unterwegs – leicht, effektiv, platzsparend.",
        href: "https://www.decathlon.de/p/geschwindigkeits-springseil-speed-rope-grun/311896/c219m8807817?utm_source=blog&utm_medium=gear&utm_campaign=direct_links&utm_content=fitness_jump_rope",
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
        href: "https://www.amazon.de/-/en/TRIPPED-Travel-Gear-Compression-Organizer/dp/B0B92LC2CN?utm_source=blog&utm_medium=gear&utm_campaign=direct_links&utm_content=travel_packing_cubes",
        badges: ["Organisation", "Stressfrei", "Travel Hack"],
      },
      {
        title: "Nie wieder leerer Akku unterwegs",
        description: "Must-have für Stadt, Strand, Wandern – Akku safe.",
        href: "https://www.shopwudn.com/products/fast-charging-4000-mah-ultra-slim-built-in-iphone-lightning-cable-micro-usb-plug-black?srsltid=AfmBOopzh6NT688vewGvAPbv69hebDMRQAb0n5KTuzzGfdEyjRxTbyrk&utm_source=blog&utm_medium=gear&utm_campaign=direct_links&utm_content=travel_power_bank",
        badges: ["Must-have", "Kompakt", "Zuverlässig"],
      },
      {
        title: "Alles dabei – ohne schwer zu tragen",
        description:
          "Perfekt für Sightseeing, Strandtage und spontane Abenteuer.",
        href: "https://www.decathlon.vn/en-VN/p/hiking-backpack-30l-nh-arpenaz-100-quechua-8920035.html?srsltid=AfmBOoqaegViubOFaYpT54w8dhVSsJeaHSVhMtcqAgBBsRFp2zl9iIHh&utm_source=blog&utm_medium=gear&utm_campaign=direct_links&utm_content=travel_daypack",
        badges: ["Leicht", "Outdoor", "Alltag"],
      },
      {
        title: "Handgepäck ready & auslaufsicher",
        description: "Spart Platz und verhindert Chaos im Kulturbeutel.",
        href: "https://www.amazon.de/-/en/Squeezable-Containers-Toiletries-Conditioner-Accessories/dp/B0CD432W5M?utm_source=blog&utm_medium=gear&utm_campaign=direct_links&utm_content=travel_bottles_set",
        badges: ["Handgepäck", "Auslaufsicher", "Platzsparend"],
      },
    ],
  },
];

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
          destination: item.href,
          label: item.title,
          location: "gear_page",
          page,
        })
      }
      className="
        block rounded-2xl p-5
        bg-white text-slate-900 border border-slate-200
        hover:-translate-y-0.5 hover:shadow-xl transition
        dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700
      "
    >
      <div className="font-bold text-lg mb-2">{item.title}</div>
      {Array.isArray(item.badges) && item.badges.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {item.badges.map((badge) => (
            <span
              key={badge}
              className="
              text-xs font-semibold px-2 py-1 rounded-full
              bg-slate-100 text-slate-700
              dark:bg-slate-700 dark:text-slate-100
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
      <div className="font-semibold text-blue-600 dark:text-blue-400">
        Empfehlung ansehen →
      </div>
    </a>
  );
}

export default function Gear() {
  const page = "gear";

  return (
    <section className="max-w-5xl mx-auto px-6 py-10">
      <title>Gear | Fit & Travel</title>
      <meta
        name="description"
        content="Meine Empfehlungen für Fitness unterwegs und Travel Essentials – kompakt, praktisch und erprobt."
      />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
          Gear & Empfehlungen
        </h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          Später kommen hier richtige Links (wenn Affiliate wieder aktiv ist).
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
                  : "Diese Essentials sparen dir Zeit und Nerven unterwegs. Weniger Chaos, mehr Komfort – und du bist für Tagestrips & spontane Abenteuer ready."
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
  );
}
