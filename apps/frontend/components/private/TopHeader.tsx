import Link from 'next/link';

export default function TopHeader() {
  return (
    <header className="flex items-center justify-between border-b border-slate-800 bg-[#0A0E1A]/80 px-6 py-4">
      <p className="text-sm text-slate-400">Your secure cloud workspace</p>
      <Link
        href="/login"
        className="rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-300 hover:bg-slate-800"
      >
        Sign in
      </Link>
    </header>
  );
}
