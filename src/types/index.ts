// AI Generated Code by Deloitte + Cursor (BEGIN)

/**
 * Product interface representing an item in the store
 */
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  imageUrl: string;
  category: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
}

/**
 * Category interface for product categories
 */
export interface Category {
  id: string;
  name: string;
  imageUrl: string;
  slug: string;
}

/**
 * Cart item interface
 */
export interface CartItem {
  productId: string;
  product: Product;
  quantity: number;
}

/**
 * Cart interface
 */
export interface Cart {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

/**
 * Newsletter subscription request
 */
export interface NewsletterSubscription {
  email: string;
}

/**
 * API Response wrapper
 */
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

/**
 * Hero content for the homepage banner
 */
export interface HeroContent {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  imageUrl: string;
}

/**
 * Trust badge content
 */
export interface TrustBadge {
  id: string;
  icon: string;
  title: string;
  description: string;
}

/**
 * Footer link group
 */
export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

/**
 * Footer link
 */
export interface FooterLink {
  label: string;
  href: string;
}

// AI Generated Code by Deloitte + Cursor (END)
