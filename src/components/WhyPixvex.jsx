import React from 'react';
import { Target, Layers, Users, TrendingUp } from 'lucide-react';

export default function WhyPixvex() {
  const advantages = [
    {
      number: '01',
      title: 'SIMPLE SOLUTIONS',
      description: 'We focus on solving the actual problem instead of adding unnecessary complexity.',
      icon: Target
    },
    {
      number: '02',
      title: 'MODERN TECHNOLOGY',
      description: 'We use modern development practices to create reliable digital products.',
      icon: Layers
    },
    {
      number: '03',
      title: 'USER FIRST',
      description: 'We design around the people who will actually use the product.',
      icon: Users
    },
    {
      number: '04',
      title: 'LONG-TERM THINKING',
      description: 'We create solutions that can evolve as your business grows.',
      icon: TrendingUp
    }
  ];

  return (
    <section className="section section-secondary" id="why-pixvex">
      <div className="container">
        <div className="section-header">
          <span className="section-label" id="why-small-label">
            WHY PIXVEX TECH
          </span>
          <h2 className="section-title" id="why-main-heading">
            DIGITAL SOLUTIONS BUILT AROUND REAL PROBLEMS.
          </h2>
          <p className="section-subtitle" id="why-subheading">
            We reject frivolous fluff in favor of architectural clarity, purposeful code, and durable software.
          </p>
        </div>

        <div className="why-grid" id="why-advantages-grid">
          {advantages.map((item) => {
            const Icon = item.icon;
            return (
              <div className="why-card" key={item.number} id={`why-card-${item.number}`}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <span className="why-number">{item.number}</span>
                    <Icon size={20} color="var(--accent)" />
                  </div>
                  <h3 className="why-title">{item.title}</h3>
                  <p className="why-desc">{item.description}</p>
                </div>

                <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--border-color)', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                  Pillar {item.number} • Guaranteed Standard
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
