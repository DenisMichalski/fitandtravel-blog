import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { trackEvent } from "../utils/analytics";

const postFiles = import.meta.glob("../posts/*.md", {
  query: "?raw",
  import: "default",
});

function extractFrontmatter(md) {
  const match = /^---\n([\s\S]*?)\n---\n/m.exec(md);

  if (!match) return {};

  const yaml = match[1];

  return Object.fromEntries(
    yaml
      .split("\n")
      .filter((line) => line.includes(":"))
      .map((line) => {
        const idx = line.indexOf(":");
        const key = line.slice(0, idx).trim();

        let value = line.slice(idx + 1).trim();

        if (
          (value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))
        ) {
          value = value.slice(1, -1);
        }

        return [key, value];
      })
  );
}

export default function RelatedPosts({
  currentId,
  currentCategory,
  limit = 3,
}) {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      const allPosts = await Promise.all(
        Object.entries(postFiles).map(async ([path, loader]) => {
          const raw = await loader();
          const meta = extractFrontmatter(raw);

          return {
            ...meta,
            id: path.match(/\/([a-z0-9_-]+)\.md$/i)?.[1],
          };
        })
      );

      const filtered = allPosts
        .filter((post) => post.id && post.id !== currentId)
        .filter((post) => post.category !== "legal");

      const sameCategory = filtered.filter(
        (post) =>
          currentCategory && post.category === currentCategory
      );

      const fallbackPosts = filtered.filter(
        (post) =>
          !currentCategory || post.category !== currentCategory
      );

      const sortByDate = (posts) =>
        [...posts].sort((a, b) => {
          const dateA = new Date(a.date || 0);
          const dateB = new Date(b.date || 0);

          return dateB - dateA;
        });

      const combined = [
        ...sortByDate(sameCategory),
        ...sortByDate(fallbackPosts),
      ].slice(0, limit);

      setRelatedPosts(combined);
    }

    loadPosts();
  }, [currentId, currentCategory, limit]);

  if (!relatedPosts.length) {
    return null;
  }

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">
        Mehr aus {currentCategory || "Fit & Travel"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.id}`}
            onClick={() =>
              trackEvent("related_post_click", {
                current_post: currentId,
                target_post: post.id,
                category: post.category || "unknown",
              })
            }
            className="
              group block overflow-hidden rounded-2xl
              bg-gray-50 dark:bg-slate-800
              shadow-md hover:shadow-xl
              transition-all duration-300
              hover:-translate-y-1
            "
          >
            {post.image && (
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title || "Beitragsbild"}
                  className="
                    w-full h-44 object-cover
                    transition-transform duration-500
                    group-hover:scale-105
                  "
                  loading="lazy"
                  decoding="async"
                />
              </div>
            )}

            <div className="p-5 flex flex-col h-full">
              {post.category && (
                <span
                  className="
                    inline-block mb-3 text-xs font-semibold
                    px-3 py-1 rounded-full
                    bg-pink-100 text-pink-700
                    dark:bg-pink-500/20 dark:text-pink-300
                    w-fit
                  "
                >
                  {post.category}
                </span>
              )}

              <h3
                className="
                  text-lg font-bold mb-2
                  text-slate-900 dark:text-white
                  group-hover:text-pink-500
                  transition
                "
              >
                {post.title || "Blogbeitrag"}
              </h3>

              {post.date && (
                <p className="text-sm text-gray-500 mb-3">
                  {post.date}
                </p>
              )}

              <p className="text-sm text-gray-600 dark:text-gray-300 flex-1">
                {post.summary ||
                  post.excerpt ||
                  "Mehr Tipps rund um Fitness, Reisen und smarte Essentials."}
              </p>

              <div
                className="
                  mt-5 font-semibold
                  text-blue-600 dark:text-blue-300
                  group-hover:underline
                "
              >
                Weiterlesen →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}