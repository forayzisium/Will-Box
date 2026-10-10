import { ArrowUpRight, LockKeyhole, Share2, Zap } from 'lucide-react';

const features = [
  {
    number: '01',
    title: 'Keep it close.',
    description:
      'A home for the photos, work, and memories you reach for every day.',
    icon: Zap,
    color: 'bg-[#e5eee0] text-[#477657]',
  },
  {
    number: '02',
    title: 'Keep it yours.',
    description:
      'A quieter, more private space for the files you would rather keep to yourself.',
    icon: LockKeyhole,
    color: 'bg-[#f1e5cd] text-[#986a32]',
  },
  {
    number: '03',
    title: 'Pass it along.',
    description:
      'Share a folder with the people who need it, then get back to your day.',
    icon: Share2,
    color: 'bg-[#eadfd9] text-[#8b5e4e]',
  },
];

export default function Features() {
  return (
    <section className="border-y border-[#e3e2d4] bg-[#f0f0e4] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 grid gap-5 md:grid-cols-[1fr_0.7fr] md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#68806c]">
              A little more ease
            </p>
            <h2 className="mt-3 max-w-2xl font-serif text-4xl leading-tight tracking-[-0.04em] text-[#20352a] sm:text-5xl">
              Your digital life,{' '}
              <span className="italic text-[#548064]">settled.</span>
            </h2>
          </div>
          <p className="max-w-lg text-base leading-7 text-[#667267] md:justify-self-end">
            Less time wondering where things went. More space to make, save, and
            share what matters.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {features.map(({ number, title, description, icon: Icon, color }) => (
            <article
              key={number}
              className="group rounded-[1.6rem] border border-[#e1e2d5] bg-[#fbfaef] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(48,66,48,0.08)] sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-[0.16em] text-[#9aa093]">
                  {number}
                </span>
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-2xl ${color}`}
                >
                  <Icon className="h-5 w-5" />
                </span>
              </div>
              <h3 className="mt-8 font-serif text-2xl tracking-[-0.03em] text-[#263b30]">
                {title}
              </h3>
              <p className="mt-3 min-h-[3.5rem] text-sm leading-6 text-[#70796e]">
                {description}
              </p>
              <div className="mt-6 flex items-center justify-between border-t border-[#e9e8dd] pt-4 text-xs font-medium text-[#718071]">
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
