'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '120px 24px 60px', background: 'var(--bg-dark)' }}>
        <div style={{ maxWidth: '800px', width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '16px' }}>Welcome Back</h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem' }}>Choose your portal to continue</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            <Link href="/login/client" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '48px 36px', textAlign: 'center', transition: 'all 0.3s', textDecoration: 'none' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'linear-gradient(135deg, var(--primary), var(--primary-light))', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>👤</div>
              <h3 style={{ color: 'white', marginBottom: '12px', fontSize: '1.3rem' }}>Client Portal</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginBottom: 0 }}>Access your templates, licenses, invoices, and support</p>
            </Link>
            <Link href="/login/admin" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '48px 36px', textAlign: 'center', transition: 'all 0.3s', textDecoration: 'none' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'linear-gradient(135deg, var(--accent), var(--accent-light))', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>⚙</div>
              <h3 style={{ color: 'white', marginBottom: '12px', fontSize: '1.3rem' }}>Admin Dashboard</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginBottom: 0 }}>Manage templates, clients, branding, and settings</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
