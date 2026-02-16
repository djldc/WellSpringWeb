'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';

export default function ClientPortalPage() {
  const router = useRouter();
  const [user, setUser] = useState<{ name: string; role: string } | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('ws-user');
    if (!stored) { router.push('/login'); return; }
    setUser(JSON.parse(stored));
  }, [router]);

  const logout = () => {
    localStorage.removeItem('ws-user');
    router.push('/');
  };

  if (!user) return null;

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <a href="/" className="logo"><div className="logo-icon"></div>Well<span>Spring</span> Digital</a>
          <div className="nav-links">
            <a href="/client-portal" className="active">Dashboard</a>
            <a href="#" onClick={(e) => { e.preventDefault(); logout(); }} style={{ color: 'var(--accent)' }}>Sign Out</a>
          </div>
        </div>
      </nav>

      <div style={{ paddingTop: 'calc(var(--nav-height) + 40px)', paddingBottom: '80px' }}>
        <div className="container">
          <div className="portal-welcome fade-up">
            <h2>Welcome back! <span>{user.name}</span></h2>
            <p>Access your project files, track progress, and communicate with your design team all in one place.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '32px' }} className="stagger">
            <div className="admin-card">
              <div className="admin-card-icon" style={{ background: 'var(--primary-ultralight)', color: 'var(--primary)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
              </div>
              <h3 style={{ fontSize: '1.5rem' }}>1</h3>
              <p>Active Projects</p>
            </div>
            <div className="admin-card">
              <div className="admin-card-icon" style={{ background: '#D1FAE5', color: '#059669' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <h3 style={{ fontSize: '1.5rem' }}>3</h3>
              <p>Milestones Complete</p>
            </div>
            <div className="admin-card">
              <div className="admin-card-icon" style={{ background: '#FEF3C7', color: 'var(--accent)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
              </div>
              <h3 style={{ fontSize: '1.5rem' }}>2</h3>
              <p>New Messages</p>
            </div>
            <div className="admin-card">
              <div className="admin-card-icon" style={{ background: '#DBEAFE', color: '#2563EB' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              </div>
              <h3 style={{ fontSize: '1.5rem' }}>5</h3>
              <p>Files Shared</p>
            </div>
          </div>

          <div className="admin-panel fade-up">
            <h2>Project Progress</h2>
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontWeight: 600 }}>Website Redesign</span>
                <span style={{ color: 'var(--primary)', fontWeight: 600 }}>65%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '65%' }}></div>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px', marginTop: '24px' }}>
              <div style={{ textAlign: 'center', padding: '16px', background: 'var(--earth-50)', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Discovery</div>
                <span className="status status-active" style={{ color: '#10B981' }}>Complete</span>
              </div>
              <div style={{ textAlign: 'center', padding: '16px', background: 'var(--earth-50)', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Design</div>
                <span className="status status-active" style={{ color: '#10B981' }}>Complete</span>
              </div>
              <div style={{ textAlign: 'center', padding: '16px', background: 'var(--primary-ultralight)', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(139, 58, 74, 0.2)' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Development</div>
                <span className="status status-pending" style={{ color: 'var(--accent)' }}>In Progress</span>
              </div>
              <div style={{ textAlign: 'center', padding: '16px', background: 'var(--earth-50)', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Launch</div>
                <span className="status status-inactive" style={{ color: 'var(--earth-400)' }}>Upcoming</span>
              </div>
            </div>
          </div>

          <div className="portal-grid stagger">
            <div className="portal-card"><div className="portal-card-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><h3>Project Files</h3><p>Access design mockups, brand assets, and project documents.</p></div>
            <div className="portal-card"><div className="portal-card-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></div><h3>Messages</h3><p>Chat directly with your design team and provide feedback.</p></div>
            <div className="portal-card"><div className="portal-card-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div><h3>Schedule</h3><p>View project timeline, milestones, and upcoming deliverables.</p></div>
            <div className="portal-card"><div className="portal-card-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M12 18v-6"/><path d="M9 15l3 3 3-3"/></svg></div><h3>Downloads</h3><p>Download purchased templates, invoices, and final deliverables.</p></div>
            <div className="portal-card"><div className="portal-card-icon" style={{ background: '#FEF3C7', color: 'var(--accent)' }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg></div><h3>Billing</h3><p>View invoices, payment history, and manage your subscription.</p></div>
            <div className="portal-card"><div className="portal-card-icon" style={{ background: '#DBEAFE', color: '#2563EB' }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg></div><h3>Settings</h3><p>Update your profile, notification preferences, and account details.</p></div>
          </div>
        </div>
      </div>
    </>
  );
}
