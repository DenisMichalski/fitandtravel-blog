import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Markdown-Posts importieren
const postFiles = import.meta.glob('../posts/*.md', {
  query: '?raw',
  import: 'default',
});

function extractFrontmatter(md) {
  const match = /^---\n([\s\S]*?)\n---\n/m.exec(md);
  if (!match) return {};
  const yaml = match[1];
  return Object.fromEntries(
    yaml
      .split('\n')
      .filter((line) => line.includes(':'))
      .map((line) => {
        const idx = line.indexOf(':');
        const key = line.slice(0, idx).trim();
        let value = line.slice(idx + 1).trim();
        if (value.startsWith('"') && value.endsWith('"')) {
          value = value.slice(1, -1);
        }
        return [key, value];
      })
  );
}

function BlogOverview() {
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Alle');

  useEffect(() => {
    Promise.all(
      Object.entries(postFiles).map(async ([path, loader]) => {
        const raw = await loader();
        const meta = extractFrontmatter(raw);
        meta.id = path.match(/\/([a-z0-9_-]+)\.md$/i)[1]; // id aus Dateinamen
        return meta;
      })
    ).then((allPosts) => setPosts(allPosts));
  }, []);

  const allCategories = [
    'Alle',
    ...Array.from(new Set(posts.map((post) => post.category))),
  ];

  const filteredPosts =
    selectedCategory === 'Alle'
      ? posts.filter((post) => post.category !== 'legal')
      : posts.filter(
          (post) =>
            post.category === selectedCategory && post.category !== 'legal'
        );

  return (
    <>
      <title>Blog | Fit &amp; Travel</title>
      <meta
        name='description'
        content='Alle neuesten Beiträge rund um Fitness & Reisen.'
      />

      <section className='bg-gray-100 dark:bg-slate-900 py-12 px-4 max-w-5xl mx-auto'>
        <h2 className='text-3xl font-bold text-center mb-10 text-slate-900 dark:text-white'>
          Neu im Blog
        </h2>
        {/* Kategorie-Buttons */}
        <div className='flex flex-wrap justify-center gap-4 mb-8'>
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-semibold border 
              ${
                selectedCategory === category
                  ? 'bg-pink-500 text-white'
                  : 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-gray-300'
              }
              transition`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className='bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col'
            >
              <img
                src={post.image}
                alt={post.title}
                className='w-full h-52 object-cover'
              />
              <div className='p-6 flex flex-col flex-1'>
                <h3 className='text-xl font-bold mb-1 text-slate-900 dark:text-white'>
                  {post.title}
                </h3>
                <p className='mb-4 text-gray-600 dark:text-gray-300 flex-1'>
                  {post.summary}
                </p>
                <Link
                  to={`/blog/${post.id}`}
                  className='inline-block text-slate-900 dark:text-blue-300 font-bold underline hover:text-blue-600 dark:hover:text-pink-300 transition'
                >
                  Weiterlesen
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default BlogOverview;
