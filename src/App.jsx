import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Capabilities from './components/Capabilities.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Projects from './components/Projects.jsx';
import WhyPixvex from './components/WhyPixvex.jsx';
import Achievements from './components/Achievements.jsx';
import Process from './components/Process.jsx';
import Testimonials from './components/Testimonials.jsx';
import CTA from './components/CTA.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  // Theme state: default is strictly 'light' unless user explicitly saved 'dark' in localStorage
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('pixvex_theme');
      if (savedTheme === 'dark') {
        return 'dark';
      }
      return 'light';
    } catch {
      return 'light';
    }
  });

  // Keep data-theme attribute on documentElement synced with state
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [theme]);

  // Toggle theme handler
  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    try {
      localStorage.setItem('pixvex_theme', nextTheme);
    } catch (e) {
      console.warn('localStorage is not available', e);
    }
  };

  return (
    <div className="app-layout" id="pixvex-app">
      {/* Sticky Header with Navigation & Theme Toggle */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <Capabilities />
        <About />
        <Services />
        <Projects />
        <WhyPixvex />
        <Achievements />
        <Process />
        <Testimonials />
        <CTA />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
