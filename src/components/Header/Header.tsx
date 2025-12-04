// AI Generated Code by Deloitte + Cursor (BEGIN)
import { useState, useCallback } from 'react';
import { Search, User, ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './Header.css';

/**
 * Header component with logo, search, navigation, and cart
 * Implements US-001: Header Component
 * Follows ADA Compliance Standards - semantic HTML, keyboard navigation, ARIA labels
 */
function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const { cart } = useCart();

  const handleSearchSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
  }, [searchQuery]);

  const navigationLinks = [
    { label: 'Women', href: '/women' },
    { label: 'Men', href: '/men' },
    { label: 'Kids', href: '/kids' },
    { label: 'Sale', href: '/sale' },
  ];

  return (
    <header className="header" role="banner">
      <div className="header-container container">
        <div className="header-top">
          <a href="/" className="header-logo" aria-label="Crest and Thread Home">
            <div className="logo-icon">
              <svg width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M16 0L32 9V27L16 36L0 27V9L16 0Z" fill="currentColor" />
                <path d="M16 8L8 13V23L16 28L24 23V13L16 8Z" fill="white" />
              </svg>
            </div>
            <div className="logo-text">
              <span className="logo-crest">CREST</span>
              <span className="logo-thread"><span className="logo-ampersand">&</span><span>THREAD</span></span>
            </div>
          </a>

          <form className="header-search" onSubmit={handleSearchSubmit} role="search" aria-label="Search products">
            <input type="search" className="search-input" placeholder="Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} aria-label="Search products" />
            <button type="submit" className="search-button" aria-label="Submit search">
              <Search size={16} aria-hidden="true" />
            </button>
          </form>

          <div className="header-actions">
            <button className="header-action-btn" aria-label="User account" type="button">
              <User size={16} aria-hidden="true" />
            </button>
            <button className="header-action-btn cart-btn" aria-label={`Shopping cart with ${cart.totalItems} items`} type="button">
              <ShoppingCart size={16} aria-hidden="true" />
              <span className="cart-badge" aria-hidden="true">{cart.totalItems}</span>
            </button>
          </div>
        </div>

        <nav className="header-nav" aria-label="Main navigation">
          <ul className="nav-list" role="menubar">
            {navigationLinks.map((link) => (
              <li key={link.label} role="none">
                <a href={link.href} className="nav-link" role="menuitem">{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
// AI Generated Code by Deloitte + Cursor (END)
