import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Will Box - 1024 GB Free Cloud Storage',
  description: 'Next-Gen Encrypted Cloud Storage powered by Next.js & NestJS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
