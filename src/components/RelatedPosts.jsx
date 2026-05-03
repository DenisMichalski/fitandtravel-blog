import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Alle Markdown-Posts laden
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

export default function RelatedPosts({ currentId, currentCategory, limit = 3 }) {
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
        (post) => currentCategory && post.category === currentCategory
      );

      const fallbackPosts = filtered.filter(
        (post) => !currentCategory || post.category !== currentCategory
      );

      const sortedSameCategory = [...sameCategory].sort((a, b) => {
        const dateA = new Date(a.date || 0);
        const dateB = new Date(b.date || 0);
        return dateB - dateA;
      });

      const sortedFallback = [...fallbackPosts].sort((a, b) => {
        const dateA = new Date(a.date || 0);
        const dateB = new Date(b.date || 0);
        return dateB - dateA;
      });

      const combined = [...sortedSameCategory, ...sortedFallback].slice(0, limit);

      setRelatedPosts(combined);
    }

    loadPosts();
  }, [currentId, currentCategory, limit]);

  if (!relatedPosts.length) {
    return null;
  }

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
        Passende Beiträge
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <article
            key={post.id}
            className="bg-gray-50 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition"
          >
            {post.image && (
              <img
                src={post.image}
                alt={post.title || "Beitragsbild"}
                className="w-full h-40 object-cover"
                loading="lazy"
                decoding="async"
              />
            )}

            <div className="p-5 flex flex-col h-full">
              <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">
                {post.title || "Blogbeitrag"}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-1">
                {post.summary ||
                  post.excerpt ||
                  "Mehr Tipps rund um Fitness, Reisen und smarte Essentials."}
              </p>

              <Link
                to={`/blog/${post.id}`}
                className="inline-block font-semibold text-blue-600 dark:text-blue-300 hover:underline"
              >
                Weiterlesen →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}