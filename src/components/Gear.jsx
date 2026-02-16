import React from "react";
import { trackOutboundClick, withUtm } from "../utils/outbound";
import AuthorBadge from "./AuthorBadge";
import { Link } from "react-router-dom";

const GEAR = [
  {
    category: "Fitness (Hotel & Unterwegs)",
    subtitle: "Leicht, kompakt, effektiv – perfekt für Reisen.",
    items: [
      {
        title: "Resistance Bands Set",
        description: "Viel Training für wenig Platz. Perfekt fürs Hotelzimmer.",
        href: "https://example.com/resistance-bands",
      },
      {
        title: "Foldable Yoga Mat",
        description: "Passt in den Koffer – ideal für Mobility & Stretching.",
        href: "https://example.com/foldable-yoga-mat",
      },
      {
        title: "Shaker + Protein-Container",
        description: "Sauberer Alltag unterwegs – weniger Stress, mehr Routine.",
        href: "https://example.com/shaker",
      },
    ],
  },
  {
    category: "Travel & Outdoor Essentials",
    subtitle: "Praktisch, robust, reisetauglich.",
    items: [
      {
        title: "Packing Cubes",
        description: "Koffer-Organisation = schneller packen, weniger Chaos.",
        href: "https://example.com/packing-cubes",
      },
      {
        title: "Compact Power Bank",
        description: "Must-have für Stadt, Strand, Wandern – Akku safe.",
        href: "https://example.com/power-bank",
      },
      {
        title: "Lightweight Daypack",
        description: "Für Tagestrips: klein, leicht, aber genug Platz.",
        href: "https://example.com/daypack",
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
