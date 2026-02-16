import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo">
              <div className="logo-icon"></div>
              Well<span>Spring</span> Digital
            </Link>
            <p>Crafting beautiful, high-performing websites that help healthcare providers and growing businesses thrive in the digital world.</p>
            <div className="footer-social">
              <a href="#" aria-label="Twitter">&#120143;</a>
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="Instagram">&#9679;</a>
              <a href="#" aria-label="Facebook">f</a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <Link href="/about">About Us</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/contact">Contact</Link>
            <a href="#">Careers</a>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <Link href="/services">Web Design</Link>
            <Link href="/services">Development</Link>
            <Link href="/services">Branding</Link>
            <Link href="/templates">Templates</Link>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <Link href="/login">Client Portal</Link>
            <a href="#">Knowledge Base</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} WellSpring Digital. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
