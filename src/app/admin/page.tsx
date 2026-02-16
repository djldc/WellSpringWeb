'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useToast } from '@/components/Toast';

type Section = 'overview' | 'colors' | 'fonts' | 'images' | 'layout' | 'templates-manage' | 'clients' | 'typography' | 'activity' | 'templates' | 'gallery' | 'billing' | 'branding';

const presets: Record<string, Record<string, string>> = {
  teal: { '--primary': '#0D9488', '--primary-dark': '#0F766E', '--primary-light': '#14B8A6', '--primary-ultralight': '#CCFBF1' },
  blue: { '--primary': '#2563EB', '--primary-dark': '#1D4ED8', '--primary-light': '#60A5FA', '--primary-ultralight': '#DBEAFE' },
  green: { '--primary': '#059669', '--primary-dark': '#047857', '--primary-light': '#34D399', '--primary-ultralight': '#D1FAE5' },
  purple: { '--primary': '#7C3AED', '--primary-dark': '#6D28D9', '--primary-light': '#A78BFA', '--primary-ultralight': '#EDE9FE' },
  red: { '--primary': '#DC2626', '--primary-dark': '#B91C1C', '--primary-light': '#F87171', '--primary-ultralight': '#FEE2E2' },
  amber: { '--primary': '#D97706', '--primary-dark': '#B45309', '--primary-light': '#F59E0B', '--primary-ultralight': '#FEF3C7' },
};

const managedTemplates = [
  { name: 'SpineAlign Pro', category: 'Chiropractic', price: '$249', sales: 23, gradient: 'linear-gradient(135deg, #8B3A4A, #B5677A)' },
  { name: 'Vitality Wellness', category: 'Wellness', price: '$199', sales: 18, gradient: 'linear-gradient(135deg, #059669, #34D399)' },
  { name: 'MedPractice Plus', category: 'Medical', price: '$299', sales: 12, gradient: 'linear-gradient(135deg, #2563EB, #60A5FA)' },
  { name: 'BackBone Health', category: 'Chiropractic', price: '$199', sales: 9, gradient: 'linear-gradient(135deg, #C4953A, #D4A843)' },
  { name: 'Elevate Business', category: 'Business', price: '$179', sales: 15, gradient: 'linear-gradient(135deg, #7C3AED, #A78BFA)' },
  { name: 'Serenity Spa', category: 'Wellness', price: '$219', sales: 7, gradient: 'linear-gradient(135deg, #DB2777, #F472B6)' },
];

const clients = [
  { name: 'Dr. Rebecca Torres', email: 'rebecca@harmonychiro.com', project: 'Harmony Chiropractic', status: 'Active' },
  { name: 'Dr. Michael Kim', email: 'mkim@blueridgewellness.com', project: 'Blue Ridge Wellness', status: 'Active' },
  { name: 'Dr. Sarah Lin', email: 'sarah@naturepath.com', project: 'NaturePath Clinic', status: 'Active' },
  { name: 'Dr. James Wilson', email: 'jwilson@vitalitysports.com', project: 'Vitality Sports Medicine', status: 'Onboarding' },
  { name: 'Amanda Foster', email: 'amanda@sunriseyoga.com', project: 'Sunrise Yoga Studio', status: 'Active' },
];

const recentActivity = [
  { activity: 'New project inquiry', client: 'Dr. James Wilson', date: 'Today, 2:30 PM', tag: 'New Lead', tagClass: 'tag-amber' },
  { activity: 'Template purchased - SpineAlign Pro', client: 'Dr. Sarah Chen', date: 'Today, 11:15 AM', tag: 'Completed', tagClass: 'tag-green' },
  { activity: 'Design revision submitted', client: 'Blue Ridge Wellness', date: 'Yesterday, 4:45 PM', tag: 'In Review', tagClass: 'tag-blue' },
  { activity: 'Website launched', client: 'NaturePath Clinic', date: 'Feb 10, 2026', tag: 'Launched', tagClass: 'tag-teal' },
  { activity: 'Support ticket resolved', client: 'Harmony Chiropractic', date: 'Feb 9, 2026', tag: 'Resolved', tagClass: 'tag-green' },
];

export default function AdminPage() {
  const router = useRouter();
  const { showToast } = useToast();
  const [section, setSection] = useState<Section>('overview');
  const [businessName, setBusinessName] = useState('WellSpring Digital');
  const [logoUrl, setLogoUrl] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('ws-user');
    if (!stored) return;
    const user = JSON.parse(stored);
    if (user.role !== 'admin') {
      // For demo allow access
    }
  }, []);

  useEffect(() => {
    const branding = localStorage.getItem('ws-branding');
    if (branding) {
      const b = JSON.parse(branding);
      setBusinessName(b.businessName || 'WellSpring Digital');
      setLogoUrl(b.logoUrl || '');
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('ws-user');
    router.push('/');
  };

  const applyPreset = (name: string) => {
    const p = presets[name];
    if (p) {
      Object.entries(p).forEach(([key, val]) => {
        document.documentElement.style.setProperty(key, val);
      });
      showToast(`${name.charAt(0).toUpperCase() + name.slice(1)} preset applied!`, 'success');
    }
  };

  const saveBranding = () => {
    localStorage.setItem('ws-branding', JSON.stringify({ businessName, logoUrl }));
    showToast('Business branding updated!', 'success');
  };

  const sidebarGroups = [
    {
      label: 'Dashboard',
      items: [{ id: 'overview' as Section, label: 'Overview', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg> }],
    },
    {
      label: 'Site Design',
      items: [
        { id: 'colors' as Section, label: 'Colors & Theme', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="10.5" r="2.5"/><circle cx="8.5" cy="7.5" r="2.5"/><circle cx="6.5" cy="12.5" r="2.5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.04-.23-.29-.38-.63-.38-1.02 0-.83.67-1.5 1.5-1.5H16c3.31 0 6-2.69 6-6 0-5.17-4.59-9-10-9z"/></svg> },
        { id: 'fonts' as Section, label: 'Typography', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg> },
        { id: 'images' as Section, label: 'Images & Media', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg> },
        { id: 'layout' as Section, label: 'Layout', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg> },
      ],
    },
    {
      label: 'Content',
      items: [
        { id: 'templates-manage' as Section, label: 'Manage Templates', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg> },
        { id: 'clients' as Section, label: 'Clients', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg> },
      ],
    },
    {
      label: 'Customization',
      items: [
        { id: 'branding' as Section, label: 'Business Branding', icon: '◇' },
      ],
    },
  ];

  return (
    <div className="admin-layout">
      {/* SIDEBAR */}
      <aside className="admin-sidebar">
        <Link href="/" className="logo">
          {logoUrl ? <img src={logoUrl} alt="Logo" style={{ width: '36px', height: '36px', borderRadius: '8px', objectFit: 'cover' }} /> : <div className="logo-icon"></div>}
          {businessName}
        </Link>
        {sidebarGroups.map(group => (
          <div key={group.label} className="admin-nav-group">
            <div className="admin-nav-label">{group.label}</div>
            <nav className="admin-nav">
              {group.items.map(item => (
                <a key={item.id} href="#" className={section === item.id ? 'active' : ''} onClick={(e) => { e.preventDefault(); setSection(item.id); }}>
                  {item.icon} {item.label}
                </a>
              ))}
            </nav>
          </div>
        ))}
        <div className="admin-nav-group" style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <nav className="admin-nav">
            <Link href="/"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg> View Live Site</Link>
            <a href="#" onClick={(e) => { e.preventDefault(); logout(); }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg> Sign Out</a>
          </nav>
        </div>
      </aside>

      <main className="admin-main">
        {/* OVERVIEW */}
        {section === 'overview' && (
          <div>
            <div className="admin-header">
              <div><h1>Dashboard</h1><p style={{ color: 'var(--text-muted)', marginBottom: 0 }}>Welcome back, Don. Here&apos;s your business overview.</p></div>
              <Link href="/" className="btn btn-primary btn-sm" target="_blank">View Live Site</Link>
            </div>
            <div className="admin-cards stagger">
              <div className="admin-card"><div className="admin-card-icon" style={{ background: 'var(--primary-ultralight)', color: 'var(--primary)' }}>$</div><h3>$12,450</h3><p>Revenue This Month</p><div className="admin-stat-change up">+18% from last month</div></div>
              <div className="admin-card"><div className="admin-card-icon" style={{ background: '#DBEAFE', color: '#2563EB' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></div><h3>24</h3><p>Active Clients</p><div className="admin-stat-change up">+3 new this month</div></div>
              <div className="admin-card"><div className="admin-card-icon" style={{ background: '#D1FAE5', color: '#059669' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/></svg></div><h3>6</h3><p>Templates Listed</p><div className="admin-stat-change up">2 pending</div></div>
              <div className="admin-card"><div className="admin-card-icon" style={{ background: '#FEF3C7', color: 'var(--accent)' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div><h3>2,847</h3><p>Site Visits This Month</p><div className="admin-stat-change up">+24% from last month</div></div>
            </div>
            <div className="admin-panel">
              <h2>Recent Activity</h2>
              <table className="admin-table"><thead><tr><th>Activity</th><th>Client</th><th>Date</th><th>Status</th></tr></thead>
                <tbody>
                  {recentActivity.map((item, i) => (
                    <tr key={i}><td>{item.activity}</td><td>{item.client}</td><td>{item.date}</td><td><span className={`tag ${item.tagClass}`}>{item.tag}</span></td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* COLORS */}
        {section === 'colors' && (
          <div>
            <div className="admin-header">
              <div><h1>Colors &amp; Theme</h1><p style={{ color: 'var(--text-muted)', marginBottom: 0 }}>Customize your site&apos;s color palette.</p></div>
            </div>
            <div className="admin-panel">
              <h2>Quick Presets</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '16px' }}>Click a preset to instantly apply a new color scheme.</p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {Object.entries(presets).map(([name, vals]) => (
                  <button key={name} className="btn btn-sm" style={{ background: vals['--primary'], color: 'white' }} onClick={() => applyPreset(name)}>
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* FONTS */}
        {section === 'fonts' && (
          <div>
            <div className="admin-header"><div><h1>Typography</h1><p style={{ color: 'var(--text-muted)', marginBottom: 0 }}>Customize the fonts used across your website.</p></div></div>
            <div className="admin-panel">
              <h2>Preview</h2>
              <div style={{ padding: '30px', background: 'var(--earth-50)', borderRadius: 'var(--radius-sm)' }}>
                <h1 style={{ marginBottom: '8px' }}>Heading Level 1</h1>
                <h2 style={{ marginBottom: '8px' }}>Heading Level 2</h2>
                <h3 style={{ marginBottom: '16px' }}>Heading Level 3</h3>
                <p>This is body text. It demonstrates how your chosen body font will look on the website.</p>
                <p style={{ marginBottom: 0 }}><strong>Bold text</strong> and <em>italic text</em> are also shown here.</p>
              </div>
            </div>
          </div>
        )}

        {/* IMAGES */}
        {section === 'images' && (
          <div>
            <div className="admin-header"><div><h1>Images &amp; Media</h1><p style={{ color: 'var(--text-muted)', marginBottom: 0 }}>Manage your site&apos;s images, logos, and media assets.</p></div></div>
            <div className="admin-panel">
              <h2>Logo</h2>
              <div className="image-upload-area" onClick={() => showToast('File upload would open here in production', 'info')} style={{ border: '2px dashed var(--earth-300)', borderRadius: 'var(--radius-md)', padding: '40px', textAlign: 'center', cursor: 'pointer' }}>
                <p style={{ color: 'var(--text-muted)', marginBottom: '4px', fontWeight: 600 }}>Click to upload your logo</p>
                <p style={{ color: 'var(--earth-400)', fontSize: '0.8rem', marginBottom: 0 }}>PNG, SVG, or JPG up to 2MB</p>
              </div>
            </div>
          </div>
        )}

        {/* LAYOUT */}
        {section === 'layout' && (
          <div>
            <div className="admin-header"><div><h1>Layout Settings</h1><p style={{ color: 'var(--text-muted)', marginBottom: 0 }}>Control your site&apos;s layout, spacing, and structural elements.</p></div></div>
            <div className="admin-panel">
              <h2>Navigation Style</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
                <div style={{ border: '2px solid var(--primary)', borderRadius: 'var(--radius-sm)', padding: '20px', textAlign: 'center', cursor: 'pointer' }}>
                  <div style={{ height: '6px', background: 'var(--earth-200)', borderRadius: '3px', marginBottom: '12px' }}></div>
                  <div style={{ height: '60px', background: 'var(--earth-100)', borderRadius: '4px', marginBottom: '8px' }}></div>
                  <p style={{ fontSize: '0.8rem', fontWeight: 600, marginTop: '10px', marginBottom: 0, color: 'var(--primary)' }}>Sticky (Current)</p>
                </div>
                <div style={{ border: '2px solid var(--earth-200)', borderRadius: 'var(--radius-sm)', padding: '20px', textAlign: 'center', cursor: 'pointer' }} onClick={() => showToast('Layout style updated', 'success')}>
                  <div style={{ height: '6px', background: 'var(--bg-dark)', borderRadius: '3px', marginBottom: '12px' }}></div>
                  <div style={{ height: '60px', background: 'var(--earth-100)', borderRadius: '4px', marginBottom: '8px' }}></div>
                  <p style={{ fontSize: '0.8rem', fontWeight: 600, marginTop: '10px', marginBottom: 0 }}>Dark Nav</p>
                </div>
                <div style={{ border: '2px solid var(--earth-200)', borderRadius: 'var(--radius-sm)', padding: '20px', textAlign: 'center', cursor: 'pointer' }} onClick={() => showToast('Layout style updated', 'success')}>
                  <div style={{ height: '6px', background: 'transparent', border: '1px solid var(--earth-200)', borderRadius: '3px', marginBottom: '12px' }}></div>
                  <div style={{ height: '60px', background: 'var(--earth-100)', borderRadius: '4px', marginBottom: '8px' }}></div>
                  <p style={{ fontSize: '0.8rem', fontWeight: 600, marginTop: '10px', marginBottom: 0 }}>Transparent</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MANAGE TEMPLATES */}
        {section === 'templates-manage' && (
          <div>
            <div className="admin-header">
              <div><h1>Manage Templates</h1><p style={{ color: 'var(--text-muted)', marginBottom: 0 }}>Add, edit, and manage the templates you sell.</p></div>
              <button className="btn btn-primary btn-sm" onClick={() => showToast('Add Template form would open here', 'info')}>+ Add New Template</button>
            </div>
            <div className="admin-panel">
              <h2>Listed Templates</h2>
              {managedTemplates.map((t, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', border: '1px solid var(--earth-200)', borderRadius: 'var(--radius-sm)', marginBottom: '12px' }}>
                  <div style={{ width: '80px', height: '60px', borderRadius: '6px', flexShrink: 0, background: t.gradient }}></div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: '0.95rem', marginBottom: '2px' }}>{t.name}</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: 0 }}>{t.category} &bull; {t.price} &bull; {t.sales} sales</p>
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button className="action-btn" onClick={() => showToast('Edit template form would open', 'info')} style={{ padding: '6px 14px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer', border: '1px solid var(--earth-200)', background: 'var(--bg-white)', color: 'var(--text-secondary)' }}>Edit</button>
                    <button className="action-btn" onClick={() => showToast('Template would be archived', 'info')} style={{ padding: '6px 14px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer', border: '1px solid var(--earth-200)', background: 'var(--bg-white)', color: 'var(--text-secondary)' }}>Archive</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CLIENTS */}
        {section === 'clients' && (
          <div>
            <div className="admin-header">
              <div><h1>Clients</h1><p style={{ color: 'var(--text-muted)', marginBottom: 0 }}>Manage your client accounts and project assignments.</p></div>
              <button className="btn btn-primary btn-sm" onClick={() => showToast('Add Client form would open here', 'info')}>+ Add Client</button>
            </div>
            <div className="admin-panel">
              <h2>Client Directory</h2>
              <table className="admin-table"><thead><tr><th>Client</th><th>Email</th><th>Project</th><th>Status</th><th>Actions</th></tr></thead>
                <tbody>
                  {clients.map((c, i) => (
                    <tr key={i}>
                      <td><strong>{c.name}</strong></td>
                      <td style={{ color: 'var(--text-muted)' }}>{c.email}</td>
                      <td>{c.project}</td>
                      <td><span className={`status ${c.status === 'Active' ? 'status-active' : 'status-pending'}`}>{c.status}</span></td>
                      <td><button className="action-btn" onClick={() => showToast('Client details would open', 'info')} style={{ padding: '6px 14px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer', border: '1px solid var(--earth-200)', background: 'var(--bg-white)', color: 'var(--text-secondary)' }}>View</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* BRANDING */}
        {section === 'branding' && (
          <div>
            <div className="admin-header">
              <div>
                <h1>Business Branding</h1>
                <p style={{ color: 'var(--text-muted)', marginBottom: 0 }}>Customize your business name and logo across the site.</p>
              </div>
            </div>
            <div className="admin-panel">
              <h2>Business Information</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '8px' }}>Business Name</label>
                  <input type="text" value={businessName} onChange={(e) => setBusinessName(e.target.value)} placeholder="WellSpring Digital" style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--earth-200)', borderRadius: '6px', fontSize: '0.95rem', fontFamily: 'inherit' }} />
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '6px' }}>This name appears in the navigation bar and footer.</p>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '8px' }}>Logo URL</label>
                  <input type="text" value={logoUrl} onChange={(e) => setLogoUrl(e.target.value)} placeholder="https://example.com/logo.png" style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--earth-200)', borderRadius: '6px', fontSize: '0.95rem', fontFamily: 'inherit' }} />
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '6px' }}>Leave blank to use default icon. Paste any image URL.</p>
                </div>
              </div>
              <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Live Preview</h2>
              <div style={{ padding: '20px 24px', border: '1px solid var(--earth-200)', borderRadius: '12px', background: 'var(--bg-white)', display: 'flex', alignItems: 'center', gap: '16px' }}>
                {logoUrl ? (
                  <img src={logoUrl} alt="Logo preview" style={{ width: '44px', height: '44px', borderRadius: '10px', objectFit: 'cover', border: '1px solid var(--earth-200)' }} />
                ) : (
                  <div style={{ width: '44px', height: '44px', background: 'linear-gradient(135deg, var(--primary), var(--primary-light))', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, fontSize: '1.2rem' }}>W</div>
                )}
                <span style={{ fontSize: '1.3rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>{businessName || 'Your Business Name'}</span>
              </div>
              <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                <button className="btn btn-primary" style={{ padding: '10px 24px', cursor: 'pointer', border: 'none', borderRadius: '6px', fontWeight: 600 }} onClick={saveBranding}>Save Branding</button>
                <button style={{ padding: '10px 20px', borderRadius: '6px', fontSize: '0.9rem', fontWeight: 600, cursor: 'pointer', border: '1px solid var(--earth-200)', background: 'var(--bg-white)', color: 'var(--text-secondary)' }} onClick={() => { setBusinessName('WellSpring Digital'); setLogoUrl(''); }}>Reset to Default</button>
              </div>
            </div>
          </div>
        )}
      </main>

      <style jsx>{`
        .admin-stat-change { font-size: 0.8rem; font-weight: 600; margin-top: 4px; }
        .admin-stat-change.up { color: #10B981; }
        .admin-stat-change.down { color: #EF4444; }
      `}</style>
    </div>
  );
}
