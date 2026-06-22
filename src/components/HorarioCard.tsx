export default function HorarioCard() {
  return (
    <div className="w-full max-w-[340px] p-[30px] rounded-card bg-gradient-to-br from-panel-from to-panel-to border border-white/[0.09] shadow-card">
      <div className="flex items-center gap-3.5 mb-6">
        <div className="w-11 h-11 shrink-0 rounded-[12px] bg-gradient-to-br from-blue to-violet flex items-center justify-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m22 8-6 4 6 4V8Z" />
            <rect x="2" y="6" width="14" height="12" rx="2" />
          </svg>
        </div>
        <div>
          <div className="font-sora font-bold text-base">
            Videollamada ROOMIE
          </div>
          <div className="text-[13px] text-ink-quaternary mt-0.5">
            15 min · online
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        <div className="flex items-center justify-between px-4 py-3.5 rounded-[12px] bg-white/[0.05] border border-white/[0.08]">
          <span className="text-[14px] text-ink-secondary">
            Lunes a viernes
          </span>
          <span className="text-[14px] text-ink-secondary">18:00 a 21:00</span>
        </div>

        <div className="flex items-center justify-between px-4 py-3.5 rounded-[12px] bg-gradient-to-br from-[rgba(29,78,216,0.22)] to-[rgba(124,58,237,0.22)] border border-violet/40">
          <span className="text-[14px] text-white font-semibold">
            Sábados
          </span>
          <span className="text-[14px] text-white font-semibold">
            10:00 a 13:00
          </span>
        </div>

        <div className="flex items-center justify-between px-4 py-3.5 rounded-[12px] bg-white/[0.05] border border-white/[0.08]">
          <span className="text-[14px] text-ink-secondary">
            Coordinamos por mail
          </span>
          <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-match">
            <span className="w-[7px] h-[7px] rounded-full bg-match inline-block" />
            Disponible
          </span>
        </div>
      </div>
    </div>
  );
}
