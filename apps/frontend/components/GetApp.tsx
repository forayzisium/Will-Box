import { Monitor, Smartphone } from 'lucide-react';

const platforms = [
  {
    name: 'Mobile',
    devices: 'Android & iOS',
    description: 'Keep your camera roll and everyday files within reach.',
    icon: Smartphone,
    accent: 'bg-[#e5eee0] text-[#477657]',
  },
  {
    name: 'Desktop',
    devices: 'Windows & Mac',
    description: 'Bring your cloud drive to your laptop or desktop.',
    icon: Monitor,
    accent: 'bg-[#f1e5cd] text-[#987044]',
  },
];

export default function GetApp() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-[#d9ddca] bg-[#f0f0e4] p-6 shadow-[0_22px_55px_rgba(40,61,47,0.08)] sm:p-10 lg:p-12">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full border border-[#cbd9c8] bg-[#e5eee0] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#55745b]">
            One cloud, all your screens
          </span>
          <h2 className="mt-5 font-serif text-3xl leading-tight tracking-[-0.035em] text-[#20352a] sm:text-4xl">
            Your things, in their place.
          </h2>
          <p className="mt-3 text-base leading-7 text-[#667267]">
            Open your Will Box from your phone or computer and carry on where
            you left off.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
          {platforms.map(
            ({ name, devices, description, icon: Icon, accent }) => (
              <article
                key={name}
                className="flex items-start gap-4 rounded-2xl border border-[#e0e1d5] bg-[#fbfaef] p-5 transition hover:border-[#bdcdbd] hover:shadow-[0_10px_26px_rgba(40,61,47,0.06)] sm:p-6"
              >
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${accent}`}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#879083]">
                    {name}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-[#344b3d]">
                    {devices}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#788477]">
                    {description}
                  </p>
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}
