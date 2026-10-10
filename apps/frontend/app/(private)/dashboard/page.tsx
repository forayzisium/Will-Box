import FileGrid from '@/components/private/FileGrid';
import UploadModal from '@/components/private/UploadModal';

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl p-6 sm:p-8">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm text-slate-400">My Cloud Drive</p>
          <h1 className="mt-1 text-3xl font-bold text-slate-100">Your files</h1>
        </div>
        <UploadModal />
      </div>
      <FileGrid />
    </div>
  );
}
