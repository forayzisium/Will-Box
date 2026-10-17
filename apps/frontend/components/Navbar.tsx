'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Cloud, Download, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#233b42] bg-[#07151b] px-3 py-2 sm:px-5">
      <div className="mx-auto flex min-h-[64px] max-w-7xl items-center gap-4 rounded-xl border-2 border-[#29434a] bg-[#0e222a] px-4 sm:px-5">
        <Link
          href="/"
          aria-label="Will Box home"
          className="flex shrink-0 items-center gap-2.5"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-[#27351c] text-[#f4f0e3] shadow-sm shadow-[#27351c]/15">
            <Cloud className="h-5 w-5" />
          </span>
          <span className="flex flex-col">
            <span className="text-[20px] font-extrabold leading-none tracking-tight text-[#f4f0e3]">
              Will Box
            </span>
            <span className="mt-1 text-[9px] font-bold uppercase leading-none tracking-[0.13em] text-[#9ad6bd]">
              Secure Cloud
            </span>
          </span>
        </Link>

        <nav className="ml-2 hidden items-center rounded-full bg-[#13262c] p-1 md:flex">
          <Link
            href="/get-app"
            className="flex items-center gap-2 rounded-full bg-[#0e222a] px-4 py-2 text-sm font-medium text-[#dce4da] shadow-sm transition hover:text-[#b7ee45]"
          >
            <Download className="h-4 w-4 text-[#9ad6bd]" />
            Get App
          </Link>
          <Link
            href="/help-center"
            className="rounded-full px-4 py-2 text-sm font-medium text-[#dce4da] transition hover:bg-[#0e222a]"
          >
            Help Center
          </Link>
          <Link
            href="/blog"
            className="rounded-full px-4 py-2 text-sm font-medium text-[#dce4da] transition hover:bg-[#0e222a]"
          >
            Blog
          </Link>
        </nav>

        <div className="ml-auto hidden items-center gap-3 sm:flex">
          <Link
            href="/login"
            className="rounded-xl border border-[#2a4248] bg-[#142831] px-4 py-2.5 text-sm font-semibold text-[#dce4da] transition hover:bg-[#142831]"
          >
            Log In
          </Link>
          <Link
            href="/register"
            className="flex items-center gap-2 rounded-xl border border-[#27351c] bg-[#27351c] px-4 py-2.5 text-sm font-bold text-[#f4f0e3] shadow-sm shadow-[#27351c]/15 transition hover:bg-[#829e35]"
          >
            Get Started <span aria-hidden="true">→</span>
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="ml-auto rounded-lg p-2 text-[#f4f0e3] transition hover:bg-[#152b32] sm:ml-0 md:hidden"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="mx-auto max-w-7xl space-y-3 border-x-2 border-b-2 border-[#2a4248] bg-[#07151b] px-5 py-4 md:hidden">
          <nav className="flex flex-col">
            <Link
              href="/get-app"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 border-b border-[#13262c] py-3 text-sm text-[#e9e5d8]"
            >
              <Download className="h-4 w-4 text-[#a9d6c3]" />
              Get App
            </Link>
            <Link
              href="/help-center"
              onClick={() => setMenuOpen(false)}
              className="border-b border-[#13262c] py-3 text-sm text-[#e9e5d8]"
            >
              Help Center
            </Link>
            <Link
              href="/blog"
              onClick={() => setMenuOpen(false)}
              className="py-3 text-sm text-[#e9e5d8]"
            >
              Blog
            </Link>
          </nav>
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl border border-[#2a4248] py-3 text-center text-sm font-medium text-[#dce4da]"
            >
              Log In
            </Link>
            <Link
              href="/register"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl bg-[#27351c] py-3 text-center text-sm font-medium text-[#f4f0e3]"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
