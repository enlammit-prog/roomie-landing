type SectionEyebrowProps = {
  number: string;
  label: string;
  className?: string;
};

export default function SectionEyebrow({
  number,
  label,
  className = "",
}: SectionEyebrowProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-[13px] py-1.5 rounded-full bg-accent-blue/[0.09] border border-accent-blue/[0.28] ${className}`}
    >
      <span className="font-sora font-bold text-xs text-accent-blue">
        {number}
      </span>
      <span className="text-xs font-bold tracking-[0.1em] uppercase text-ink-tertiary">
        {label}
      </span>
    </div>
  );
}
