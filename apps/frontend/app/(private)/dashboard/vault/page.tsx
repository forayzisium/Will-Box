import { FolderLock } from 'lucide-react';

export default function VaultPage() {
  return (
    <div className="mx-auto max-w-7xl p-6 sm:p-8">
      <p className="text-sm text-slate-400">Private storage</p>
      <h1 className="mt-1 text-3xl font-bold text-slate-100">Safe Vault</h1>
      <section className="mt-8 max-w-2xl rounded-2xl border border-slate-800 bg-[#0D1322] p-8">
        <FolderLock className="h-8 w-8 text-blue-400" />
        <h2 className="mt-4 text-lg font-semibold text-slate-100">
          Your private vault
        </h2>
        <p className="mt-2 text-sm text-slate-400">
          Files kept here are separated from your regular drive.
        </p>
        <p className="mt-6 text-sm text-slate-500">Your vault is empty.</p>
      </section>
    </div>
  );
}
