import { FolderLock } from 'lucide-react';

export default function VaultPage() {
  return (
    <div className="mx-auto max-w-7xl p-6 sm:p-8">
      <p className="text-sm text-[#aebbb7]">Private storage</p>
      <h1 className="mt-1 text-3xl font-bold text-[#f4f0e3]">Safe Vault</h1>
      <section className="mt-8 max-w-2xl rounded-2xl border border-[#24414a] bg-[#10232b] p-8">
        <FolderLock className="h-8 w-8 text-[#b7ee45]" />
        <h2 className="mt-4 text-lg font-semibold text-[#f4f0e3]">
          Your private vault
        </h2>
        <p className="mt-2 text-sm text-[#aebbb7]">
          Files kept here are separated from your regular drive.
        </p>
        <p className="mt-6 text-sm text-[#849692]">Your vault is empty.</p>
      </section>
    </div>
  );
}
