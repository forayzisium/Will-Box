'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  Shield,
  Lock,
  CheckCircle2,
  Search,
  ArrowRight,
} from 'lucide-react';

export default function SmartVaultFeature() {
  const [searchQuery, setSearchQuery] = useState('Project_Budget_2026.xlsx');
  const [isEncrypted, setIsEncrypted] = useState(true);

  return (
    <section className="relative overflow-hidden border-y border-[#e3e2d4] bg-[#f0f0e4] py-20 sm:py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#dfe8d8]/55 blur-[140px]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#cbd9c8] bg-[#e7eee1] px-3.5 py-1.5 text-xs font-semibold tracking-wide text-[#55745b]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI-Powered Cloud Indexing</span>
          </div>

          <h2 className="font-serif text-3xl font-normal italic leading-tight tracking-[-0.04em] text-[#20352a] sm:text-5xl">
            Will Box learns your <br />
            <span className="not-italic text-[#548064]">
              file habits automatically.
            </span>
          </h2>

          <p className="text-base font-normal leading-relaxed text-[#667267] sm:text-lg">
            From client financial sheets to 4K video renders, our neural engine
            categorizes, secures, and syncs your documents without manual
            tagging.
          </p>
        </div>

        <div className="relative rounded-[2rem] border border-[#d9ddca] bg-[#fbfaef] p-6 shadow-[0_24px_60px_rgba(40,61,47,0.10)] sm:p-10">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-[#e3e2d4] pb-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#d3dfcf] bg-[#e5eee0] text-[#477657]">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-[#344b3d]">
                  Zero-Knowledge Vault
                </div>
                <div className="text-xs text-[#899087]">
                  AES-256 Bit End-to-End Encryption
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-[#e1e2d5] bg-[#f0f0e4] px-4 py-2">
              <span className="text-xs text-[#788477]">Team Sync</span>
              <button
                onClick={() => setIsEncrypted(!isEncrypted)}
                aria-label="Toggle team sync"
                className={`flex h-6 w-11 cursor-pointer items-center rounded-full p-1 transition-colors ${isEncrypted ? 'bg-[#548064]' : 'bg-[#c5c9b9]'}`}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${isEncrypted ? 'translate-x-5' : 'translate-x-0'}`}
                />
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="font-mono text-sm uppercase tracking-wider text-[#788477]">
              Live Search & Smart Tagging Test:
            </div>

            <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-[#e2e2d6] bg-[#f1f0e5] p-6 sm:flex-row sm:p-8">
              <div className="flex items-center gap-3.5 w-full sm:w-auto flex-1">
                <Search className="h-5 w-5 shrink-0 text-[#64816a]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent text-base font-medium text-[#344b3d] placeholder:text-[#969b8e] focus:outline-none sm:text-lg"
                  placeholder="Type to search encrypted files..."
                />
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <span className="flex items-center gap-1.5 rounded-full border border-[#d1dfd0] bg-[#e5eee0] px-3 py-1.5 text-xs text-[#477657]">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Indexed
                </span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center justify-between rounded-2xl border border-[#e3e3d8] bg-[#fffef8] p-4">
                <div className="flex items-center gap-3">
                  <Lock className="h-4 w-4 text-[#987044]" />
                  <span className="text-sm font-medium text-[#46594d]">
                    Client_Contracts_2026.pdf
                  </span>
                </div>
                <span className="font-mono text-xs text-[#899087]">
                  14.2 MB
                </span>
              </div>

              <div className="flex items-center justify-between rounded-2xl border border-[#e3e3d8] bg-[#fffef8] p-4">
                <div className="flex items-center gap-3">
                  <Lock className="h-4 w-4 text-[#64816a]" />
                  <span className="text-sm font-medium text-[#46594d]">
                    Server_Backup_Keys.pem
                  </span>
                </div>
                <span className="font-mono text-xs text-[#899087]">2.4 KB</span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-[#e3e2d4] pt-8 sm:flex-row">
            <div className="text-xs text-[#788477]">
              Protected by Will Box Guard • No third-party access guaranteed.
            </div>

            <a
              href="/register"
              className="group inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-[#477657] transition-colors hover:text-[#294e39]"
            >
              <span>Explore Secure Vault</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
