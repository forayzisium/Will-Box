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
    <aside className="relative hidden min-h-[620px] items-center justify-center overflow-hidden rounded-[2rem] border border-[#2a4248] bg-[#0e2027] p-8 lg:flex">
      <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#1b302b] blur-3xl" />
      <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-[#342a20] blur-3xl" />
      <div className="relative w-full max-w-xl">
        <div className="absolute -left-7 top-28 z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#2a4248] bg-[#0e222a] text-[#b7ee45] shadow-lg">
          <FileImage className="h-6 w-6" />
        </div>
        <div className="absolute -right-5 top-48 z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#2a4248] bg-[#0e222a] text-[#ffc278] shadow-lg">
          <FileText className="h-6 w-6" />
        </div>
        <div className="absolute -bottom-4 left-16 z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#2a4248] bg-[#0e222a] text-[#e9a17a] shadow-lg">
          <Folder className="h-6 w-6" />
        </div>

        <div className="relative rounded-[2rem] border border-[#2a4248] bg-[#0e222a] p-7 shadow-[0_24px_70px_rgba(40,61,47,0.12)] sm:p-9">
          <div className="flex items-center justify-between border-b border-[#2d474d] pb-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.17em] text-[#9eada8]">
                Your space
              </p>
              <h2 className="mt-1 font-serif text-2xl text-[#eee9d9]">
                Everything, together.
              </h2>
            </div>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#233624] text-[#b7ee45]">
              <ShieldCheck className="h-5 w-5" />
            </span>
          </div>
          <div className="relative my-8 flex h-56 items-center justify-center overflow-hidden rounded-[1.5rem] bg-[#172d2c]">
            <div className="absolute h-44 w-44 rounded-full bg-[#203729]" />
            <Cloud
              className="relative h-36 w-36 fill-[#0e222a] text-[#b7ee45] drop-shadow-[0_14px_10px_rgba(53,84,62,0.13)]"
              strokeWidth={1.1}
            />
            <span className="absolute bottom-5 right-5 flex items-center gap-2 rounded-full border border-[#2a4248] bg-[#0e222a] px-3 py-2 text-xs font-medium text-[#a8dc61]">
              <LockKeyhole className="h-3.5 w-3.5" /> Private by design
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-[#c4d1c1]">
              Your cloud is ready
            </span>
            <span className="text-[#b7c4bd]">1 TB available</span>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#203a42]">
            <div className="h-full w-[18%] rounded-full bg-[#b7ee45]" />
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-md text-center font-serif text-2xl italic leading-snug text-[#c4d1c1]">
          A little more room for the things that matter.
        </p>
      </div>
    </aside>
  );
}
