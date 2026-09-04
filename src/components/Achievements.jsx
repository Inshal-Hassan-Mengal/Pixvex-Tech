import React from 'react';
import { Award, Code2, Sparkles, ShieldCheck } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      title: 'Digital Excellence',
      description: 'Engineered for high performance, sub-second responses, and solid accessibility standards.',
      icon: Award
    },
    {
      title: 'Creative Solutions',
      description: 'Interfaces and visual structures meticulously crafted to convert visitors into loyal clients.',
      icon: Sparkles
    },
    {
      title: 'Technology Innovation',
      description: 'Leveraging contemporary frameworks, intelligent automation, and resilient cloud patterns.',
      icon: Code2
    },
    {
      title: 'Quality Development',
      description: 'Strict code reviews, type-safe workflows, clean architecture, and modular scalability.',
      icon: ShieldCheck
    }
  ];

  return (
    <section className="section" id="achievements">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-label" id="achievements-small-label">
            CREDIBILITY & STANDARDS
          </span>
          <h2 className="section-title" id="achievements-main-heading">
            OUR COMMITMENT TO EXCELLENCE
          </h2>
          <p className="section-subtitle">
            Core engineering benchmarks and quality commitments that anchor every single line of code we write.
          </p>
        </div>

        <div className="achievements-grid" id="achievements-grid">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                className="achievement-card"
                key={item.title}
                id={`achievement-card-${index + 1}`}
              >
                <div className="achievement-icon">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3 className="achievement-title">{item.title}</h3>
                <p className="achievement-desc">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
