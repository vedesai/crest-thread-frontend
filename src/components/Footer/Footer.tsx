// AI Generated Code by Deloitte + Cursor (BEGIN)
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import './Footer.css';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

const footerLinks: FooterLinkGroup[] = [
  {
    title: 'Customer Service',
    links: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'Shipping Info', href: '/shipping' },
      { label: 'Returns', href: '/returns' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Size Guide', href: '/size-guide' },
    ],
  },
  {
    title: 'About Us',
    links: [
      { label: 'Our Story', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Sustainability', href: '/sustainability' },
      { label: 'Press', href: '/press' },
      { label: 'Affiliates', href: '/affiliates' },
    ],
  },
  {
    title: 'Quick Links',
    links: [
      { label: 'New Arrivals', href: '/new-arrivals' },
      { label: 'Best Sellers', href: '/best-sellers' },
      { label: 'Sale', href: '/sale' },
      { label: 'Gift Cards', href: '/gift-cards' },
      { label: 'Store Locator', href: '/stores' },
    ],
  },
];

const socialLinks = [
  { icon: <Facebook size={20} aria-hidden="true" />, label: 'Facebook', href: 'https://facebook.com' },
  { icon: <Instagram size={20} aria-hidden="true" />, label: 'Instagram', href: 'https://instagram.com' },
  { icon: <Twitter size={20} aria-hidden="true" />, label: 'Twitter', href: 'https://twitter.com' },
  { icon: <Youtube size={20} aria-hidden="true" />, label: 'YouTube', href: 'https://youtube.com' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookies' },
];

/**
 * Footer component
 * Implements US-007: Footer Component
 * Follows ADA Compliance Standards - semantic HTML, navigation landmarks, proper links
 */
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Brand Column */}
          <div className="footer-brand">
            <a href="/" className="footer-logo" aria-label="Crest and Thread Home">
              <div className="logo-icon">
                <svg
                  width="32"
                  height="36"
                  viewBox="0 0 32 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M16 0L32 9V27L16 36L0 27V9L16 0Z"
                    fill="currentColor"
                  />
                  <path
                    d="M16 8L8 13V23L16 28L24 23V13L16 8Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="logo-text">
                <span className="logo-crest">CREST</span>
                <span className="logo-thread">
                  <span className="logo-ampersand">&</span>
                  <span>THREAD</span>
                </span>
              </div>
            </a>
            <p className="footer-description">
              Premium apparel for the modern lifestyle. Quality fashion that fits your style.
            </p>
            {/* Social Links */}
            <nav aria-label="Social media links">
              <ul className="social-links">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      className="social-link"
                      aria-label={`Follow us on ${social.label}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Link Columns */}
          {footerLinks.map((group) => (
            <nav key={group.title} className="footer-nav" aria-label={group.title}>
              <h3 className="footer-nav-title">{group.title}</h3>
              <ul className="footer-nav-list">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="footer-nav-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Crest & Thread. All rights reserved.
          </p>
          <nav aria-label="Legal links">
            <ul className="legal-links">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="legal-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
// AI Generated Code by Deloitte + Cursor (END)
