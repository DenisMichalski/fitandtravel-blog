import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import RecommendationsSection from './components/RecommendationsSection';

const BlogOverview = lazy(() => import('./components/BlogOverview'));
const BlogPost = lazy(() => import('./components/BlogPost'));
const About = lazy(() => import('./components/About'));
const Impressum = lazy(() => import('./components/Impressum'));
const Datenschutz = lazy(() => import('./components/Datenschutz'));
const Kontakt = lazy(() => import('./components/Kontakt'));
const Gear = lazy(() => import('./components/Gear'));

function App() {
  return (
    <Router>
      {/* <Router basename='/fitandtravel-blog'> */}
      <div className='bg-gray-100 dark:bg-slate-900 min-h-screen transition-colors'>
        <Header />

        <main>
          <Suspense
            fallback={
              <div className="min-h-screen flex items-center justify-center text-slate-700 dark:text-slate-200">
                Lädt ...
              </div>
            }
          >

            <Routes>
              <Route
                path='/'
                element={
                  <>
                    <Hero />
                    {/* Optional: Zeige die letzten 5 Blogposts als Teaser auf der Startseite */}
                    <RecommendationsSection page="home" />
                    <BlogOverview limit={5} />
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
                element={<Gear />}
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
          </Suspense>
        </main >
        <Footer />
      </div >
    </Router >
  );
}

export default App;
