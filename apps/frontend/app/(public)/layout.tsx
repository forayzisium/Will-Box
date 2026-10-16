import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#061117] font-sans text-[#f4f0e3]">
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#1a302b]/55 blur-[110px]" />
        <div className="absolute -right-40 top-[42%] h-[460px] w-[460px] rounded-full bg-[#322a1e]/45 blur-[130px]" />
      </div>

      <Navbar />

      <main className="relative z-10 flex-grow">{children}</main>

      <Footer />
    </div>
  );
}
