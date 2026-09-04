import React, { useState, useEffect } from 'react';
import { ArrowRight, X, ExternalLink, CheckCircle } from 'lucide-react';

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveProject(null);
      }
    };
    if (activeProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeProject]);

  const projects = [
    {
      id: '01',
      title: 'Business Management Platform',
      category: 'Enterprise Software',
      shortDesc: 'A centralized operations and workflow dashboard designed for team coordination, financial tracking, and operational efficiency.',
      fullDesc: 'Engineered a unified business management workspace that consolidates resource allocation, project scheduling, and real-time operational metrics. The solution minimizes fragmented SaaS tooling while providing executive leadership with actionable performance transparency.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'REST API', 'Docker'],
      features: [
        'Automated team scheduling & task dependencies',
        'Real-time financial analytics and invoice generation',
        'Role-based security clearance & audit logging'
      ],
      previewType: 'dashboard'
    },
    {
      id: '02',
      title: 'E-Commerce Experience',
      category: 'Digital Retail',
      shortDesc: 'A high-performance online store engineered with frictionless checkout and real-time inventory management.',
      fullDesc: 'Architected a lightning-fast commerce platform prioritizing conversion optimization, dynamic product filtering, and swift mobile checkout. Designed to withstand peak seasonal promotional traffic with sub-second page loads.',
      technologies: ['Next-Gen React', 'Tailored CSS', 'Stripe API', 'Redis', 'Headless CMS'],
      features: [
        'Sub-second page rendering for high conversion',
        'Seamless multi-currency & localized payment gateways',
        'Automated real-time inventory reconciliation'
      ],
      previewType: 'store'
    },
    {
      id: '03',
      title: 'Modern Portfolio Platform',
      category: 'Creative Technology',
      shortDesc: 'An interactive showcase built for a global architectural firm, featuring spatial layouts and project case studies.',
      fullDesc: 'Developed a refined digital portfolio for an international architectural studio. Emphasizing generous typography, crisp photographic presentation, and smooth layout transitions that reflect the firm’s precision ethos.',
      technologies: ['React', 'CSS Grid', 'WebGL Minimal', 'Responsive Media API'],
      features: [
        'Adaptive high-resolution architectural imagery',
        'Spatial filtering by typology and geographic region',
        'Accessible client presentation decks'
      ],
      previewType: 'portfolio'
    },
    {
      id: '04',
      title: 'AI Productivity Assistant',
      category: 'AI & Automation',
      shortDesc: 'An intelligent workspace companion that automates document summarization, meeting action items, and data synthesis.',
      fullDesc: 'Constructed an intuitive generative assistant workflow for knowledge workers. Features privacy-first context embedding, fast conversational query retrieval, and automated task dispatching to team project boards.',
      technologies: ['React', 'Python Microservices', 'Vector Search', 'WebSockets'],
      features: [
        'Privacy-first document ingestion & contextual query',
        'Instant multi-channel meeting takeaways synthesis',
        'Direct automated integration with ticketing systems'
      ],
      previewType: 'ai'
    },
    {
      id: '05',
      title: 'Mobile Application',
      category: 'Mobile Experience',
      shortDesc: 'A cross-platform mobile app offering intuitive account management, instant alerts, and secure biometric authentication.',
      fullDesc: 'Designed and engineered an enterprise client mobile companion. Delivered seamless offline synchronisation, tactile gesture navigation, and strict compliance with platform-specific design patterns.',
      technologies: ['React Native Architecture', 'TypeScript', 'Secure Enclave', 'GraphQL'],
      features: [
        'Biometric zero-friction authentication',
        'Offline-first synchronization with resilient conflict resolution',
        'Granular push notification preference center'
      ],
      previewType: 'mobile'
    }
  ];

  // Helper to render crisp visual UI mockup representations
  const renderMockupVisual = (type) => {
    switch (type) {
      case 'dashboard':
        return (
          <div style={{ width: '100%', height: '100%', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent)' }}></span>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--border-color)' }}></span>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--border-color)' }}></span>
              </div>
              <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-display)' }}>DASHBOARD // OVERVIEW</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
              <div style={{ background: 'var(--bg-secondary)', padding: '10px', borderRadius: '4px', border: '1px solid var(--border-color)' }}>
                <div style={{ fontSize: '10px', color: 'var(--text-muted)' }}>REVENUE MTD</div>
                <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-primary)' }}>$128,450</div>
              </div>
              <div style={{ background: 'var(--bg-secondary)', padding: '10px', borderRadius: '4px', border: '1px solid var(--border-color)' }}>
                <div style={{ fontSize: '10px', color: 'var(--text-muted)' }}>ACTIVE USERS</div>
                <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-primary)' }}>14,280</div>
              </div>
              <div style={{ background: 'var(--bg-secondary)', padding: '10px', borderRadius: '4px', border: '1px solid var(--border-color)' }}>
                <div style={{ fontSize: '10px', color: 'var(--text-muted)' }}>EFFICIENCY</div>
                <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--accent)' }}>+24.6%</div>
              </div>
            </div>
            <div style={{ flex: 1, background: 'var(--bg-secondary)', borderRadius: '4px', border: '1px solid var(--border-color)', padding: '12px', display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
              <div style={{ height: '40%', width: '12%', background: 'var(--border-color)', borderRadius: '2px' }}></div>
              <div style={{ height: '65%', width: '12%', background: 'var(--border-color)', borderRadius: '2px' }}></div>
              <div style={{ height: '50%', width: '12%', background: 'var(--border-color)', borderRadius: '2px' }}></div>
              <div style={{ height: '80%', width: '12%', background: 'var(--border-color)', borderRadius: '2px' }}></div>
              <div style={{ height: '95%', width: '12%', background: 'var(--accent)', borderRadius: '2px' }}></div>
              <div style={{ height: '70%', width: '12%', background: 'var(--border-color)', borderRadius: '2px' }}></div>
              <div style={{ height: '85%', width: '12%', background: 'var(--accent)', borderRadius: '2px' }}></div>
            </div>
          </div>
        );
      case 'store':
        return (
          <div style={{ width: '100%', height: '100%', padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '6px' }}>
              <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-primary)' }}>STORE // COLLECTION 2026</span>
              <span style={{ fontSize: '10px', color: 'var(--accent)' }}>CART (2)</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', flex: 1 }}>
              <div style={{ background: 'var(--bg-secondary)', borderRadius: '4px', border: '1px solid var(--border-color)', padding: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ height: '60px', background: 'var(--bg-card)', borderRadius: '3px', border: '1px solid var(--border-color)' }}></div>
                <div style={{ fontSize: '11px', fontWeight: '600' }}>Minimal Chrono</div>
                <div style={{ fontSize: '10px', color: 'var(--text-muted)' }}>$240.00</div>
              </div>
              <div style={{ background: 'var(--bg-secondary)', borderRadius: '4px', border: '1px solid var(--border-color)', padding: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ height: '60px', background: 'var(--bg-card)', borderRadius: '3px', border: '1px solid var(--border-color)' }}></div>
                <div style={{ fontSize: '11px', fontWeight: '600' }}>Executive Case</div>
                <div style={{ fontSize: '10px', color: 'var(--text-muted)' }}>$185.00</div>
              </div>
            </div>
          </div>
        );
      case 'portfolio':
        return (
          <div style={{ width: '100%', height: '100%', padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>ARCHITECTURAL ARCHIVE</div>
            <div style={{ flex: 1, background: 'var(--bg-secondary)', borderRadius: '4px', border: '1px solid var(--border-color)', padding: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ fontSize: '15px', fontWeight: '800', letterSpacing: '-0.02em', color: 'var(--text-primary)', marginBottom: '4px' }}>
                THE MONOLITH HOUSE
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>Zürich, Switzerland • 2026</div>
              <div style={{ marginTop: '12px', height: '4px', width: '36px', background: 'var(--accent)' }}></div>
            </div>
          </div>
        );
      case 'ai':
        return (
          <div style={{ width: '100%', height: '100%', padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--accent)', fontWeight: '600' }}>
              <span>AI SYNTHESIS AGENT</span>
              <span>READY</span>
            </div>
            <div style={{ background: 'var(--bg-secondary)', borderRadius: '4px', padding: '8px 10px', fontSize: '11px', color: 'var(--text-secondary)' }}>
              "Synthesizing Q3 roadmap requirements into 4 actionable project deliverables..."
            </div>
            <div style={{ background: 'var(--bg-card)', borderRadius: '4px', border: '1px solid var(--border-color)', padding: '10px', fontSize: '11px', color: 'var(--text-primary)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div>• Automated ticket generation verified</div>
              <div>• Continuous pipeline configured</div>
            </div>
          </div>
        );
      case 'mobile':
        return (
          <div style={{ width: '100%', height: '100%', padding: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '160px', height: '100%', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ width: '30px', height: '3px', background: 'var(--border-color)', borderRadius: '2px', alignSelf: 'center' }}></div>
              <div style={{ fontSize: '10px', fontWeight: '700', color: 'var(--text-primary)' }}>Secure Wallet</div>
              <div style={{ background: 'var(--bg-card)', borderRadius: '6px', padding: '6px', border: '1px solid var(--border-color)' }}>
                <div style={{ fontSize: '8px', color: 'var(--text-muted)' }}>Balance</div>
                <div style={{ fontSize: '11px', fontWeight: '700' }}>$42,190.00</div>
              </div>
              <div style={{ height: '24px', background: 'var(--accent)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '9px', fontWeight: '600' }}>
                Transfer
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-label" id="projects-small-label">
            SELECTED WORK
          </span>
          <h2 className="section-title" id="projects-main-heading">
            DIGITAL PRODUCTS BUILT TO MAKE AN IMPACT.
          </h2>
          <p className="section-subtitle" id="projects-subheading">
            A curated portfolio of platforms, applications, and custom digital systems engineered for ambitious organizations.
          </p>
        </div>

        <div className="projects-grid" id="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              id={`project-card-${project.id}`}
              onClick={() => setActiveProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveProject(project);
                }
              }}
              aria-label={`View details for ${project.title}`}
            >
              <div className="project-mockup-wrapper">
                <div className="project-mockup-preview">
                  {renderMockupVisual(project.previewType)}
                </div>
              </div>

              <div className="project-info">
                <div>
                  <div className="project-category">{project.category}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.shortDesc}</p>
                </div>

                <div className="project-action-link">
                  <span>View Project</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {activeProject && (
        <div
          className="modal-backdrop"
          id="project-modal-backdrop"
          onClick={() => setActiveProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          <div
            className="modal-box"
            id="project-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close-btn"
              id="modal-close-button"
              onClick={() => setActiveProject(null)}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="modal-category">{activeProject.category}</div>
            <h2 className="modal-title" id="modal-project-title">
              {activeProject.title}
            </h2>

            <div className="modal-image-wrap">
              <div style={{ height: '240px', width: '100%' }}>
                {renderMockupVisual(activeProject.previewType)}
              </div>
            </div>

            <p className="modal-desc">{activeProject.fullDesc}</p>

            <div style={{ marginBottom: '16px', fontWeight: '700', fontSize: '0.875rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Technologies Deployed:
            </div>
            <div className="modal-tech-list">
              {activeProject.technologies.map((tech) => (
                <span key={tech} className="modal-tech-pill">
                  {tech}
                </span>
              ))}
            </div>

            <div style={{ marginBottom: '16px', fontWeight: '700', fontSize: '0.875rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Key Outcomes & Highlights:
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '28px' }}>
              {activeProject.features.map((feat, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle size={16} color="var(--accent)" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href="#contact"
                className="btn btn-primary"
                onClick={() => {
                  setActiveProject(null);
                  const contactSection = document.querySelector('#contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <span>Request Similar Solution</span>
                <ArrowRight size={16} />
              </a>

              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setActiveProject(null)}
              >
                <span>Close Details</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
