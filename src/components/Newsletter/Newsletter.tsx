// AI Generated Code by Deloitte + Cursor (BEGIN)
import { useState, useCallback } from 'react';
import { Mail } from 'lucide-react';
import './Newsletter.css';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email.trim()) {
      setErrorMessage('Please enter your email address');
      setStatus('error');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address');
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus('success');
      setEmail('');
    } catch {
      setErrorMessage('Something went wrong. Please try again.');
      setStatus('error');
    }
  }, [email]);

  return (
    <section className="newsletter" aria-labelledby="newsletter-heading">
      <div className="newsletter-container container">
        <div className="newsletter-card">
          <div className="newsletter-icon"><Mail size={48} aria-hidden="true" /></div>
          <h2 id="newsletter-heading" className="newsletter-title">Join Our Style Club</h2>
          <p className="newsletter-description">Get 15% off your first order and early access to new collections</p>
          
          {status === 'success' ? (
            <div className="newsletter-success" role="status" aria-live="polite">
              <p>Thank you for subscribing! Check your email for your discount code.</p>
            </div>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubmit} aria-label="Newsletter signup form">
              <div className="form-group">
                <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                <input type="email" id="newsletter-email" className={`newsletter-input ${status === 'error' ? 'input-error' : ''}`}
                  placeholder="Enter your email" value={email} onChange={(e) => { setEmail(e.target.value); if (status === 'error') setStatus('idle'); }}
                  aria-invalid={status === 'error'} aria-describedby={status === 'error' ? 'newsletter-error' : undefined} disabled={status === 'loading'} />
                <button type="submit" className="btn btn-primary newsletter-btn" disabled={status === 'loading'}
                  aria-label={status === 'loading' ? 'Signing up...' : 'Sign up for newsletter'}>
                  {status === 'loading' ? 'Signing Up...' : 'Sign Up'}
                </button>
              </div>
              {status === 'error' && errorMessage && <p id="newsletter-error" className="newsletter-error" role="alert" aria-live="polite">{errorMessage}</p>}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
// AI Generated Code by Deloitte + Cursor (END)
