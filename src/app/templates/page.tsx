'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';
import { useToast } from '@/components/Toast';

const templates = [
  { id: 'spinealign-pro', name: 'SpineAlign Pro', category: 'chiropractic', price: 249, originalPrice: 399, description: 'Complete chiropractic practice website with booking, testimonials, service pages, and patient education blog.', gradient: 'linear-gradient(135deg, #8B3A4A, #B5677A)', badge: 'Popular', stripePriceId: 'price_spinealign_pro' },
  { id: 'vitality-wellness', name: 'Vitality Wellness', category: 'wellness', price: 199, originalPrice: 349, description: 'Elegant wellness center template with class schedules, practitioner profiles, and online booking integration.', gradient: 'linear-gradient(135deg, #059669, #34D399)', badge: 'New', stripePriceId: 'price_vitality_wellness' },
  { id: 'medpractice-plus', name: 'MedPractice Plus', category: 'medical', price: 299, originalPrice: 449, description: 'HIPAA-ready medical practice template with patient portal integration, provider directory, and insurance info.', gradient: 'linear-gradient(135deg, #2563EB, #60A5FA)', badge: null, stripePriceId: 'price_medpractice_plus' },
  { id: 'backbone-health', name: 'BackBone Health', category: 'chiropractic', price: 199, originalPrice: 349, description: 'Modern chiropractic template focused on patient education, condition guides, and appointment scheduling.', gradient: 'linear-gradient(135deg, #C4953A, #D4A843)', badge: null, stripePriceId: 'price_backbone_health' },
  { id: 'elevate-business', name: 'Elevate Business', category: 'business', price: 179, originalPrice: 299, description: 'Versatile business template for consultants, coaches, and professional service providers. Clean and modern.', gradient: 'linear-gradient(135deg, #7C3AED, #A78BFA)', badge: 'New', stripePriceId: 'price_elevate_business' },
  { id: 'serenity-spa', name: 'Serenity Spa', category: 'wellness', price: 219, originalPrice: 349, description: 'Beautiful spa and wellness template with service menus, gift cards, team profiles, and gallery showcase.', gradient: 'linear-gradient(135deg, #DB2777, #F472B6)', badge: null, stripePriceId: 'price_serenity_spa' },
];

const filterOptions = [
  { value: 'all', label: 'All Templates' },
  { value: 'chiropractic', label: 'Chiropractic' },
  { value: 'wellness', label: 'Wellness' },
  { value: 'medical', label: 'Medical' },
  { value: 'business', label: 'Business' },
];

export default function TemplatesPage() {
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState<string | null>(null);
  const { showToast } = useToast();

  const filtered = filter === 'all' ? templates : templates.filter(t => t.category === filter);

  const handlePurchase = async (template: typeof templates[0]) => {
    setLoading(template.id);
    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          templateId: template.id,
          templateName: template.name,
          price: template.price,
        }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        showToast(data.message || 'Stripe checkout will be available once you add your API keys.', 'info');
      }
    } catch {
      showToast('Stripe checkout will be available once you add your API keys.', 'info');
    }
    setLoading(null);
  };

  return (
    <>
      <Navbar />
      <PageHeader title="Premium" titleHighlight="Templates" description="Professional, ready-to-launch website templates designed for healthcare providers and businesses. Launch your new site in days, not months." breadcrumb="Templates" />

      <section className="services" style={{ paddingTop: '60px' }}>
        <div className="container">
          <div className="template-filters fade-up">
            {filterOptions.map(f => (
              <button key={f.value} className={`filter-btn ${filter === f.value ? 'active' : ''}`} onClick={() => setFilter(f.value)}>{f.label}</button>
            ))}
          </div>

          <div className="template-grid stagger">
            {filtered.map(template => (
              <div key={template.id} className="template-card">
                <div className="template-preview" style={{ background: template.gradient }}>
                  <div className="preview-inner" style={{ fontSize: '3rem', color: 'rgba(255,255,255,0.8)' }}>&#9733;</div>
                  {template.badge && <span className={`template-badge ${template.badge === 'New' ? 'new' : 'popular'}`}>{template.badge}</span>}
                </div>
                <div className="template-details">
                  <h3>{template.name}</h3>
                  <div className="template-meta">
                    <span className="template-category">{template.category.charAt(0).toUpperCase() + template.category.slice(1)}</span>
                    <div className="template-price"><span>${template.originalPrice}</span> ${template.price}</div>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '16px' }}>{template.description}</p>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                      className="btn btn-primary btn-sm"
                      style={{ flex: 1, justifyContent: 'center' }}
                      onClick={() => handlePurchase(template)}
                      disabled={loading === template.id}
                    >
                      {loading === template.id ? 'Loading...' : 'Purchase'}
                    </button>
                    <button className="btn btn-secondary btn-sm" style={{ flex: 1, justifyContent: 'center' }} onClick={() => showToast('Template preview coming soon', 'info')}>Preview</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4 fade-up" style={{ padding: '60px 0' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--primary-ultralight)', color: 'var(--primary-dark)', padding: '10px 20px', borderRadius: '50px', fontWeight: 600, fontSize: '0.9rem', marginBottom: '16px' }}>
              More templates coming soon
            </div>
            <p style={{ color: 'var(--text-muted)', maxWidth: '400px', margin: '0 auto' }}>We&apos;re constantly designing new templates. Sign up to be notified when new designs drop.</p>
          </div>
        </div>
      </section>

      <CTASection
        title="Need Something Custom?"
        description="If our templates don't quite fit, we'll design a completely custom website tailored to your practice."
        primaryBtn={{ label: 'Request Custom Design', href: '/contact' }}
        secondaryBtn={{ label: 'View All Services', href: '/services' }}
      />
      <Footer />
    </>
  );
}
