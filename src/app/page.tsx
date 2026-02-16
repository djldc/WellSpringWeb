'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function useTypingAnimation(words: string[], typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) {
  const [text, setText] = useState(words[0]);

  useEffect(() => {
    let wordIndex = 0;
    let charIndex = words[0].length;
    let isDeleting = false;
    let timeout: NodeJS.Timeout;

    const type = () => {
      const current = words[wordIndex];
      if (isDeleting) {
        charIndex--;
        setText(current.substring(0, charIndex));
      } else {
        charIndex++;
        setText(current.substring(0, charIndex));
      }

      let speed = isDeleting ? deletingSpeed : typingSpeed;
      if (!isDeleting && charIndex === current.length) {
        speed = pauseTime;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 500;
      }
      timeout = setTimeout(type, speed);
    }

    timeout = setTimeout(type, pauseTime);
    return () => clearTimeout(timeout);
  }, [words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}

function useCounterAnimation(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !counted.current) {
        counted.current = true;
        const start = performance.now();
        const update = (now: number) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * target));
          if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

export default function HomePage() {
  const typingText = useTypingAnimation([
    'Healthcare Providers', 'Chiropractors', 'Wellness Brands', 'Small Businesses', 'Growing Practices'
  ]);

  const stat1 = useCounterAnimation(150);
  const stat2 = useCounterAnimation(98);
  const stat3 = useCounterAnimation(3);
  const stat4 = useCounterAnimation(150);
  const stat5 = useCounterAnimation(98);
  const stat6 = useCounterAnimation(45);
  const stat7 = useCounterAnimation(12);

  return (
    <>
      <Navbar />
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="container">
          <div className="hero-content fade-up">
            <div className="hero-badge">
              <span className="dot"></span>
              Now Accepting New Clients
            </div>
            <h1>Websites That <span className="highlight">Elevate</span> Your Practice</h1>
            <p className="hero-text">
              We design and build stunning, conversion-focused websites tailored for{' '}
              <strong className="typing-text" style={{ color: 'var(--primary)' }}>{typingText}</strong>
              {' '}&mdash; turning visitors into loyal patients and customers.
            </p>
            <div className="hero-buttons">
              <Link href="/contact" className="btn btn-primary btn-lg">Start Your Project <span className="btn-icon">&rarr;</span></Link>
              <Link href="/portfolio" className="btn btn-secondary btn-lg">View Our Work</Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-number" ref={stat1.ref}><span>{stat1.count}</span><span>+</span></div>
                <div className="hero-stat-label">Websites Launched</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number" ref={stat2.ref}><span>{stat2.count}</span><span>%</span></div>
                <div className="hero-stat-label">Client Satisfaction</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number" ref={stat3.ref}><span>{stat3.count}</span><span>x</span></div>
                <div className="hero-stat-label">Avg. Lead Increase</div>
              </div>
            </div>
          </div>

          <div className="hero-visual slide-left">
            <div className="hero-graphic">
              <div className="hero-browser">
                <div className="browser-bar">
                  <div className="browser-dot"></div>
                  <div className="browser-dot"></div>
                  <div className="browser-dot"></div>
                  <div className="browser-url">wellspringdigital.com</div>
                </div>
                <div className="browser-content">
                  <div className="browser-mockup-nav">
                    <span></span><span></span><span></span><span></span>
                  </div>
                  <div className="browser-mockup-hero">
                    <div className="browser-mockup-text">
                      <div className="line"></div>
                      <div className="line"></div>
                      <div className="line"></div>
                    </div>
                    <div className="browser-mockup-img"></div>
                  </div>
                  <div className="browser-mockup-cards">
                    <div className="browser-mockup-card"><div className="card-img"></div><div className="card-line"></div><div className="card-line"></div></div>
                    <div className="browser-mockup-card"><div className="card-img"></div><div className="card-line"></div><div className="card-line"></div></div>
                    <div className="browser-mockup-card"><div className="card-img"></div><div className="card-line"></div><div className="card-line"></div></div>
                  </div>
                </div>
              </div>
              <div className="hero-float-badge badge-1">
                <div className="badge-icon teal">&#9733;</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>5.0 Rating</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Client Reviews</div>
                </div>
              </div>
              <div className="hero-float-badge badge-2">
                <div className="badge-icon amber">&#9889;</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>Fast Delivery</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>2-4 Week Launch</div>
                </div>
              </div>
              <div className="hero-float-badge badge-3">
                <div className="badge-icon green">&#10003;</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>HIPAA Ready</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Healthcare Compliant</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="wave-divider" style={{ background: 'var(--bg-white)' }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" fill="var(--bg-light)">
          <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,45 L1440,80 L0,80 Z" />
        </svg>
      </div>

      {/* SERVICES PREVIEW */}
      <section className="services" id="services">
        <div className="container">
          <div className="section-header fade-up">
            <div className="section-label">What We Do</div>
            <h2>Everything You Need to <span className="gradient-text">Stand Out</span> Online</h2>
            <p>From custom web design to ready-made templates, we provide end-to-end digital solutions that help your practice attract more patients and grow.</p>
          </div>
          <div className="services-grid stagger">
            <div className="service-card">
              <div className="service-icon icon-design">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
              </div>
              <h3>Custom Web Design</h3>
              <p>Unique, handcrafted websites that perfectly reflect your brand, attract your ideal clients, and convert visitors into patients.</p>
              <Link href="/services" className="service-link">Learn More <span className="arrow">&rarr;</span></Link>
            </div>
            <div className="service-card">
              <div className="service-icon icon-dev">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              <h3>Web Development</h3>
              <p>Fast, responsive, SEO-optimized websites built with modern technology. Mobile-first design that works flawlessly on every device.</p>
              <Link href="/services" className="service-link">Learn More <span className="arrow">&rarr;</span></Link>
            </div>
            <div className="service-card">
              <div className="service-icon icon-brand">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
              </div>
              <h3>Brand Identity</h3>
              <p>Logo design, color palettes, typography, and visual identity systems that make your practice memorable and trustworthy.</p>
              <Link href="/services" className="service-link">Learn More <span className="arrow">&rarr;</span></Link>
            </div>
            <div className="service-card">
              <div className="service-icon icon-seo">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              </div>
              <h3>SEO &amp; Marketing</h3>
              <p>Get found online with search engine optimization, local SEO for healthcare, and digital marketing strategies that drive growth.</p>
              <Link href="/services" className="service-link">Learn More <span className="arrow">&rarr;</span></Link>
            </div>
            <div className="service-card">
              <div className="service-icon icon-template">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
              </div>
              <h3>Website Templates</h3>
              <p>Professional, ready-to-launch website templates designed specifically for healthcare providers. Affordable, fast, and beautiful.</p>
              <Link href="/templates" className="service-link">Browse Templates <span className="arrow">&rarr;</span></Link>
            </div>
            <div className="service-card">
              <div className="service-icon icon-support">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </div>
              <h3>Ongoing Support</h3>
              <p>Dedicated maintenance plans, content updates, hosting support, and strategic guidance to keep your website performing at its peak.</p>
              <Link href="/services" className="service-link">Learn More <span className="arrow">&rarr;</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="wave-divider" style={{ background: 'var(--bg-light)' }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" fill="var(--bg-white)">
          <path d="M0,20 C360,60 720,10 1080,30 C1260,40 1380,35 1440,25 L1440,80 L0,80 Z" />
        </svg>
      </div>

      {/* STATS */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid stagger">
            <div className="stat-item">
              <div className="stat-number" ref={stat4.ref}>{stat4.count}+</div>
              <div className="stat-label">Websites Delivered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" ref={stat5.ref}>{stat5.count}%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" ref={stat6.ref}>{stat6.count}+</div>
              <div className="stat-label">Healthcare Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" ref={stat7.ref}>{stat7.count}</div>
              <div className="stat-label">Industry Awards</div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="wave-divider" style={{ background: 'var(--bg-white)' }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" fill="var(--bg-light)">
          <path d="M0,50 C400,20 1000,70 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>

      {/* PROCESS */}
      <section className="process">
        <div className="container">
          <div className="section-header fade-up">
            <div className="section-label">How We Work</div>
            <h2>Simple Process, <span className="gradient-text">Stunning</span> Results</h2>
            <p>We&apos;ve streamlined our process to deliver exceptional websites efficiently, keeping you informed and involved every step of the way.</p>
          </div>
          <div className="process-steps stagger">
            <div className="process-step"><div className="step-number">01</div><h3>Discovery</h3><p>We learn about your practice, goals, and ideal patients to craft the perfect strategy.</p></div>
            <div className="process-step"><div className="step-number">02</div><h3>Design</h3><p>Custom mockups tailored to your brand, with unlimited revisions until you love it.</p></div>
            <div className="process-step"><div className="step-number">03</div><h3>Develop</h3><p>We build your site with clean code, fast performance, and mobile-first responsiveness.</p></div>
            <div className="process-step"><div className="step-number">04</div><h3>Launch</h3><p>Go live with confidence. We handle hosting, training, and ongoing support.</p></div>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="wave-divider" style={{ background: 'var(--bg-light)' }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" fill="var(--bg-white)">
          <path d="M0,30 C360,70 720,10 1080,50 C1260,65 1380,45 1440,35 L1440,80 L0,80 Z" />
        </svg>
      </div>

      {/* PORTFOLIO PREVIEW */}
      <section className="portfolio">
        <div className="container">
          <div className="section-header fade-up">
            <div className="section-label">Our Work</div>
            <h2>Websites That <span className="gradient-text">Inspire</span> Trust</h2>
            <p>A selection of our recent projects showcasing clean design, intuitive navigation, and results-driven layouts.</p>
          </div>
          <div className="portfolio-grid stagger">
            <div className="portfolio-item">
              <div className="portfolio-image">
                <div className="placeholder-img" style={{ background: 'linear-gradient(135deg, #8B3A4A, #B5677A)' }}>
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
                </div>
                <div className="portfolio-overlay"><span>View Project</span></div>
              </div>
              <div className="portfolio-info"><h3>Harmony Chiropractic</h3><p className="category">Healthcare &bull; Web Design</p></div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-image">
                <div className="placeholder-img" style={{ background: 'linear-gradient(135deg, #2563EB, #60A5FA)' }}>
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
                </div>
                <div className="portfolio-overlay"><span>View Project</span></div>
              </div>
              <div className="portfolio-info"><h3>Blue Ridge Wellness</h3><p className="category">Wellness Center &bull; Branding</p></div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-image">
                <div className="placeholder-img" style={{ background: 'linear-gradient(135deg, #059669, #34D399)' }}>
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div className="portfolio-overlay"><span>View Project</span></div>
              </div>
              <div className="portfolio-info"><h3>NaturePath Clinic</h3><p className="category">Naturopathic &bull; Full Build</p></div>
            </div>
          </div>
          <div className="text-center mt-4 fade-up">
            <Link href="/portfolio" className="btn btn-secondary">View All Projects <span className="btn-icon">&rarr;</span></Link>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="wave-divider" style={{ background: 'var(--bg-white)' }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" fill="var(--primary-ultralight)">
          <path d="M0,40 C480,70 960,20 1440,50 L1440,80 L0,80 Z" />
        </svg>
      </div>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header fade-up">
            <div className="section-label">Client Love</div>
            <h2>Trusted by <span className="gradient-text">Healthcare</span> Professionals</h2>
            <p>Don&apos;t just take our word for it. Hear what our clients have to say about working with WellSpring Digital.</p>
          </div>
          <div className="testimonials-grid stagger">
            <div className="testimonial-card">
              <div className="testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p className="testimonial-text">&ldquo;WellSpring Digital transformed our online presence completely. Our new patients increased by 40% within the first three months. The design perfectly captures our holistic approach.&rdquo;</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar" style={{ background: 'linear-gradient(135deg, var(--primary), var(--primary-light))' }}>DR</div>
                <div><div className="testimonial-name">Dr. Rebecca Torres</div><div className="testimonial-role">Harmony Chiropractic Center</div></div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p className="testimonial-text">&ldquo;The team understood exactly what we needed. Our website now ranks #1 for local searches and the booking integration has streamlined our entire patient intake process.&rdquo;</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar" style={{ background: 'linear-gradient(135deg, #2563EB, #60A5FA)' }}>MK</div>
                <div><div className="testimonial-name">Dr. Michael Kim</div><div className="testimonial-role">Blue Ridge Wellness</div></div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p className="testimonial-text">&ldquo;I purchased a template and was blown away by the quality. It looked custom-made for my practice. The setup was incredibly easy and the support team was always responsive.&rdquo;</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar" style={{ background: 'linear-gradient(135deg, #059669, #34D399)' }}>SL</div>
                <div><div className="testimonial-name">Dr. Sarah Lin</div><div className="testimonial-role">NaturePath Clinic</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="wave-divider" style={{ background: 'var(--primary-ultralight)' }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" fill="var(--bg-dark)">
          <path d="M0,35 C360,65 720,15 1080,45 C1260,60 1380,40 1440,30 L1440,80 L0,80 Z" />
        </svg>
      </div>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box fade-up">
            <h2>Ready to Transform Your Online Presence?</h2>
            <p>Let&apos;s build a website that works as hard as you do. Schedule a free consultation and get a custom proposal within 48 hours.</p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn btn-primary btn-lg">Get Free Consultation</Link>
              <Link href="/templates" className="btn btn-white btn-lg">Browse Templates</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
