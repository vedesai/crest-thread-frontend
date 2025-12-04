// AI Generated Code by Deloitte + Cursor (BEGIN)
import { Shield, RefreshCw, Truck } from 'lucide-react';
import './TrustSection.css';

interface TrustBadgeData { id: string; icon: React.ReactNode; title: string; description: string; }

const trustBadges: TrustBadgeData[] = [
  { id: 'secure', icon: <Shield size={24} aria-hidden="true" />, title: 'Secure Shopping', description: 'SSL encrypted checkout' },
  { id: 'returns', icon: <RefreshCw size={24} aria-hidden="true" />, title: 'Easy Returns', description: '60-day return policy' },
  { id: 'delivery', icon: <Truck size={24} aria-hidden="true" />, title: 'Free Delivery', description: 'On orders over $75' },
];

function TrustSection() {
  return (
    <section className="trust-section" aria-labelledby="trust-heading">
      <div className="trust-container container">
        <div className="trust-badges">
          <h2 id="trust-heading" className="trust-title">Why Shop With Us</h2>
          <ul className="badges-list" role="list">
            {trustBadges.map((badge) => (
              <li key={badge.id} className="badge-item">
                <div className="badge-icon">{badge.icon}</div>
                <div className="badge-content">
                  <h3 className="badge-title">{badge.title}</h3>
                  <p className="badge-description">{badge.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default TrustSection;
// AI Generated Code by Deloitte + Cursor (END)
