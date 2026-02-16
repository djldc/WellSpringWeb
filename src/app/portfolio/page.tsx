'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';

const projects = [
  { name: 'Harmony Chiropractic', category: 'healthcare', label: 'Healthcare • Custom Design + SEO', gradient: 'linear-gradient(135deg, #8B3A4A, #B5677A)', icon: '<path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>' },
  { name: 'Blue Ridge Wellness', category: 'wellness', label: 'Wellness • Branding + Development', gradient: 'linear-gradient(135deg, #2563EB, #60A5FA)', icon: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>' },
  { name: 'NaturePath Clinic', category: 'healthcare', label: 'Healthcare • Full Build + HIPAA', gradient: 'linear-gradient(135deg, #059669, #34D399)', icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>' },
  { name: 'Apex Consulting Group', category: 'business', label: 'Business • Web Design + Branding', gradient: 'linear-gradient(135deg, #7C3AED, #A78BFA)', icon: '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>' },
  { name: 'Sunrise Yoga Studio', category: 'wellness', label: 'Wellness • E-commerce + Booking', gradient: 'linear-gradient(135deg, #C4953A, #D4A843)', icon: '<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>' },
  { name: 'Vitality Sports Medicine', category: 'healthcare', label: 'Healthcare • Custom Design + SEO', gradient: 'linear-gradient(135deg, #DC2626, #F87171)', icon: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>' },
  { name: 'Evergreen Real Estate', category: 'business', label: 'Business • Website + IDX Integration', gradient: 'linear-gradient(135deg, #0369A1, #38BDF8)', icon: '<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>' },
  { name: 'Serenity Spa & Wellness', category: 'wellness', label: 'Wellness • Full Brand + Website', gradient: 'linear-gradient(135deg, #DB2777, #F472B6)', icon: '<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>' },
  { name: 'Peak Performance PT', category: 'healthcare', label: 'Healthcare • Booking + Patient Portal', gradient: 'linear-gradient(135deg, #4F46E5, #818CF8)', icon: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>' },
];

const filters = [
  { value: 'all', label: 'All Projects' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'wellness', label: 'Wellness' },
  { value: 'business', label: 'Business' },
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <>
      <Navbar />
      <PageHeader title="Our" titleHighlight="Portfolio" description="Real projects, real results. Browse our collection of websites crafted for healthcare providers and growing businesses." breadcrumb="Portfolio" />

      <section className="portfolio" style={{ background: 'var(--bg-white)', paddingTop: '60px' }}>
        <div className="container">
          <div className="template-filters fade-up">
            {filters.map(f => (
              <button key={f.value} className={`filter-btn ${filter === f.value ? 'active' : ''}`} onClick={() => setFilter(f.value)}>{f.label}</button>
            ))}
          </div>
          <div className="portfolio-grid stagger">
            {filtered.map(project => (
              <div key={project.name} className="portfolio-item">
                <div className="portfolio-image">
                  <div className="placeholder-img" style={{ background: project.gradient }}>
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" dangerouslySetInnerHTML={{ __html: project.icon }} />
                  </div>
                  <div className="portfolio-overlay"><span>View Project</span></div>
                </div>
                <div className="portfolio-info">
                  <h3>{project.name}</h3>
                  <p className="category">{project.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want Results Like These?"
        description="Let's discuss your project and create a website that grows your practice."
        primaryBtn={{ label: 'Start Your Project', href: '/contact' }}
      />
      <Footer />
    </>
  );
}