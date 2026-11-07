export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`relative ${compact ? "w-8 h-8" : "w-9 h-9"} rounded-xl bg-gradient-to-br from-[#00d2ff] via-[#0070f3] to-[#0a1f44] p-[1.5px] shadow-[0_0_18px_rgba(0,166,255,0.45)]`} aria-hidden="true">
      <div className="w-full h-full bg-[#070d1e] rounded-[10px] flex items-center justify-center overflow-hidden">
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 5L33 29H24.5L20 18.5L15.5 29H7L20 5Z" fill="#00d2ff" />
          <ellipse cx="20" cy="22" rx="14" ry="5.5" stroke="#dee2f5" strokeWidth="2.2" transform="rotate(-18 20 22)" />
          <rect fill="#00d2ff" height="3" width="3" x="27" y="6" />
          <rect fill="#dee2f5" height="2.5" width="2.5" x="31" y="9" />
        </svg>
      </div>
    </div>
  );
}

export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a className="flex items-center gap-3.5 group" href="#top" aria-label="Algorise Home">
      <BrandMark compact={footer} />
      <span className="flex flex-col">
        <span className="text-xl font-bold tracking-tight text-white group-hover:text-[#00d2ff] transition-colors">Algorise</span>
        <span className="text-[9px] uppercase tracking-[0.25em] text-cyan-400 font-semibold -mt-1">IT Solution</span>
      </span>
    </a>
  );
}
