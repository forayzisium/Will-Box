import Link from 'next/link';
import {
  ArrowDownToLine,
  ArrowRight,
  Check,
  Cloud,
  FileImage,
  FileText,
  Folder,
  LockKeyhole,
  ShieldCheck,
} from 'lucide-react';

const files = [
  {
    name: 'Summer memories',
    detail: '24 photos · 186 MB',
    icon: FileImage,
    tone: 'bg-[#d9e5d6] text-[#285b49]',
  },
  {
    name: 'Studio assets',
    detail: '8 items · Updated today',
    icon: Folder,
    tone: 'bg-[#f2dfbd] text-[#8c5d27]',
  },
  {
    name: 'Notes for later.pdf',
    detail: 'PDF · 2.4 MB',
    icon: FileText,
    tone: 'bg-[#e9d9d2] text-[#875342]',
  },
];

export default function Hero() {
  return (
    <section className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 pt-16 sm:px-8 lg:grid-cols-[1fr_0.92fr] lg:gap-16 lg:pb-32 lg:pt-24">
      <div className="relative z-10 text-center lg:text-left">
        <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-[#cbd9c8] bg-[#edf2e9] px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#38614e] lg:mx-0">
          <ShieldCheck className="h-4 w-4" /> A calmer place for your files
        </div>
        <h1 className="font-serif text-[clamp(3.5rem,8vw,6.8rem)] leading-[0.91] tracking-[-0.065em] text-[#172b25]">
          Room for all
          <br />
          <span className="font-normal italic text-[#477b62]">
            your things.
          </span>
        </h1>
        <p className="mx-auto mt-7 max-w-xl text-lg leading-8 text-[#56645a] sm:text-xl lg:mx-0">
          Photos, projects, and the little things you want to keep. Bring it all
          together in one cloud that feels like yours.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
          <Link
            href="/register"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#174f3d] px-7 py-4 text-sm font-semibold text-[#fffdf4] shadow-[0_10px_24px_rgba(23,79,61,0.16)] transition hover:-translate-y-0.5 hover:bg-[#103e30] sm:w-auto"
          >
            Make room for 1 TB{' '}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/get-app"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#c9d1c1] bg-[#fbfaef] px-7 py-4 text-sm font-semibold text-[#344b40] transition hover:border-[#78927f] hover:bg-white sm:w-auto"
          >
            <ArrowDownToLine className="h-4 w-4" /> Explore the apps
          </Link>
        </div>
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-[#788177] lg:justify-start">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#dce8d8] text-[#38614e]">
            <Check className="h-3 w-3" />
          </span>
          Your first terabyte is on us
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[540px] lg:mx-0 lg:justify-self-end">
        <div className="absolute -right-5 -top-8 h-28 w-28 rounded-full bg-[#e8d8b9] sm:-right-8 sm:h-36 sm:w-36" />
        <div className="absolute -bottom-7 -left-8 h-32 w-32 rounded-full bg-[#dce8d8] sm:-left-12 sm:h-44 sm:w-44" />
        <div className="relative rotate-[1deg] rounded-[2rem] border border-[#d9d9c7] bg-[#f5f3e7] p-3 shadow-[0_28px_70px_rgba(40,61,47,0.13)] sm:p-5">
          <div className="overflow-hidden rounded-[1.4rem] border border-[#e3e1d2] bg-[#fffef7]">
            <div className="flex items-center justify-between border-b border-[#e9e8dc] px-5 py-4 sm:px-7">
              <div className="flex items-center gap-2.5 text-sm font-semibold text-[#294337]">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#e5eee1]">
                  <Cloud className="h-4 w-4 text-[#386c54]" />
                </span>{' '}
                My little cloud
              </div>
              <span className="rounded-full bg-[#e7efe2] px-3 py-1.5 text-[11px] font-semibold text-[#3f6a53]">
                All in sync
              </span>
            </div>
            <div className="p-5 sm:p-7">
              <div className="flex items-end justify-between gap-3">
                <div>
                  <p className="text-xs font-medium text-[#82877b]">
                    YOUR SPACE
                  </p>
                  <p className="mt-1 font-serif text-3xl tracking-tight text-[#23372d]">
                    A little breathing room
                  </p>
                </div>
                <span className="pb-1 text-xs text-[#748074]">
                  342 GB of 1 TB
                </span>
              </div>
              <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#e9e9dc]">
                <div className="h-full w-[34%] rounded-full bg-[#5e8c68]" />
              </div>
              <div className="mt-7 flex items-center justify-between">
                <h2 className="text-sm font-semibold text-[#34483c]">
                  Recently tucked away
                </h2>
                <span className="text-xs text-[#788177]">View all</span>
              </div>
              <div className="mt-3 space-y-2.5">
                {files.map(({ name, detail, icon: Icon, tone }) => (
                  <div
                    key={name}
                    className="flex items-center gap-3 rounded-2xl border border-[#eeede3] bg-[#fffefb] p-3"
                  >
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${tone}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-[#35463b]">
                        {name}
                      </p>
                      <p className="mt-0.5 text-xs text-[#899087]">{detail}</p>
                    </div>
                    <span className="text-xs text-[#a2a498]">•••</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-[#e9e8dc] bg-[#faf9f1] px-5 py-3.5 text-xs text-[#748074] sm:px-7">
              <span className="inline-flex items-center gap-2">
                <LockKeyhole className="h-3.5 w-3.5 text-[#548064]" /> Private
                by design
              </span>
              <span>Updated just now</span>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-7 right-2 flex items-center gap-2 rounded-full border border-[#d8dfd2] bg-[#fffef7] px-4 py-2.5 text-xs font-medium text-[#46614f] shadow-lg sm:-right-5">
          <span className="h-2 w-2 rounded-full bg-[#75a67c]" /> Your files are
          right where you left them
        </div>
      </div>
    </section>
  );
}
