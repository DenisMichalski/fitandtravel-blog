import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Hero from './components/Hero';
import BlogOverview from './components/BlogOverview';
import BlogPost from './components/BlogPost'; 

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <BlogOverview />
          </>
        } />
        <Route path="/blog/:id" element={<BlogPost />} />
        {/* Weitere Seiten wie About/Über etc. später */}
      </Routes>
    </Router>
  );
  
}


export default App;

