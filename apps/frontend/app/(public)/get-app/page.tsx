import GetApp from '@/components/GetApp';

export default function GetAppPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#64816a]">
          Your files, close at hand
        </p>
        <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-[#20352a] sm:text-5xl">
          Will Box goes where you go.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-[#667267]">
          Pick up your photos, projects, and documents from the devices you use
          every day.
        </p>
      </div>
      <GetApp />
    </div>
  );
}
