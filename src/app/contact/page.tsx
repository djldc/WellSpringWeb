'use client';

import { FormEvent } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { useToast } from '@/components/Toast';

export default function ContactPage() {
  const { showToast } = useToast();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    showToast('Message sent successfully! We\'ll get back to you soon.', 'success');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <Navbar />
      <PageHeader title="Let's" titleHighlight="Talk" description="Ready to start your project? Have questions? We'd love to hear from you. Get in touch and we'll respond within 24 hours." breadcrumb="Contact" />

      <section className="contact-form-section">
        <div className="container">
          <div className="contact-grid">
            <div className="slide-right">
              <h2 style={{ marginBottom: '8px' }}>Get in Touch</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>Fill out the form and we&apos;ll schedule a free consultation to discuss your project.</p>

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div><h4>Email Us</h4><p>hello@wellspringdigital.com</p></div>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                </div>
                <div><h4>Call Us</h4><p>(555) 123-4567</p></div>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div><h4>Office</h4><p>123 Digital Way, Suite 200<br />Your City, ST 12345</p></div>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-icon" style={{ background: '#D1FAE5', color: '#059669' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div><h4>Business Hours</h4><p>Mon - Fri: 9:00 AM - 6:00 PM EST</p></div>
              </div>
            </div>

            <div className="slide-left">
              <form onSubmit={handleSubmit} style={{ background: 'var(--bg-white)', border: '1px solid var(--earth-200)', borderRadius: 'var(--radius-lg)', padding: '40px', boxShadow: 'var(--shadow-md)' }}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input type="text" id="firstName" name="firstName" className="form-control" placeholder="John" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input type="text" id="lastName" name="lastName" className="form-control" placeholder="Smith" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input type="email" id="email" name="email" className="form-control" placeholder="john@example.com" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" className="form-control" placeholder="(555) 123-4567" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="service">Service Interested In</label>
                  <select id="service" name="service" className="form-control">
                    <option value="">Select a service...</option>
                    <option>Custom Web Design</option>
                    <option>Web Development</option>
                    <option>Brand Identity</option>
                    <option>SEO &amp; Marketing</option>
                    <option>Website Template</option>
                    <option>Maintenance Plan</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="budget">Project Budget</label>
                  <select id="budget" name="budget" className="form-control">
                    <option value="">Select your budget range...</option>
                    <option>Under $1,000</option>
                    <option>$1,000 - $2,500</option>
                    <option>$2,500 - $5,000</option>
                    <option>$5,000 - $10,000</option>
                    <option>$10,000+</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Tell Us About Your Project *</label>
                  <textarea id="message" name="message" className="form-control" placeholder="Describe your project, goals, and any specific requirements..." required></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>Send Message <span className="btn-icon">&rarr;</span></button>
                <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '16px', marginBottom: 0 }}>We&apos;ll respond within 24 hours. No spam, ever.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}