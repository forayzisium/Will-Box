import { Trash2 } from 'lucide-react';

export default function TrashPage() {
  return (
    <div className="mx-auto max-w-7xl p-6 sm:p-8">
      <p className="text-sm text-[#aebbb7]">Recently deleted</p>
      <h1 className="mt-1 text-3xl font-bold text-[#f4f0e3]">Recycle Bin</h1>
      <section className="mt-8 max-w-2xl rounded-2xl border border-[#24414a] bg-[#10232b] p-8">
        <Trash2 className="h-8 w-8 text-[#aebbb7]" />
        <h2 className="mt-4 text-lg font-semibold text-[#f4f0e3]">
          Trash is empty
        </h2>
        <p className="mt-2 text-sm text-[#aebbb7]">
          Deleted items will appear here.
        </p>
      </section>
    </div>
  );
}
