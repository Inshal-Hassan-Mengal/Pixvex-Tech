import React from 'react';
import { Globe, Smartphone, Layout, Cpu, ShoppingBag, Palette, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      number: '01',
      title: 'WEB DEVELOPMENT',
      description: 'Responsive websites and web applications built for performance, usability, and scalability.',
      icon: Globe
    },
    {
      number: '02',
      title: 'APP DEVELOPMENT',
      description: 'Functional mobile and application experiences designed around real user needs.',
      icon: Smartphone
    },
    {
      number: '03',
      title: 'UI/UX DESIGN',
      description: 'Simple, intuitive interfaces that make digital products easier and more enjoyable to use.',
      icon: Layout
    },
    {
      number: '04',
      title: 'Responsive Design',
      description: 'We create websites and applications that look great and function flawlessly on any device.',
      icon: Cpu
    },
    {
      number: '05',
      title: 'E-COMMERCE',
      description: 'Modern online stores designed to create smooth shopping experiences and support business growth.',
      icon: ShoppingBag
    },
    {
      number: '06',
      title: 'BRANDING & DESIGN',
      description: 'Professional visual identities and digital branding systems that help businesses stand out.',
      icon: Palette
    }
  ];

  const handleServiceClick = (e) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section section-secondary" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-label" id="services-small-label">
            OUR SERVICES
          </span>
          <h2 className="section-title" id="services-main-heading">
            WHAT WE DO
          </h2>
          <p className="section-subtitle" id="services-subheading">
            Digital solutions designed around your goals.
          </p>
        </div>

        <div className="services-grid" id="services-grid">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                className="service-card"
                key={service.number}
                id={`service-card-${service.number}`}
              >
                <div className="service-card-top">
                  <div className="service-card-meta">
                    <span className="service-number">{service.number} / SERVICE</span>
                    <div className="service-icon-wrap">
                      <IconComponent size={20} aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.description}</p>
                </div>

                <a
                  href="#contact"
                  className="service-card-bottom"
                  onClick={handleServiceClick}
                  aria-label={`Inquire about ${service.title}`}
                >
                  <span>Discuss Project</span>
                  <ArrowRight size={16} className="service-arrow" aria-hidden="true" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
