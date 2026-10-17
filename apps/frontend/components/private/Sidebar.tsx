import Link from 'next/link';
import { Files, FolderLock, Share2, Trash2, Cloud } from 'lucide-react';

const links = [
  { href: '/dashboard', label: 'My Drive', icon: Files },
  { href: '/dashboard/shared', label: 'Shared', icon: Share2 },
  { href: '/dashboard/vault', label: 'Safe Vault', icon: FolderLock },
  { href: '/dashboard/trash', label: 'Trash', icon: Trash2 },
];

export default function Sidebar() {
  return (
    <aside className="flex w-full shrink-0 flex-col border-b border-[#24414a] bg-[#0d2027] p-5 md:min-h-screen md:w-64 md:border-b-0 md:border-r">
      <Link
        href="/dashboard"
        className="mb-8 flex items-center gap-3 text-lg font-bold text-[#f4f0e3]"
      >
        <Cloud className="text-[#b7ee45]" />
        Will Box
      </Link>
      <nav className="grid grid-cols-2 gap-2 md:grid-cols-1">
        {links.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-[#d1dcd6] transition hover:bg-[#1a3038] hover:text-[#f4f0e3]"
          >
            <Icon className="h-4 w-4 text-[#b7ee45]" />
            {label}
          </Link>
        ))}
      </nav>
      <div className="mt-auto hidden rounded-2xl border border-[#24414a] bg-[#10252d] p-4 md:block">
        <p className="text-sm font-semibold text-[#e9e5d8]">Storage</p>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#1a3038]">
          <div className="h-full w-1/3 rounded-full bg-[#a8dc61]" />
        </div>
        <p className="mt-2 text-xs text-[#aebbb7]">342.8 GB of 1 TB used</p>
      </div>
    </aside>
  );
}
