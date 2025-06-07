import blogPosts from '../blogData';
import { Link } from 'react-router-dom';

function BlogOverview() {
  return (
    <section className='bg-gray-100 dark:bg-slate-900 py-12 px-4 max-w-5xl mx-auto'>
      <h2 className='text-3xl font-bold text-center mb-10 text-slate-900 dark:text-white'>
        Neu im Blog
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
        {blogPosts.map((post) => (
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
  );
}

export default BlogOverview;
