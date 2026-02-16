import type { Metadata } from 'next';
import '@/styles/globals.css';
import { ToastProvider } from '@/components/Toast';
import ScrollAnimations from '@/components/ScrollAnimations';

export const metadata: Metadata = {
  title: {
    default: 'WellSpring Digital | Professional Web Design for Healthcare & Beyond',
    template: '%s | WellSpring Digital',
  },
  description: 'WellSpring Digital creates stunning, conversion-focused websites for healthcare providers, wellness brands, and growing businesses.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ToastProvider>
          {children}
          <ScrollAnimations />
        </ToastProvider>
      </body>
    </html>
  );
}
