import Link from 'next/link';

interface CTASectionProps {
  title: string;
  description: string;
  primaryBtn: { label: string; href: string };
  secondaryBtn?: { label: string; href: string };
}

export default function CTASection({ title, description, primaryBtn, secondaryBtn }: CTASectionProps) {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-box fade-up">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="cta-buttons">
            <Link href={primaryBtn.href} className="btn btn-primary btn-lg">{primaryBtn.label}</Link>
            {secondaryBtn && (
              <Link href={secondaryBtn.href} className="btn btn-white btn-lg">{secondaryBtn.label}</Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
