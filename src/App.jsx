import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import BlogOverview from './components/BlogOverview';
import BlogPost from './components/BlogPost';
import About from './components/About';
import Footer from './components/Footer';
import Impressum from './components/Impressum';
import Datenschutz from './components/Datenschutz';
import Kontakt from './components/Kontakt';
import RecommendationsSection from './components/RecommendationsSection';
import Gear from './components/Gear';


function App() {
  return (
      <Router>
        {/* <Router basename='/fitandtravel-blog'> */}
        <div className='bg-gray-100 dark:bg-slate-900 min-h-screen transition-colors'>
          <Header />
          <main>
            <Routes>
              <Route
                path='/'
                element={
                  <>
                    <Hero />
                    {/* Optional: Zeige die letzten 3 Blogposts als Teaser auf der Startseite */}
                    <RecommendationsSection page="home" />
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
              <Route path="/gear" 
              element={<Gearr />}
              />
              <Route
                path='/blog/:id'
                element={<BlogPost />}
              />
              <Route
                path='/impressum'
                element={<Impressum />}
              />
              <Route
                path='/datenschutz'
                element={<Datenschutz />}
              />
              <Route
                path='/kontakt'
                element={<Kontakt />}
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
