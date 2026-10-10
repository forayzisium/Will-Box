import {
  Cloud,
  FileImage,
  FileText,
  Folder,
  LockKeyhole,
  ShieldCheck,
} from 'lucide-react';

export default function AuthCloudPanel() {
  return (
    <aside className="relative hidden min-h-[620px] items-center justify-center overflow-hidden rounded-[2rem] border border-[#e0e2d4] bg-[#f0f1e6] p-8 lg:flex">
      <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#e4eadb] blur-3xl" />
      <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-[#e8e3d0] blur-3xl" />
      <div className="relative w-full max-w-xl">
        <div className="absolute -left-7 top-28 z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d9ddcf] bg-[#fbfaef] text-[#5b8065] shadow-lg">
          <FileImage className="h-6 w-6" />
        </div>
        <div className="absolute -right-5 top-48 z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d9ddcf] bg-[#fbfaef] text-[#987044] shadow-lg">
          <FileText className="h-6 w-6" />
        </div>
        <div className="absolute -bottom-4 left-16 z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d9ddcf] bg-[#fbfaef] text-[#875e50] shadow-lg">
          <Folder className="h-6 w-6" />
        </div>

        <div className="relative rounded-[2rem] border border-[#d9ddca] bg-[#fbfaef] p-7 shadow-[0_24px_70px_rgba(40,61,47,0.12)] sm:p-9">
          <div className="flex items-center justify-between border-b border-[#e6e6d9] pb-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.17em] text-[#879083]">
                Your space
              </p>
              <h2 className="mt-1 font-serif text-2xl text-[#263b30]">
                Everything, together.
              </h2>
            </div>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e5eee0] text-[#477657]">
              <ShieldCheck className="h-5 w-5" />
            </span>
          </div>
          <div className="relative my-8 flex h-56 items-center justify-center overflow-hidden rounded-[1.5rem] bg-[#e9eee2]">
            <div className="absolute h-44 w-44 rounded-full bg-[#d9e5d6]" />
            <Cloud
              className="relative h-36 w-36 fill-[#fbfaef] text-[#477657] drop-shadow-[0_14px_10px_rgba(53,84,62,0.13)]"
              strokeWidth={1.1}
            />
            <span className="absolute bottom-5 right-5 flex items-center gap-2 rounded-full border border-[#d9ddcf] bg-[#fbfaef] px-3 py-2 text-xs font-medium text-[#55745b]">
              <LockKeyhole className="h-3.5 w-3.5" /> Private by design
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-[#526256]">
              Your cloud is ready
            </span>
            <span className="text-[#788477]">1 TB available</span>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#e7e8dc]">
            <div className="h-full w-[18%] rounded-full bg-[#6b9871]" />
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-md text-center font-serif text-2xl italic leading-snug text-[#526b58]">
          A little more room for the things that matter.
        </p>
      </div>
    </aside>
  );
}
