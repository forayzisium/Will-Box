import { ArrowUpRight, LockKeyhole, Share2, Zap } from 'lucide-react';

const features = [
  {
    number: '01',
    title: 'Keep it close.',
    description:
      'A home for the photos, work, and memories you reach for every day.',
    icon: Zap,
    color: 'bg-[#233624] text-[#b7ee45]',
  },
  {
    number: '02',
    title: 'Keep it yours.',
    description:
      'A quieter, more private space for the files you would rather keep to yourself.',
    icon: LockKeyhole,
    color: 'bg-[#352c1f] text-[#f2bd62]',
  },
  {
    number: '03',
    title: 'Pass it along.',
    description:
      'Share a folder with the people who need it, then get back to your day.',
    icon: Share2,
    color: 'bg-[#332622] text-[#e9a17a]',
  },
];

export default function Features() {
  return (
    <section className="border-y border-[#2a4248] bg-[#0a1a21] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 grid gap-5 md:grid-cols-[1fr_0.7fr] md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a8dc61]">
              A little more ease
            </p>
            <h2 className="mt-3 max-w-2xl font-serif text-4xl leading-tight tracking-[-0.04em] text-[#f4f0e3] sm:text-5xl">
              Your digital life,{' '}
              <span className="italic text-[#a8dc61]">settled.</span>
            </h2>
          </div>
          <p className="max-w-lg text-base leading-7 text-[#b7c4bd] md:justify-self-end">
            Less time wondering where things went. More space to make, save, and
            share what matters.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {features.map(({ number, title, description, icon: Icon, color }) => (
            <article
              key={number}
              className="group rounded-[1.6rem] border border-[#2b454c] bg-[#0e222a] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(48,66,48,0.08)] sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-[0.16em] text-[#9eada8]">
                  {number}
                </span>
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-2xl ${color}`}
                >
                  <Icon className="h-5 w-5" />
                </span>
              </div>
              <h3 className="mt-8 font-serif text-2xl tracking-[-0.03em] text-[#eee9d9]">
                {title}
              </h3>
              <p className="mt-3 min-h-[3.5rem] text-sm leading-6 text-[#b7c4bd]">
                {description}
              </p>
              <div className="mt-6 flex items-center justify-between border-t border-[#2a4248] pt-4 text-xs font-medium text-[#b7c4bd]">
                <span>Made for everyday life</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
