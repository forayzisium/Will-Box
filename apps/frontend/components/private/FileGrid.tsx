import { File, FileImage, FileVideo, Folder } from 'lucide-react';

const files = [
  {
    name: 'Product designs',
    detail: 'Folder · 12 items',
    icon: Folder,
    color: 'text-amber-400',
  },
  {
    name: 'Trip photos.jpg',
    detail: 'Image · 4.8 MB',
    icon: FileImage,
    color: 'text-cyan-400',
  },
  {
    name: 'Project video.mp4',
    detail: 'Video · 1.2 GB',
    icon: FileVideo,
    color: 'text-indigo-400',
  },
  {
    name: 'Meeting notes.pdf',
    detail: 'PDF · 820 KB',
    icon: File,
    color: 'text-blue-400',
  },
];

export default function FileGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {files.map(({ name, detail, icon: Icon, color }) => (
        <article
          key={name}
          className="rounded-2xl border border-slate-800 bg-[#0D1322] p-5 transition hover:border-slate-700"
        >
          <Icon className={`h-7 w-7 ${color}`} />
          <h3 className="mt-5 truncate font-semibold text-slate-100">{name}</h3>
          <p className="mt-1 text-xs text-slate-400">{detail}</p>
        </article>
      ))}
    </div>
  );
}
