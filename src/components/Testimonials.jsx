import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Pixvex Tech ne waqai kamaal kar diya! Professional work, zabardast design aur excellent service. Hamari expectations se bhi behtar result mila. Highly recommended!",
      clientName: "Usman",
      roleCompany: "Happy Client"
    },
    {
      id: 2,
      quote: "Working with Pixvex Tech felt like an extension of our internal team. Their focus on simple, practical solutions saved us months of development time and delivered an e-commerce platform with incredible speed.",
      clientName: "Thomas Smith",
      roleCompany: "Another Client Feedback"
    },
    {
      id: 3,
      quote: "The team's grasp of both modern UI/UX design and scalable development is rare. They built our customer portal from scratch with zero bloat and absolute architectural precision.",
      clientName: "Tariq Mahmud",
      roleCompany: "Client Feedback"
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-label" id="testimonials-small-label">
            CLIENT FEEDBACK
          </span>
          <h2 className="section-title" id="testimonials-main-heading">
            WHAT PEOPLE SAY
          </h2>
          <p className="section-subtitle">
            Feedback on our collaborative approach, technical discipline, and engineering delivery.
          </p>
        </div>

        <div className="testimonial-carousel-wrap" id="testimonials-carousel">
          <div className="testimonial-card" id={`testimonial-card-${current.id}`}>
            <div className="testimonial-stars" aria-label="5 stars rating">
              ★★★★★
            </div>

            <p className="testimonial-quote">
              "{current.quote}"
            </p>

            <div className="testimonial-author-name">{current.clientName}</div>
            <div className="testimonial-author-role">{current.roleCompany}</div>
          </div>

          <div className="carousel-controls" id="testimonials-controls">
            <button
              type="button"
              className="btn btn-secondary"
              id="testimonial-prev-btn"
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              <span>Previous</span>
            </button>

            <div className="carousel-dots" id="testimonial-dots">
              {testimonials.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              className="btn btn-secondary"
              id="testimonial-next-btn"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <span>Next</span>
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
