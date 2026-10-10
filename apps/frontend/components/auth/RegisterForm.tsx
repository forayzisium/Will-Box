import Link from 'next/link';
import { Cloud } from 'lucide-react';

export default function RegisterForm() {
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
        Create your account
      </h1>
      <p className="mt-2 text-sm text-[#667267]">
        Already have an account?{' '}
        <Link
          href="/login"
          className="font-semibold text-[#477657] hover:text-[#294e39]"
        >
          Sign in
        </Link>
      </p>
      <div className="mt-7 grid grid-cols-2 gap-3">
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
      <div className="my-5 flex items-center gap-3 text-xs text-[#879083]">
        <span className="h-px flex-1 bg-[#dfe1d4]" />
        Or sign up with email
        <span className="h-px flex-1 bg-[#dfe1d4]" />
      </div>
      <form className="space-y-4">
        <label className="block text-sm font-medium text-[#46594d]">
          Name
          <input
            type="text"
            autoComplete="name"
            required
            placeholder="Your full name"
            className="mt-2 w-full rounded-xl border border-[#d9ddca] bg-[#fbfaef] px-4 py-3 text-[#20352a] outline-none placeholder:text-[#a0a596] focus:border-[#64816a]"
          />
        </label>
        <label className="block text-sm font-medium text-[#46594d]">
          Email
          <input
            type="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
            className="mt-2 w-full rounded-xl border border-[#d9ddca] bg-[#fbfaef] px-4 py-3 text-[#20352a] outline-none placeholder:text-[#a0a596] focus:border-[#64816a]"
          />
        </label>
        <label className="block text-sm font-medium text-[#46594d]">
          Password
          <input
            type="password"
            autoComplete="new-password"
            minLength={8}
            required
            placeholder="At least 8 characters"
            className="mt-2 w-full rounded-xl border border-[#d9ddca] bg-[#fbfaef] px-4 py-3 text-[#20352a] outline-none placeholder:text-[#a0a596] focus:border-[#64816a]"
          />
        </label>
        <button
          type="submit"
          className="w-full rounded-xl bg-[#174f3d] px-4 py-3 font-semibold text-[#fffdf4] transition hover:bg-[#103e30]"
        >
          Sign up for free
        </button>
      </form>
      <p className="mt-5 text-center text-xs leading-5 text-[#879083]">
        By signing up, you agree to our{' '}
        <Link href="/terms" className="font-semibold text-[#477657]">
          Terms
        </Link>{' '}
        and{' '}
        <Link href="/privacy" className="font-semibold text-[#477657]">
          Privacy Policy
        </Link>
        .
      </p>
    </section>
  );
}
