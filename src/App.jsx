import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import BlogOverview from './components/BlogOverview';
import BlogPost from './components/BlogPost';
import About from './components/About';

function App() {
  return (
    <Router basename='/fitandtravel-blog'>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Hero />
              {/* Optional: Teaser von 3 Blogposts */}
              <BlogOverview limit={3} />
            </>
          }
        />
        <Route
          path='/blog'
          element={<BlogOverview />}
        />
        <Route
          path='/about'
          element={<About />}
        />
        <Route
          path='/blog/:id'
          element={<BlogPost />}
        />
      </Routes>
    </Router>
  );
}

export default App;
