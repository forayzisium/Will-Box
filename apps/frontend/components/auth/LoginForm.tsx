import Link from 'next/link';
import { Cloud } from 'lucide-react';

export default function LoginForm() {
  return (
    <section className="w-full">
      <Link
        href="/"
        aria-label="Will Box home"
        className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#174f3d] text-[#fffdf4] shadow-sm"
      >
        <Cloud className="h-6 w-6" />
      </Link>
      <h1 className="mt-6 font-serif text-3xl font-semibold text-[#20352a]">
        Sign in to your account
      </h1>
      <p className="mt-2 text-sm text-[#667267]">
        New here?{' '}
        <Link
          href="/register"
          className="font-semibold text-[#477657] hover:text-[#294e39]"
        >
          Sign up for free
        </Link>
      </p>
      <div className="mt-8 grid grid-cols-2 gap-3">
        <button
          type="button"
          className="rounded-xl border border-[#d9ddca] bg-[#fbfaef] px-3 py-3 text-sm font-medium text-[#40574a] transition hover:bg-white"
        >
          Google
        </button>
        <button
          type="button"
          className="rounded-xl border border-[#d9ddca] bg-[#fbfaef] px-3 py-3 text-sm font-medium text-[#40574a] transition hover:bg-white"
        >
          Microsoft
        </button>
      </div>
      <div className="my-6 flex items-center gap-3 text-xs text-[#879083]">
        <span className="h-px flex-1 bg-[#dfe1d4]" />
        Or continue with email
        <span className="h-px flex-1 bg-[#dfe1d4]" />
      </div>
      <form className="space-y-5">
        <label className="block text-sm font-medium text-[#46594d]">
          Email address
          <input
            type="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
            className="mt-2 w-full rounded-xl border border-[#d9ddca] bg-[#fbfaef] px-4 py-3 text-[#20352a] outline-none placeholder:text-[#a0a596] focus:border-[#64816a]"
          />
        </label>
        <label className="block text-sm font-medium text-[#46594d]">
          <span className="flex items-center justify-between">
            Password
            <Link
              href="/forgot-password"
              className="text-xs font-semibold text-[#477657] hover:text-[#294e39]"
            >
              Forgot password?
            </Link>
          </span>
          <input
            type="password"
            autoComplete="current-password"
            required
            placeholder="Your password"
            className="mt-2 w-full rounded-xl border border-[#d9ddca] bg-[#fbfaef] px-4 py-3 text-[#20352a] outline-none placeholder:text-[#a0a596] focus:border-[#64816a]"
          />
        </label>
        <button
          type="submit"
          className="w-full rounded-xl bg-[#174f3d] px-4 py-3 font-semibold text-[#fffdf4] transition hover:bg-[#103e30]"
        >
          Sign in
        </button>
      </form>
    </section>
  );
}
