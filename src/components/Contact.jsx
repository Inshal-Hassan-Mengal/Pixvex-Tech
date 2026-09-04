import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectType: 'Web Development',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const projectTypes = [
    'Web Development',
    'App Development',
    'UI/UX Design',
    'AI & Automation',
    'E-Commerce Solutions',
    'Branding & Digital Solutions',
    'General Inquiry'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please provide your full name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a brief message or project description.';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Simulate reliable frontend submission
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      projectType: 'Web Development',
      message: ''
    });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-grid">
          {/* Left Side: Contact Information & Direct Channels */}
          <div className="contact-info-col">
            <span className="section-label" id="contact-small-label">
              GET IN TOUCH
            </span>

            <h2 className="contact-info-title" id="contact-main-heading">
              LET'S START A CONVERSATION.
            </h2>

            <p className="contact-info-desc" id="contact-supporting-text">
              Tell us about your project, idea, or business challenge. We review every inquiry
              carefully and reply with clear next steps.
            </p>

            <div className="contact-details-list" id="contact-details-list">
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <Mail size={18} aria-hidden="true" />
                </div>
                <div>
                  <div className="contact-detail-label">Email</div>
                  <a
                    href="mailto:hello@pixvextech.com"
                    className="contact-detail-val"
                    id="contact-email-link"
                  >
                    hello@pixvextech.com
                  </a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <Phone size={18} aria-hidden="true" />
                </div>
                <div>
                  <div className="contact-detail-label">Phone</div>
                  <div className="contact-detail-val" id="contact-phone-val">
                    +92 XXX XXXXXXX
                  </div>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <MapPin size={18} aria-hidden="true" />
                </div>
                <div>
                  <div className="contact-detail-label">Location</div>
                  <div className="contact-detail-val" id="contact-location-val">
                    Pakistan
                  </div>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <Clock size={18} aria-hidden="true" />
                </div>
                <div>
                  <div className="contact-detail-label">Response Time</div>
                  <div className="contact-detail-val">Within 24 business hours</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Form */}
          <div className="contact-form-col">
            <div className="contact-form-card" id="contact-form-card">
              {submitted ? (
                <div className="form-success-banner" id="form-submission-success">
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                    <CheckCircle2 size={48} color="var(--accent)" />
                  </div>
                  <h3 className="form-success-title">
                    Thank you! Your message has been received.
                  </h3>
                  <p className="form-success-desc">
                    Our team will review your specifications and get back to you within 24 hours at{' '}
                    <strong>{formData.email}</strong>.
                  </p>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    id="btn-send-another-message"
                    onClick={handleReset}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form id="pixvex-contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="form-group">
                    <label className="form-label" htmlFor="fullName">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      className="form-input"
                      placeholder="e.g. Alexander Cole"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                    {errors.fullName && <div className="form-error">{errors.fullName}</div>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      placeholder="e.g. alexander@company.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <div className="form-error">{errors.email}</div>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-input"
                      placeholder="+92 XXX XXXXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="projectType">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      className="form-select"
                      value={formData.projectType}
                      onChange={handleChange}
                    >
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">
                      Project Description or Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-textarea"
                      placeholder="Briefly describe your goals, timeline, and current requirements..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                    {errors.message && <div className="form-error">{errors.message}</div>}
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    id="contact-submit-button"
                    style={{ width: '100%', padding: '14px 24px' }}
                  >
                    <span>SEND MESSAGE</span>
                    <Send size={16} aria-hidden="true" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
