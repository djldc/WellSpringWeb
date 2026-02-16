import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = { title: 'Services' };

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <PageHeader title="Our" titleHighlight="Services" description="Comprehensive digital solutions designed to help your practice attract more patients, build trust, and grow your revenue." breadcrumb="Services" />

      {/* DETAILED SERVICES */}
      <section className="services">
        <div className="container">
          <div className="services-grid stagger">
            <div className="service-card">
              <div className="service-icon icon-design">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
              </div>
              <h3>Custom Web Design</h3>
              <p>Every practice is unique, and your website should be too. We create bespoke designs that capture your brand&apos;s personality, build patient trust, and drive conversions. Our designs are crafted from scratch &mdash; no cookie-cutter templates here.</p>
              <p style={{ marginBottom: '16px' }}><strong>Includes:</strong> Custom mockups, unlimited revisions, mobile-responsive design, accessibility compliance, and brand-aligned visual identity.</p>
              <Link href="/contact" className="service-link">Request a Quote <span className="arrow">&rarr;</span></Link>
            </div>
            <div className="service-card">
              <div className="service-icon icon-dev">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              <h3>Web Development</h3>
              <p>Lightning-fast, secure, and built to scale. We use modern web technologies to build websites that load instantly, rank higher on Google, and provide a seamless experience on every device and browser.</p>
              <p style={{ marginBottom: '16px' }}><strong>Includes:</strong> Clean, semantic code, performance optimization, SSL security, CMS integration, and cross-browser testing.</p>
              <Link href="/contact" className="service-link">Request a Quote <span className="arrow">&rarr;</span></Link>
            </div>
            <div className="service-card">
              <div className="service-icon icon-brand">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
              </div>
              <h3>Brand Identity</h3>
              <p>Your brand is more than a logo &mdash; it&apos;s the feeling patients get when they encounter your practice. We create complete brand identities that communicate professionalism, warmth, and trustworthiness.</p>
              <p style={{ marginBottom: '16px' }}><strong>Includes:</strong> Logo design, color palette, typography system, brand guidelines, business card design, and social media assets.</p>
              <Link href="/contact" className="service-link">Request a Quote <span className="arrow">&rarr;</span></Link>
            </div>
            <div className="service-card">
              <div className="service-icon icon-seo">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              </div>
              <h3>SEO &amp; Local Marketing</h3>
              <p>Get found by patients who are actively searching for your services. Our healthcare-focused SEO strategies boost your visibility in local search results and Google Maps, driving qualified traffic to your door.</p>
              <p style={{ marginBottom: '16px' }}><strong>Includes:</strong> Keyword research, on-page SEO, Google Business Profile optimization, local citations, and monthly reporting.</p>
              <Link href="/contact" className="service-link">Request a Quote <span className="arrow">&rarr;</span></Link>
            </div>
            <div className="service-card">
              <div className="service-icon icon-template">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
              </div>
              <h3>Premium Templates</h3>
              <p>Need a professional website fast? Our premium, industry-specific templates let you launch in days, not months. Designed with the same quality as our custom work, at a fraction of the cost.</p>
              <p style={{ marginBottom: '16px' }}><strong>Includes:</strong> Fully responsive design, easy customization, SEO-ready structure, documentation, and 30-day support.</p>
              <Link href="/templates" className="service-link">Browse Templates <span className="arrow">&rarr;</span></Link>
            </div>
            <div className="service-card">
              <div className="service-icon icon-support">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </div>
              <h3>Maintenance &amp; Support</h3>
              <p>Your website is an investment that needs ongoing care. Our maintenance plans keep your site secure, updated, and performing at its best so you can focus on what you do best &mdash; caring for patients.</p>
              <p style={{ marginBottom: '16px' }}><strong>Includes:</strong> Monthly updates, security monitoring, uptime tracking, content changes, performance optimization, and priority support.</p>
              <Link href="/contact" className="service-link">Learn More <span className="arrow">&rarr;</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="services" style={{ background: 'var(--earth-50)' }}>
        <div className="container">
          <div className="section-header fade-up">
            <div className="section-label">Pricing</div>
            <h2>Transparent <span className="gradient-text">Pricing</span> Plans</h2>
            <p>No hidden fees, no surprises. Choose the plan that fits your practice&apos;s needs and budget.</p>
          </div>
          <div className="pricing-grid stagger">
            <div className="pricing-card">
              <div className="pricing-name">Starter</div>
              <div className="pricing-price">$1,497<span>/project</span></div>
              <p className="pricing-desc">Perfect for solo practitioners getting started online</p>
              <ul className="pricing-features">
                <li><span className="check">&#10003;</span> 5-Page Custom Website</li>
                <li><span className="check">&#10003;</span> Mobile Responsive Design</li>
                <li><span className="check">&#10003;</span> Contact Form Integration</li>
                <li><span className="check">&#10003;</span> Basic SEO Setup</li>
                <li><span className="check">&#10003;</span> 2 Rounds of Revisions</li>
                <li><span className="check">&#10003;</span> 30-Day Post-Launch Support</li>
              </ul>
              <Link href="/contact" className="btn btn-secondary" style={{ width: '100%' }}>Get Started</Link>
            </div>
            <div className="pricing-card featured">
              <div className="pricing-name">Professional</div>
              <div className="pricing-price">$2,997<span>/project</span></div>
              <p className="pricing-desc">Our most popular plan for growing practices</p>
              <ul className="pricing-features">
                <li><span className="check">&#10003;</span> 10-Page Custom Website</li>
                <li><span className="check">&#10003;</span> Custom Brand Identity</li>
                <li><span className="check">&#10003;</span> Online Booking Integration</li>
                <li><span className="check">&#10003;</span> Advanced SEO Package</li>
                <li><span className="check">&#10003;</span> Unlimited Revisions</li>
                <li><span className="check">&#10003;</span> 90-Day Priority Support</li>
                <li><span className="check">&#10003;</span> Analytics Dashboard</li>
              </ul>
              <Link href="/contact" className="btn btn-primary" style={{ width: '100%' }}>Get Started</Link>
            </div>
            <div className="pricing-card">
              <div className="pricing-name">Enterprise</div>
              <div className="pricing-price">Custom</div>
              <p className="pricing-desc">For multi-location practices and health systems</p>
              <ul className="pricing-features">
                <li><span className="check">&#10003;</span> Unlimited Pages</li>
                <li><span className="check">&#10003;</span> Complete Brand Overhaul</li>
                <li><span className="check">&#10003;</span> Custom Functionality</li>
                <li><span className="check">&#10003;</span> HIPAA Compliance Review</li>
                <li><span className="check">&#10003;</span> Dedicated Project Manager</li>
                <li><span className="check">&#10003;</span> 12-Month Support Plan</li>
                <li><span className="check">&#10003;</span> Staff Training Sessions</li>
              </ul>
              <Link href="/contact" className="btn btn-secondary" style={{ width: '100%' }}>Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Not Sure Which Plan Is Right?"
        description="Schedule a free 15-minute consultation and we'll help you find the perfect fit for your practice."
        primaryBtn={{ label: 'Free Consultation', href: '/contact' }}
      />
      <Footer />
    </>
  );
}
