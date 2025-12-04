// AI Generated Code by Deloitte + Cursor (BEGIN)
import { useCallback } from 'react';
import { Star } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import './FeaturedProducts.css';

// Static product data - would typically come from API
const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Classic White T-Shirt',
    description: 'A timeless classic white t-shirt made from premium cotton.',
    price: 29,
    originalPrice: 39,
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop',
    category: 'men',
    rating: 4.5,
    reviewCount: 342,
    inStock: true,
  },
  {
    id: '2',
    name: 'Slim Fit Denim Jeans',
    description: 'Modern slim fit denim jeans with stretch comfort.',
    price: 79,
    originalPrice: 99,
    imageUrl: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop',
    category: 'men',
    rating: 4.5,
    reviewCount: 567,
    inStock: true,
  },
  {
    id: '3',
    name: 'Cozy Knit Sweater',
    description: 'Warm and stylish knit sweater for cooler days.',
    price: 89,
    originalPrice: 119,
    imageUrl: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=800&fit=crop',
    category: 'women',
    rating: 4.5,
    reviewCount: 234,
    inStock: true,
  },
];

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

/**
 * Product Card component
 * Follows ADA Compliance Standards - ARIA labels, semantic HTML
 */
function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const handleAddToCart = useCallback(() => {
    onAddToCart(product);
  }, [product, onAddToCart]);

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star
            key={i}
            size={16}
            fill="var(--color-star)"
            stroke="var(--color-star)"
            aria-hidden="true"
          />
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <Star
            key={i}
            size={16}
            fill="var(--color-star)"
            stroke="var(--color-star)"
            aria-hidden="true"
            style={{ clipPath: 'inset(0 50% 0 0)' }}
          />
        );
      } else {
        stars.push(
          <Star
            key={i}
            size={16}
            fill="none"
            stroke="var(--color-star)"
            aria-hidden="true"
          />
        );
      }
    }
    return stars;
  };

  const discountPercentage = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <article className="product-card" aria-labelledby={`product-${product.id}-name`}>
      <div className="product-image-container">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="product-image"
          loading="lazy"
        />
        {discountPercentage > 0 && (
          <span className="product-badge" aria-label={`${discountPercentage}% off`}>
            -{discountPercentage}%
          </span>
        )}
      </div>
      <div className="product-content">
        <h3 id={`product-${product.id}-name`} className="product-name">
          {product.name}
        </h3>
        <div className="product-rating" aria-label={`Rating: ${product.rating} out of 5 stars, ${product.reviewCount} reviews`}>
          <div className="stars" aria-hidden="true">
            {renderStars()}
          </div>
          <span className="review-count">({product.reviewCount})</span>
        </div>
        <div className="product-price">
          <span className="price-current" aria-label={`Current price: $${product.price}`}>
            ${product.price}
          </span>
          {product.originalPrice > product.price && (
            <span className="price-original" aria-label={`Original price: $${product.originalPrice}`}>
              ${product.originalPrice}
            </span>
          )}
        </div>
        <button
          className="btn btn-primary product-add-btn"
          onClick={handleAddToCart}
          aria-label={`Add ${product.name} to cart`}
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
}

/**
 * Featured Products component
 * Implements US-004: Featured Products Section
 * Follows React Code Standards and ADA Compliance Standards
 */
function FeaturedProducts() {
  const { addToCart } = useCart();

  const handleAddToCart = useCallback(
    (product: Product) => {
      addToCart(product);
    },
    [addToCart]
  );

  return (
    <section className="featured-products" aria-labelledby="products-heading">
      <div className="featured-products-container container">
        <div className="products-header">
          <h2 id="products-heading" className="section-title">
            Featured Products
          </h2>
          <a href="/products" className="view-all-link">
            View All
          </a>
        </div>
        <div className="products-grid" role="list">
          {featuredProducts.map((product) => (
            <div key={product.id} role="listitem">
              <ProductCard product={product} onAddToCart={handleAddToCart} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
// AI Generated Code by Deloitte + Cursor (END)
