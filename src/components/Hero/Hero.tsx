// AI Generated Code by Deloitte + Cursor (BEGIN)
import './Hero.css';

/**
 * Hero component for the homepage banner
 * Implements US-002: Hero Section
 * Follows ADA Compliance Standards - semantic HTML, alt text, focus management
 */
function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-container container">
        <div className="hero-content">
          <h1 id="hero-heading" className="hero-title">
            <span>Spring Summer</span>
            <span>Collection 2024</span>
          </h1>
          <p className="hero-description">
            Discover the latest trends in fashion. From casual to formal, find your perfect style
          </p>
          <a href="/collection" className="btn btn-primary hero-cta">
            SHOP NOW
          </a>
        </div>
        <div className="hero-image-container">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=1000&fit=crop"
            alt="Model wearing elegant beige and black evening dress from Spring Summer 2024 collection"
            className="hero-image"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
// AI Generated Code by Deloitte + Cursor (END)
