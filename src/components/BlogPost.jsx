// src/components/BlogPost.jsx

import { useParams } from "react-router-dom";
import blogPosts from '../blogData';

function BlogPost() {
  const { id } = useParams();
  
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <div className="text-center py-16">Beitrag nicht gefunden.</div>;
  }

  return (
    <article className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-xl mt-12">
      <img src={post.image} alt={post.title} className="rounded-2xl mb-8 w-full object-cover h-64" />
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="mb-8 text-gray-700">{post.summary}</p>
      {/* Hier könntest du später den vollständigen Content einbauen */}
      <a href="/" className="inline-block mt-8 text-blue-600 hover:underline font-bold">
        &larr; Zurück zum Blog
      </a>
    </article>
  );
}

export default BlogPost;

