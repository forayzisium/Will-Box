import Link from 'next/link';

export default function TopHeader() {
  return (
    <header className="flex items-center justify-between border-b border-[#24414a] bg-[#0d2027]/80 px-6 py-4">
      <p className="text-sm text-[#aebbb7]">Your secure cloud workspace</p>
      <Link
        href="/login"
        className="rounded-lg border border-[#31505a] px-3 py-2 text-sm text-[#d1dcd6] hover:bg-[#1a3038]"
      >
        Sign in
      </Link>
    </header>
  );
}
