import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="cta-section" id="cta-section">
      <div className="container">
        <div className="cta-box">
          <span className="section-label" id="cta-small-label">
            HAVE AN IDEA?
          </span>

          <h2 className="cta-heading" id="cta-main-heading">
            LET'S BUILD SOMETHING MEANINGFUL.
          </h2>

          <p className="cta-desc" id="cta-supporting-text">
            Whether you're starting something new or improving an existing product,
            Pixvex Tech can help turn your idea into a practical digital solution.
          </p>

          <a
            href="#contact"
            className="btn btn-primary"
            id="cta-action-button"
            onClick={handleScrollToContact}
            style={{ fontSize: '1rem', padding: '14px 32px' }}
          >
            <span>Let's Talk</span>
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
