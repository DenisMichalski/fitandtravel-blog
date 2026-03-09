import AuthorBadge from "./AuthorBadge";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { useEffect, useState } from "react";
import GearCTA from "./GearCTA";

import {
  buildLinktreeUrl,
  trackLinktreeClick,
  isLinktreeLink,
} from "../utils/linktree";

const posts = import.meta.glob("../posts/*.md", {
  query: "?raw",
  import: "default",
});

function NotFoundMini({ id }) {
  return (
    <section className="max-w-2xl mx-auto p-8 mt-12 bg-white dark:bg-slate-900 rounded-2xl shadow-xl">
      <title>Beitrag nicht gefunden | Fit &amp; Travel</title>
      <meta name="robots" content="noindex" />
      <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">
        Beitrag nicht gefunden
      </h2>
      <p className="mb-6">Für den Slug „{id}“ wurde kein Artikel gefunden.</p>
      <Link to="/blog" className="underline font-semibold">
        ← Zurück zur Blog-Übersicht
      </Link>
    </section>
  );
}

export default function BlogPost() {
  const { id } = useParams();
  const [content, setContent] = useState("");
  const [meta, setMeta] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setContent("");
      setMeta(null);

      const importPath = Object.keys(posts).find((key) =>
        key.endsWith(`${id}.md`)
      );

      if (!importPath) {
        if (!cancelled) {
          setContent("__NOT_FOUND__");
          setMeta({});
        }
        return;
      }

      try {
        const raw = await posts[importPath]();

        const match = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/m.exec(raw);

        if (match) {
          const yaml = match[1];
          const body = match[2];

          const metaObj = Object.fromEntries(
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

          if (!cancelled) {
            setMeta(metaObj);
            setContent(body);
          }
        } else {
          if (!cancelled) {
            setMeta({});
            setContent(raw);
          }
        }
      } catch {
        if (!cancelled) {
          setContent("__NOT_FOUND__");
          setMeta({});
        }
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, [id]);

  if (meta === null) {
    return <div className="text-center py-16">Lade …</div>;
  }

  if (content === "__NOT_FOUND__") {
    return <NotFoundMini id={id} />;
  }

  const pageTitle = meta?.title
    ? `${meta.title} | Fit & Travel`
    : "Beitrag | Fit & Travel";

  const pageDesc =
    meta?.summary ||
    meta?.excerpt ||
    meta?.description ||
    "Blogbeitrag auf Fit & Travel";

  const imageAlt = meta?.title || "Beitragsbild";
  const pageUrl = `https://fitandtravelblog.de/blog/${id}`;

  return (
    <article className="max-w-2xl mx-auto p-8 bg-white dark:bg-slate-900 rounded-2xl shadow-xl mt-12">
      <title>{pageTitle}</title>
      <meta name="description" content={pageDesc} />
      <link rel="canonical" href={pageUrl} />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDesc} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content="Fit & Travel" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDesc} />

      {meta?.image && (
        <>
          <meta property="og:image" content={meta.image} />
          <meta property="og:image:alt" content={imageAlt} />
          <meta name="twitter:image" content={meta.image} />

          <img
            src={meta.image}
            alt={imageAlt}
            className="rounded-2xl mb-8 w-full object-cover h-64"
            loading="lazy"
            decoding="async"
          />
        </>
      )}

      <h1 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
        {meta?.title || "Blogpost"}
      </h1>

      {(meta?.date || meta?.author) && (
        <p className="mb-4 text-gray-500">
          {meta?.date && <span>{meta.date}</span>}
          {meta?.date && meta?.author && <span> · </span>}
          {meta?.author && <span>{meta.author}</span>}
        </p>
      )}

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          components={{
            a: ({ href = "", children, ...props }) => {
              if (isLinktreeLink(href)) {
                const trackedHref = buildLinktreeUrl({
                  source: "blog_post",
                  content: id,
                  medium: "cta",
                  campaign: "linktree",
                });

                return (
                  <a
                    href={trackedHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackLinktreeClick({
                        location: "blog_post_link",
                        page: id,
                      })
                    }
                    {...props}
                  >
                    {children}
                  </a>
                );
              }

              const isExternal = href.startsWith("http");

              return (
                <a
                  href={href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  {...props}
                >
                  {children}
                </a>
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </div>

      <GearCTA page={id} />

      <div className="mt-8 flex items-center justify-between">
        <Link
          to="/blog"
          className="inline-block text-blue-600 hover:underline font-bold"
        >
          ← Zurück zum Blog
        </Link>
        <AuthorBadge />
      </div>
    </article>
  );
}
