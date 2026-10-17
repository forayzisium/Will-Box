import Link from 'next/link';
import { Cloud } from 'lucide-react';

export default function LoginForm() {
  return (
    <section className="w-full">
      <Link
        href="/"
        aria-label="Will Box home"
        className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#27351c] text-[#f4f0e3] shadow-sm"
      >
        <Cloud className="h-6 w-6" />
      </Link>
      <h1 className="mt-6 font-serif text-3xl font-semibold text-[#f4f0e3]">
        Sign in to your account
      </h1>
      <p className="mt-2 text-sm text-[#b7c4bd]">
        New here?{' '}
        <Link
          href="/register"
          className="font-semibold text-[#b7ee45] hover:text-[#b7ee45]"
        >
          Sign up for free
        </Link>
      </p>
      <div className="mt-8 grid grid-cols-2 gap-3">
        <button
          type="button"
          className="rounded-xl border border-[#2a4248] bg-[#0e222a] px-3 py-3 text-sm font-medium text-[#dce4da] transition hover:bg-[#142831]"
        >
          Google
        </button>
        <button
          type="button"
          className="rounded-xl border border-[#2a4248] bg-[#0e222a] px-3 py-3 text-sm font-medium text-[#dce4da] transition hover:bg-[#142831]"
        >
          Microsoft
        </button>
      </div>
      <div className="my-6 flex items-center gap-3 text-xs text-[#9eada8]">
        <span className="h-px flex-1 bg-[#31505a]" />
        Or continue with email
        <span className="h-px flex-1 bg-[#31505a]" />
      </div>
      <form className="space-y-5">
        <label className="block text-sm font-medium text-[#dce4da]">
          Email address
          <input
            type="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
            className="mt-2 w-full rounded-xl border border-[#2a4248] bg-[#0e222a] px-4 py-3 text-[#f4f0e3] outline-none placeholder:text-[#889994] focus:border-[#9ad6bd]"
          />
        </label>
        <label className="block text-sm font-medium text-[#dce4da]">
          <span className="flex items-center justify-between">
            Password
            <Link
              href="/forgot-password"
              className="text-xs font-semibold text-[#b7ee45] hover:text-[#b7ee45]"
            >
              Forgot password?
            </Link>
          </span>
          <input
            type="password"
            autoComplete="current-password"
            required
            placeholder="Your password"
            className="mt-2 w-full rounded-xl border border-[#2a4248] bg-[#0e222a] px-4 py-3 text-[#f4f0e3] outline-none placeholder:text-[#889994] focus:border-[#9ad6bd]"
          />
        </label>
        <button
          type="submit"
          className="w-full rounded-xl bg-[#27351c] px-4 py-3 font-semibold text-[#f4f0e3] transition hover:bg-[#829e35]"
        >
          Sign in
        </button>
      </form>
    </section>
  );
}
