// AI Generated Code by Deloitte + Cursor (BEGIN)
import { Category } from '../../types';
import './FeaturedCategories.css';

// Static category data - would typically come from API
const categories: Category[] = [
  {
    id: '1',
    name: 'Women',
    slug: 'women',
    imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop',
  },
  {
    id: '2',
    name: 'Men',
    slug: 'men',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  },
  {
    id: '3',
    name: 'Kids',
    slug: 'kids',
    imageUrl: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=400&fit=crop',
  },
  {
    id: '4',
    name: 'Sportswear',
    slug: 'sportswear',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
  },
  {
    id: '5',
    name: 'Accessories',
    slug: 'accessories',
    imageUrl: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&h=400&fit=crop',
  },
];

/**
 * Featured Categories component
 * Implements US-003: Featured Categories Section
 * Follows ADA Compliance Standards - semantic HTML, alt text, keyboard navigation
 */
function FeaturedCategories() {
  return (
    <section className="featured-categories" aria-labelledby="categories-heading">
      <div className="featured-categories-container container">
        <h2 id="categories-heading" className="section-heading text-center">
          Featured Categories
        </h2>
        <ul className="categories-grid" role="list">
          {categories.map((category) => (
            <li key={category.id} className="category-item">
              <a
                href={`/category/${category.slug}`}
                className="category-link"
                aria-label={`Shop ${category.name} category`}
              >
                <div className="category-image-container">
                  <img
                    src={category.imageUrl}
                    alt={`${category.name} fashion category`}
                    className="category-image"
                    loading="lazy"
                  />
                </div>
                <h3 className="category-name">{category.name}</h3>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default FeaturedCategories;
// AI Generated Code by Deloitte + Cursor (END)
