import FileGrid from '@/components/private/FileGrid';

export default function SharedPage() {
  return (
    <div className="mx-auto max-w-7xl p-6 sm:p-8">
      <p className="text-sm text-[#aebbb7]">Shared with you</p>
      <h1 className="mb-8 mt-1 text-3xl font-bold text-[#f4f0e3]">
        Shared files
      </h1>
      <FileGrid />
    </div>
  );
}
