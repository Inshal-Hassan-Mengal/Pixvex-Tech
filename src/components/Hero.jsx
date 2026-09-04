import React from 'react';
import { ArrowRight, Terminal, Layers, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  const scrollTo = (selector) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section hero-section" id="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Typography & Actions */}
          <div className="hero-content">
            <div className="hero-badge" id="hero-small-label">
              <span className="hero-badge-line"></span>
              <span>Digital Solutions • Development • Design</span>
            </div>

            <h1 className="hero-heading" id="hero-main-heading">
              BUILDING DIGITAL EXPERIENCES THAT MOVE BUSINESSES FORWARD.
            </h1>

            <p className="hero-description" id="hero-supporting-text">
              Pixvex Tech helps businesses, startups, and organizations turn ideas into reliable
              digital products through thoughtful design, modern development, and practical technology.
            </p>

            <div className="hero-actions" id="hero-action-buttons">
              <button
                type="button"
                className="btn btn-primary"
                id="hero-btn-start-project"
                onClick={() => scrollTo('#contact')}
              >
                <span>Start a Project</span>
                <ArrowRight size={16} aria-hidden="true" />
              </button>

              <button
                type="button"
                className="btn btn-secondary"
                id="hero-btn-explore-work"
                onClick={() => scrollTo('#projects')}
              >
                <span>Explore Our Work</span>
              </button>
            </div>

            <div className="hero-trust-metrics" id="hero-trust-metrics-strip">
              <div className="hero-trust-item">
                <ShieldCheck size={16} color="var(--accent)" />
                <span>Production-Ready Code</span>
              </div>
              <div className="hero-trust-item">
                <Zap size={16} color="var(--accent)" />
                <span>Modern Architecture</span>
              </div>
              <div className="hero-trust-item">
                <span className="hero-trust-dot"></span>
                <span>Practical Scalability</span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Digital Visual */}
          <div className="hero-visual-wrapper" id="hero-system-visual">
            <div className="hero-visual-card">
              <div className="visual-card-header">
                <div className="visual-accent-line"></div>
                <div className="visual-status-pill">
                  <span className="status-dot-green"></span>
                  <span>System Active</span>
                </div>
              </div>

              {/* Minimal UI Blocks */}
              <div className="visual-modules-grid">
                <div className="visual-module">
                  <div className="visual-module-tag">Core Engine</div>
                  <div className="visual-module-val">Optimal</div>
                </div>
                <div className="visual-module">
                  <div className="visual-module-tag">Uptime SLA</div>
                  <div className="visual-module-val">99.98%</div>
                </div>
              </div>

              {/* Code & Terminal Block */}
              <div className="visual-terminal-block">
                <div>
                  <span className="code-keyword">const</span> deployment ={' '}
                  <span className="code-accent">Pixvex.deliver</span>&#40;&#123;
                </div>
                <div style={{ paddingLeft: '14px' }}>
                  quality: <span style={{ color: 'var(--accent)' }}>"Production Ready"</span>,
                </div>
                <div style={{ paddingLeft: '14px' }}>
                  designSystem: <span style={{ color: 'var(--accent)' }}>"Precision UI/UX"</span>,
                </div>
                <div>&#125;&#41;;</div>
              </div>

              {/* Optimization Metric Block */}
              <div className="visual-metric-block">
                <div>
                  <div className="metric-rate-label">Optimization Rate</div>
                  <div className="metric-rate-val">98.4%</div>
                </div>
                <div className="visual-dots">
                  <span className="visual-dot active"></span>
                  <span className="visual-dot active"></span>
                  <span className="visual-dot"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
