'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Cloud, Download, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e7e5d4] bg-[#fffef2] px-3 py-2 sm:px-5">
      <div className="mx-auto flex min-h-[64px] max-w-7xl items-center gap-4 rounded-xl border-2 border-[#dedfce] bg-[#fbfaef] px-4 sm:px-5">
        <Link
          href="/"
          aria-label="Will Box home"
          className="flex shrink-0 items-center gap-2.5"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-[#174f3d] text-[#fbfaef] shadow-sm shadow-[#174f3d]/15">
            <Cloud className="h-5 w-5" />
          </span>
          <span className="flex flex-col">
            <span className="text-[20px] font-extrabold leading-none tracking-tight text-[#20352a]">
              Will Box
            </span>
            <span className="mt-1 text-[9px] font-bold uppercase leading-none tracking-[0.13em] text-[#64816a]">
              Secure Cloud
            </span>
          </span>
        </Link>

        <nav className="ml-2 hidden items-center rounded-full bg-[#e9e9dc] p-1 md:flex">
          <Link
            href="/get-app"
            className="flex items-center gap-2 rounded-full bg-[#fbfaef] px-4 py-2 text-sm font-medium text-[#344b3d] shadow-sm transition hover:text-[#174f3d]"
          >
            <Download className="h-4 w-4 text-[#64816a]" />
            Get App
          </Link>
          <Link
            href="/help-center"
            className="rounded-full px-4 py-2 text-sm font-medium text-[#344b3d] transition hover:bg-[#fbfaef]"
          >
            Help Center
          </Link>
          <Link
            href="/blog"
            className="rounded-full px-4 py-2 text-sm font-medium text-[#344b3d] transition hover:bg-[#fbfaef]"
          >
            Blog
          </Link>
        </nav>

        <div className="ml-auto hidden items-center gap-3 sm:flex">
          <Link
            href="/login"
            className="rounded-xl border border-[#d9ddcf] bg-[#f3f2e7] px-4 py-2.5 text-sm font-semibold text-[#40574a] transition hover:bg-white"
          >
            Log In
          </Link>
          <Link
            href="/register"
            className="flex items-center gap-2 rounded-xl border border-[#174f3d] bg-[#174f3d] px-4 py-2.5 text-sm font-bold text-[#fffdf4] shadow-sm shadow-[#174f3d]/15 transition hover:bg-[#103e30]"
          >
            Get Started <span aria-hidden="true">→</span>
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="ml-auto rounded-lg p-2 text-[#171b18] transition hover:bg-[#eeeee1] sm:ml-0 md:hidden"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="mx-auto max-w-7xl space-y-3 border-x-2 border-b-2 border-[#e3e2d1] bg-[#fffef2] px-5 py-4 md:hidden">
          <nav className="flex flex-col">
            <Link
              href="/get-app"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 border-b border-[#e9e8d7] py-3 text-sm text-[#252923]"
            >
              <Download className="h-4 w-4 text-cyan-600" />
              Get App
            </Link>
            <Link
              href="/help-center"
              onClick={() => setMenuOpen(false)}
              className="border-b border-[#e9e8d7] py-3 text-sm text-[#252923]"
            >
              Help Center
            </Link>
            <Link
              href="/blog"
              onClick={() => setMenuOpen(false)}
              className="py-3 text-sm text-[#252923]"
            >
              Blog
            </Link>
          </nav>
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl border border-[#d9ddcf] py-3 text-center text-sm font-medium text-[#40574a]"
            >
              Log In
            </Link>
            <Link
              href="/register"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl bg-[#174f3d] py-3 text-center text-sm font-medium text-[#fffdf4]"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
