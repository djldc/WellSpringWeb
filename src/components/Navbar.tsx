'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [branding, setBranding] = useState({ businessName: 'WellSpring Digital', logoUrl: '' });

  useEffect(() => {
    const stored = localStorage.getItem('ws-branding');
    if (stored) { setBranding(JSON.parse(stored)); }
    const handleStorage = () => {
      const updated = localStorage.getItem('ws-branding');
      if (updated) setBranding(JSON.parse(updated));
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const firstName = branding.businessName.split(' ')[0] || 'Well';
  const restName = branding.businessName.split(' ').slice(1).join(' ');

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link href="/" className="logo">
          {branding.logoUrl ? (
            <img src={branding.logoUrl} alt="Logo" style={{ width: '40px', height: '40px', borderRadius: '10px', objectFit: 'cover' }} />
          ) : (
            <div className="logo-icon"></div>
          )}
          {firstName}<span>{restName ? ' ' + restName : ''}</span>
        </Link>
        <div className={`nav-links ${mobileOpen ? 'open' : ''}`}>
          <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
          <Link href="/services" className={pathname === '/services' ? 'active' : ''}>Services</Link>
          <Link href="/portfolio" className={pathname === '/portfolio' ? 'active' : ''}>Portfolio</Link>
          <Link href="/about" className={pathname === '/about' ? 'active' : ''}>About</Link>
          <Link href="/templates" className={pathname === '/templates' ? 'active' : ''}>Templates</Link>
          <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</Link>
          <Link href="/login" className="nav-cta">Sign In</Link>
        </div>
        <button className={`nav-toggle ${mobileOpen ? 'active' : ''}`} onClick={() => setMobileOpen(!mobileOpen)}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  );
}
