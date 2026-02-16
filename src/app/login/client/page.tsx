'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ClientLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem('ws-client-user', JSON.stringify({ name: email.split('@')[0], email }));
      router.push('/client-portal');
    } else {
      setError('Please enter your email and password');
    }
  };

  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-dark)', padding: '40px 24px' }}>
      <div style={{ maxWidth: '420px', width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '1.5rem', fontWeight: 800, color: 'white', fontFamily: 'var(--font-heading)', marginBottom: '24px' }}>
            <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, var(--primary), var(--primary-light))', borderRadius: '10px' }}></div>
            WellSpring Digital
          </Link>
          <h2 style={{ color: 'white', marginBottom: '8px' }}>Client Portal</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)' }}>Sign in to access your account</p>
        </div>
        <form onSubmit={handleLogin} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '36px' }}>
          {error && <p style={{ color: '#EF4444', fontSize: '0.9rem', marginBottom: '16px' }}>{error}</p>}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '8px', fontWeight: 600 }}>Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@company.com" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)', color: 'white', fontSize: '0.95rem', fontFamily: 'inherit' }} />
          </div>
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '8px', fontWeight: 600 }}>Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter password" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)', color: 'white', fontSize: '0.95rem', fontFamily: 'inherit' }} />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '14px', border: 'none', cursor: 'pointer' }}>Sign In</button>
          <p style={{ textAlign: 'center', marginTop: '20px', marginBottom: 0 }}><Link href="/login" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>← Back to login options</Link></p>
        </form>
      </div>
    </section>
  );
}
