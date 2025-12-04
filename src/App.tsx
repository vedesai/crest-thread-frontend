// AI Generated Code by Deloitte + Cursor (BEGIN)
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import FeaturedCategories from './components/FeaturedCategories/FeaturedCategories';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';
import TrustSection from './components/TrustSection/TrustSection';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';

/**
 * Main App component that renders the homepage
 * Following React Code Standards and ADA Compliance Standards
 */
function App() {
  return (
    <div className="app">
      {/* Skip link for keyboard navigation - ADA Compliance */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      <Header />
      
      <main id="main-content" role="main">
        <Hero />
        <FeaturedCategories />
        <FeaturedProducts />
        <TrustSection />
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
// AI Generated Code by Deloitte + Cursor (END)
