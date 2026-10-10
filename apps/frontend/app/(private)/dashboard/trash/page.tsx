import { Trash2 } from 'lucide-react';

export default function TrashPage() {
  return (
    <div className="mx-auto max-w-7xl p-6 sm:p-8">
      <p className="text-sm text-slate-400">Recently deleted</p>
      <h1 className="mt-1 text-3xl font-bold text-slate-100">Recycle Bin</h1>
      <section className="mt-8 max-w-2xl rounded-2xl border border-slate-800 bg-[#0D1322] p-8">
        <Trash2 className="h-8 w-8 text-slate-400" />
        <h2 className="mt-4 text-lg font-semibold text-slate-100">
          Trash is empty
        </h2>
        <p className="mt-2 text-sm text-slate-400">
          Deleted items will appear here.
        </p>
      </section>
    </div>
  );
}
