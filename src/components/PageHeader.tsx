import Link from 'next/link';

interface PageHeaderProps {
  title: string;
  titleHighlight?: string;
  description: string;
  breadcrumb: string;
}

export default function PageHeader({ title, titleHighlight, description, breadcrumb }: PageHeaderProps) {
  return (
    <section className="page-header">
      <div className="container">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="sep">/</span>
          <span>{breadcrumb}</span>
        </div>
        <h1>
          {title} {titleHighlight && <span className="gradient-text">{titleHighlight}</span>}
        </h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
