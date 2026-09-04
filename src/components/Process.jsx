import React from 'react';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'DISCOVER',
      phase: 'Phase 1',
      description: 'Understand the business, audience, goals, and requirements through rigorous stakeholder alignment.'
    },
    {
      number: '02',
      title: 'STRATEGIZE',
      phase: 'Phase 2',
      description: 'Define the structure, functionality, technology, and architectural roadmap for predictable delivery.'
    },
    {
      number: '03',
      title: 'DESIGN',
      phase: 'Phase 3',
      description: 'Create the interface, visual system, and user experience with clean prototypes and design systems.'
    },
    {
      number: '04',
      title: 'DEVELOP',
      phase: 'Phase 4',
      description: 'Build, test, optimize, and refine the digital product using modern component architecture.'
    },
    {
      number: '05',
      title: 'LAUNCH',
      phase: 'Phase 5',
      description: 'Deploy the product to production and ensure everything operates reliably across all devices.'
    },
    {
      number: '06',
      title: 'SUPPORT',
      phase: 'Phase 6',
      description: 'Continue improving, monitoring, and maintaining the product as user adoption and business expand.'
    }
  ];

  return (
    <section className="section section-secondary" id="process">
      <div className="container">
        <div className="section-header">
          <span className="section-label" id="process-small-label">
            OUR PROCESS
          </span>
          <h2 className="section-title" id="process-main-heading">
            FROM IDEA TO REALITY.
          </h2>
          <p className="section-subtitle" id="process-subheading">
            A battle-tested six-stage framework engineered to eliminate guesswork and turn requirements into robust production software.
          </p>
        </div>

        <div className="process-grid" id="process-timeline-grid">
          {steps.map((step) => (
            <div
              className="process-card"
              key={step.number}
              id={`process-step-${step.number}`}
            >
              <div className="process-step-header">
                <span className="process-num">{step.number}</span>
                <span className="process-badge">{step.phase}</span>
              </div>

              <h3 className="process-title">{step.title}</h3>
              <p className="process-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
