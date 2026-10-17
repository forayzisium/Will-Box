import { File, FileImage, FileVideo, Folder } from 'lucide-react';

const files = [
  {
    name: 'Product designs',
    detail: 'Folder · 12 items',
    icon: Folder,
    color: 'text-[#ffc278]',
  },
  {
    name: 'Trip photos.jpg',
    detail: 'Image · 4.8 MB',
    icon: FileImage,
    color: 'text-[#a9d6c3]',
  },
  {
    name: 'Project video.mp4',
    detail: 'Video · 1.2 GB',
    icon: FileVideo,
    color: 'text-[#c2b2ff]',
  },
  {
    name: 'Meeting notes.pdf',
    detail: 'PDF · 820 KB',
    icon: File,
    color: 'text-[#b7ee45]',
  },
];

export default function FileGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {files.map(({ name, detail, icon: Icon, color }) => (
        <article
          key={name}
          className="rounded-2xl border border-[#24414a] bg-[#10232b] p-5 transition hover:border-[#31505a]"
        >
          <Icon className={`h-7 w-7 ${color}`} />
          <h3 className="mt-5 truncate font-semibold text-[#f4f0e3]">{name}</h3>
          <p className="mt-1 text-xs text-[#aebbb7]">{detail}</p>
        </article>
      ))}
    </div>
  );
}
