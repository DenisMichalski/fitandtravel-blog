import React from "react";
import { trackOutboundClick, withUtm } from "../utils/outbound";

const RECOMMENDATIONS = [
  {
    category: "Fitness",
    items: [
      {
        title: "Resistance Bands Set",
        description:
          "Super für Reisen + Home-Workouts. Leicht, günstig, effektiv.",
        href: "https://example.com/resistance-bands", // später Affiliate-Link
      },
      {
        title: "Foldable Yoga Mat",
        description: "Passt in den Koffer. Nice für Hotel-Workouts.",
        href: "https://example.com/foldable-yoga-mat",
      },
      {
        title: "Shaker + Protein-Container",
        description: "Für unterwegs – spart Stress und Geld.",
        href: "https://example.com/shaker",
      },
    ],
  },
  {
    category: "Travel & Outdoor",
    items: [
      {
        title: "Packing Cubes",
        description: "Koffer-Organisation = weniger Chaos, mehr Urlaub.",
        href: "https://example.com/packing-cubes",
      },
      {
        title: "Compact Power Bank",
        description: "Must-have für Citytrips & Wandern.",
        href: "https://example.com/power-bank",
      },
      {
        title: "Lightweight Daypack",
        description: "Klein, robust, perfekt für Tagesausflüge.",
        href: "https://example.com/daypack",
      },
    ],
  },
];

function ProductCard({ item, category, page }) {
  const trackedHref = withUtm(item.href, {
    source: "blog",
    medium: "recommendations",
    campaign: "direct_links",
    content: `${category.toLowerCase()}_${item.title
      .toLowerCase()
      .replace(/\s+/g, "_")}`,
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
          location: "homepage_recommendations",
          page,
        })
      }
      className="rec-card"
    >
      <div className="rec-card__title">{item.title}</div>
      <div className="rec-card__desc">{item.description}</div>
      <div className="rec-card__cta">View recommendation →</div>
    </a>
  );
}

export default function RecommendationsSection({ page = "home" }) {
  return (
    <section className="rec-section">
      <div className="rec-section__header">
        <h2 className="rec-section__title">My Recommendations</h2>
        <p className="rec-section__subtitle">
          Direkte Links statt Linktree. Später kommen hier Affiliate-Links rein
          – aber schon jetzt messen wir, was Leute wirklich anklicken.
        </p>
      </div>

      <div className="rec-section__grid">
        {RECOMMENDATIONS.map((block) => (
          <div key={block.category} className="rec-category">
            <h3 className="rec-category__title">{block.category}</h3>

            <div className="rec-cards">
              {block.items.map((item) => (
                <ProductCard
                  key={item.title}
                  item={item}
                  category={block.category}
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
