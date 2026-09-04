import React, { useState } from 'react';
import { ArrowRight, Menu, X, Moon, Sun } from 'lucide-react';

export default function Navbar({ theme, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar-wrapper" id="main-header">
      <div className="container">
        <nav className="navbar" id="navbar" aria-label="Main Navigation">
          {/* Logo */}
          <a
            href="#hero"
            className="nav-brand"
            id="nav-brand-logo"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#hero');
            }}
          >
            <span className="brand-icon">P</span>
            <span>PIXVEX TECH</span>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="nav-links" id="desktop-nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="nav-link"
                  id={`nav-link-${link.name.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="nav-actions" id="desktop-nav-actions">
            {/* Theme Toggle Button */}
            <button
              type="button"
              className="theme-toggle-btn"
              id="theme-toggle-desktop"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <Sun size={18} aria-hidden="true" />
              ) : (
                <Moon size={18} aria-hidden="true" />
              )}
            </button>

            {/* Let's Talk CTA */}
            <a
              href="#contact"
              className="btn btn-dark"
              id="nav-cta-button"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contact');
              }}
            >
              <span>Let's Talk</span>
              <ArrowRight size={16} aria-hidden="true" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className="hamburger-btn"
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`mobile-nav-overlay ${mobileMenuOpen ? 'open' : ''}`}
        id="mobile-nav-drawer"
        aria-hidden={!mobileMenuOpen}
      >
        <ul className="mobile-nav-links" id="mobile-nav-links-list">
          {navLinks.map((link) => (
            <li key={`mobile-${link.name}`}>
              <a
                href={link.href}
                className="mobile-nav-link"
                id={`mobile-nav-${link.name.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
              >
                <span>{link.name}</span>
                <ArrowRight size={18} color="var(--accent)" />
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-nav-footer">
          <div className="mobile-theme-row">
            <span>Appearance: {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
            <button
              type="button"
              className="theme-toggle-btn"
              id="theme-toggle-mobile"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <a
            href="#contact"
            className="btn btn-primary"
            id="mobile-nav-cta"
            style={{ width: '100%' }}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#contact');
            }}
          >
            <span>Let's Talk</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </header>
  );
}
