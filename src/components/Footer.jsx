import React from 'react';
import { ArrowUp, Github, Linkedin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const scrollTo = (selector) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' }
  ];

  const servicesList = [
    'Web Development',
    'App Development',
    'UI/UX Design',
    'AI & Automation',
    'E-Commerce',
    'Branding'
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' }
  ];

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Column 1: Brand & Tagline */}
          <div>
            <a
              href="#hero"
              className="nav-brand"
              id="footer-brand-logo"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#hero');
              }}
            >
              <span className="brand-icon">P</span>
              <span>PIXVEX TECH</span>
            </a>
            <p className="footer-brand-tagline">
              Building digital experiences that move businesses forward.
            </p>
            <div style={{ marginTop: '12px', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
              Technology. Design. Digital Solutions.
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <div className="footer-column-title">Navigation</div>
            <ul className="footer-links-list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="footer-link"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <div className="footer-column-title">Services</div>
            <ul className="footer-links-list">
              {servicesList.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="footer-link"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo('#services');
                    }}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social & Engagement */}
          <div>
            <div className="footer-column-title">Connect</div>
            <div className="footer-social-row" id="footer-social-links">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-btn"
                    aria-label={`Visit Pixvex Tech on ${item.name}`}
                    title={item.name}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
            <div style={{ marginTop: '24px', fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
              Inquiries:{' '}
              <a href="mailto:hello@pixvextech.com" style={{ color: 'var(--accent)', fontWeight: '600' }}>
                hello@pixvextech.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div>© 2026 Pixvex Tech. All Rights Reserved.</div>

          <button
            type="button"
            className="back-to-top-btn"
            id="footer-back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
