import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import BlogOverview from './components/BlogOverview';
import BlogPost from './components/BlogPost';
import About from './components/About';
import Footer from './components/Footer';
import TestDark from './TestDark';

function App() {
  return (
    <Router basename='/fitandtravel-blog'>
      <Header />
      <TestDark />
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
      <Footer />
    </Router>
  );
}

export default App;
