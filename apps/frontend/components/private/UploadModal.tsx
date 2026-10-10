'use client';

import { useRef, useState } from 'react';
import { Upload, X } from 'lucide-react';

export default function UploadModal() {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-500"
      >
        <Upload className="h-4 w-4" />
        Upload files
      </button>
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="upload-title"
            className="w-full max-w-lg rounded-2xl border border-slate-700 bg-[#0D1322] p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <h2
                id="upload-title"
                className="text-lg font-bold text-slate-100"
              >
                Upload files
              </h2>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close upload dialog"
                className="rounded-lg p-2 text-slate-400 hover:bg-slate-800"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <input ref={inputRef} type="file" multiple className="sr-only" />
            <button
              onClick={() => inputRef.current?.click()}
              className="mt-6 flex w-full flex-col items-center rounded-xl border border-dashed border-slate-600 px-6 py-12 text-slate-300 hover:border-blue-500"
            >
              <Upload className="mb-3 h-7 w-7 text-blue-400" />
              Choose files from your device
            </button>
            <p className="mt-3 text-center text-xs text-slate-500">
              Choose files to add them to your drive.
            </p>
          </section>
        </div>
      )}
    </>
  );
}
