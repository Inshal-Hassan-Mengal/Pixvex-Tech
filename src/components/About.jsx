import React from 'react';

export default function About() {
  const stats = [
    { number: '25+', label: 'Projects' },
    { number: '15+', label: 'Digital Solutions' },
    { number: '10+', label: 'Businesses Supported' },
    { number: '100%', label: 'Commitment' }
  ];

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Narrative */}
          <div className="about-text-content">
            <span className="section-label" id="about-small-label">
              ABOUT PIXVEX TECH
            </span>

            <h2 className="section-title" id="about-heading">
              TECHNOLOGY WITH PURPOSE.
            </h2>

            <p id="about-p1">
              Pixvex Tech is a digital technology company focused on creating meaningful
              digital experiences for businesses, startups, and organizations.
            </p>

            <p id="about-p2">
              We combine thoughtful design, modern development, and practical technology
              to build digital products that are easy to use, reliable, and designed around
              real-world goals.
            </p>
          </div>

          {/* Right Column: Key Statistics */}
          <div className="about-stats-grid" id="about-statistics-grid">
            {stats.map((item, index) => (
              <div className="stat-box" key={item.label} id={`stat-box-${index + 1}`}>
                <div className="stat-number">{item.number}</div>
                <div className="stat-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
