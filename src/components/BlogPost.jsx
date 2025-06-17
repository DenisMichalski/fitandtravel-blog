// src/components/BlogPost.jsx

import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { useEffect, useState } from 'react';

const posts = import.meta.glob('../posts/*.md', {
  query: '?raw',
  import: 'default',
});

function BlogPost() {
  const { id } = useParams();
  const [content, setContent] = useState('');
  const [meta, setMeta] = useState({});

  useEffect(() => {
    const importPath = Object.keys(posts).find((key) =>
      key.endsWith(`${id}.md`)
    );
    if (importPath) {
      posts[importPath]().then((raw) => {
        const match = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/m.exec(raw);
        if (match) {
          const yaml = match[1];
          const body = match[2];
          const metaObj = Object.fromEntries(
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
          setMeta(metaObj);
          setContent(body);
        } else {
          setContent(raw);
          setMeta({});
        }
      });
    } else {
      setContent('Beitrag nicht gefunden.');
      setMeta({});
    }
  }, [id]);

  if (!content) return <div className='text-center py-16'>Lade ...</div>;

  return (
    <article className='max-w-2xl mx-auto p-8 bg-white dark:bg-slate-900 rounded-2xl shadow-xl mt-12'>
      {meta.image && (
        <img
          src={meta.image}
          alt={meta.title}
          className='rounded-2xl mb-8 w-full object-cover h-64'
        />
      )}
      <h1 className='text-3xl font-bold mb-4'>{meta.title || 'Blogpost'}</h1>
      <p className='mb-4 text-gray-500'>{meta.date}</p>
      <div className='prose prose-slate dark:prose-invert max-w-none'>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
      </div>

      <Link
        to='/'
        className='inline-block mt-8 text-blue-600 hover:underline font-bold'
      >
        &larr; Zurück zum Blog
      </Link>
    </article>
  );
}

export default BlogPost;
