import React from 'react';
import Link from 'next/link';
import { Cloud } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[#e3e2d4] bg-[#f7f6ec] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#174f3d]">
            <Cloud className="h-4 w-4 text-[#fffdf4]" />
          </div>
          <span className="text-base font-bold text-[#263b30]">Will Box</span>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-[#748074]">
          <Link
            href="/get-app"
            className="transition-colors hover:text-[#174f3d]"
          >
            Get App
          </Link>
          <Link
            href="/help-center"
            className="transition-colors hover:text-[#174f3d]"
          >
            Help Center
          </Link>
          <Link href="/blog" className="transition-colors hover:text-[#174f3d]">
            Blog
          </Link>
          <Link
            href="/privacy"
            className="transition-colors hover:text-[#174f3d]"
          >
            Privacy Policy
          </Link>
        </div>

        <p className="text-xs text-[#93988d]">
          © 2026 Will Box Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
