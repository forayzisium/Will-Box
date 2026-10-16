import React from 'react';
import Sidebar from '@/components/private/Sidebar';
import TopHeader from '@/components/private/TopHeader';

export default function PrivateDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#061117] text-[#e9e5d8] md:flex">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <TopHeader />
        <main className="flex-1 bg-[#061117]">{children}</main>
      </div>
    </div>
  );
}
