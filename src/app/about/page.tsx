import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = { title: 'About Us' };

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <PageHeader title="The Story Behind" titleHighlight="WellSpring" description="Born from a passion for wellness and design, we're on a mission to help healthcare providers build a powerful online presence." breadcrumb="About Us" />

      {/* OUR STORY */}
      <section className="about-story">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-placeholder fade-up" style={{ background: 'linear-gradient(135deg, var(--primary-ultralight), var(--earth-100))' }}>
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                <rect x="20" y="30" width="160" height="120" rx="12" fill="var(--primary)" opacity="0.15"/>
                <rect x="35" y="45" width="60" height="8" rx="4" fill="var(--primary)" opacity="0.3"/>
                <rect x="35" y="60" width="130" height="6" rx="3" fill="var(--earth-300)"/>
                <rect x="35" y="72" width="110" height="6" rx="3" fill="var(--earth-300)"/>
                <rect x="35" y="84" width="120" height="6" rx="3" fill="var(--earth-300)"/>
                <circle cx="140" cy="55" r="20" fill="var(--primary)" opacity="0.2"/>
                <rect x="35" y="105" width="50" height="25" rx="6" fill="var(--primary)" opacity="0.25"/>
                <rect x="95" y="105" width="50" height="25" rx="6" fill="var(--accent)" opacity="0.2"/>
                <circle cx="100" cy="175" r="8" fill="var(--primary)" opacity="0.3"/>
                <circle cx="120" cy="175" r="8" fill="var(--earth-300)"/>
                <circle cx="80" cy="175" r="8" fill="var(--earth-300)"/>
              </svg>
            </div>
            <div className="about-content slide-left">
              <div className="section-label" style={{ justifyContent: 'flex-start' }}>Our Story</div>
              <h2>From Healthcare to Digital Design</h2>
              <p>WellSpring Digital was founded with a simple insight: healthcare providers deserve websites as professional and caring as the services they offer. Too many brilliant practitioners are held back by outdated, generic websites that don&apos;t reflect their expertise or attract the right patients.</p>
              <p>Our founder, with deep roots in the natural healthcare community, saw this gap firsthand. Understanding both the clinical world and the digital landscape, WellSpring Digital was born to bridge that divide.</p>
              <p>Today, we specialize in creating stunning, conversion-focused websites for healthcare providers, wellness brands, and growing businesses of all kinds. Every pixel we place, every line of code we write, is designed to help your practice grow.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="services" style={{ background: 'var(--earth-50)' }}>
        <div className="container">
          <div className="section-header fade-up">
            <div className="section-label">Our Values</div>
            <h2>What <span className="gradient-text">Drives</span> Us</h2>
          </div>
          <div className="values-grid stagger">
            <div className="value-card">
              <div className="value-icon" style={{ color: 'var(--primary)' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
              </div>
              <h3>Client-Centered</h3>
              <p>Your success is our success. We listen deeply and design solutions that truly serve your unique practice and patients.</p>
            </div>
            <div className="value-card">
              <div className="value-icon" style={{ background: '#FEF3C7', color: 'var(--accent)' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <h3>Excellence</h3>
              <p>We never settle for &ldquo;good enough.&rdquo; Every project receives the same obsessive attention to detail and craftsmanship.</p>
            </div>
            <div className="value-card">
              <div className="value-icon" style={{ background: '#D1FAE5', color: '#059669' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3>Integrity</h3>
              <p>Transparent pricing, honest timelines, and clear communication. We treat every client relationship as a partnership.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="services">
        <div className="container">
          <div className="section-header fade-up">
            <div className="section-label">Our Team</div>
            <h2>Meet the <span className="gradient-text">Creators</span></h2>
            <p>A passionate team of designers, developers, and strategists dedicated to crafting exceptional digital experiences.</p>
          </div>
          <div className="team-grid stagger">
            <div className="team-member">
              <div className="team-avatar" style={{ background: 'linear-gradient(135deg, var(--primary), var(--primary-light))' }}>D</div>
              <h3>Don</h3>
              <p className="role">Founder &amp; Creative Director</p>
            </div>
            <div className="team-member">
              <div className="team-avatar" style={{ background: 'linear-gradient(135deg, #2563EB, #60A5FA)' }}>A</div>
              <h3>Alex Rivera</h3>
              <p className="role">Lead Designer</p>
            </div>
            <div className="team-member">
              <div className="team-avatar" style={{ background: 'linear-gradient(135deg, #059669, #34D399)' }}>J</div>
              <h3>Jordan Chen</h3>
              <p className="role">Full-Stack Developer</p>
            </div>
            <div className="team-member">
              <div className="team-avatar" style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-light))' }}>M</div>
              <h3>Maya Patel</h3>
              <p className="role">SEO &amp; Marketing Lead</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Create Something Amazing Together"
        description="Ready to take your online presence to the next level? We'd love to hear about your project."
        primaryBtn={{ label: 'Get in Touch', href: '/contact' }}
        secondaryBtn={{ label: 'See Our Work', href: '/portfolio' }}
      />
      <Footer />
    </>
  );
}
