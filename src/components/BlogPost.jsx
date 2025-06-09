// src/components/BlogPost.jsx

import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
// import blogPosts from '../blogData';
import { useEffect, useState } from 'react';

// Glob importiert ALLE Markdown-Dateien im Ordner
const posts = import.meta.glob('../posts/*.md', { query: '?raw', import: 'default' });

function BlogPost() {
  const { id } = useParams();
  const [content, setContent] = useState('');
  const [meta, setMedia] = useState({});

  useEffect(() => {
    // Annahme: id etspricht Dateinamen, zb. 'fitnesstrip'
    const file = '/src/posts/${id}.md';

    // Den echten Importpfad holen:
    const importPath = Object.keys(posts).find((key) =>
      key.endsWith(`${id}.md`)
    );
    if (importPath) {
      posts[importPath]().then((raw) => {
        // Frontmatter (Yaml oben) extrahieren
        const match = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/m.exec(raw);
        if (match) {
          const yaml = match[1];
          const body = match[2];
          // Einfaches YAML-zu-Object (sehr basic)
          const metaObj = Object.fromEntries(
            yaml
              .split('\n')
              .filter(line => line.includes(':'))
              .map(line => {
                const idx = line.indexOf(':');
                const key = line.slice(0, idx).trim();
                const value = line.slice(idx + 1).trim();
                return [key, value];
              })
          );
          setMeta(metaObj);

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
    <article className='max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-xl mt-12'>
      {meta.image && (
        <img
          src={meta.image}
          alt={meta.title}
          className='rounded-2xl mb-8 w-full object-cover h-64'
        />
      )}
      <h1 className='text-3xl font-bold mb-4'>{meta.title || 'Blogpost'}</h1>
      <ReactMarkdown className='prose'>{content}</ReactMarkdown>
      <a
        href='/'
        className='inline-block mt-8 text-blue-600 hover:undeline font-bold'
      >
        &larr; Zurück zum Blog
      </a>
    </article>
  );
}

export default BlogPost;
