type OrbitProps = {
  stroke: string;
  gradientId?: string;
};

export default function Orbit({ stroke, gradientId }: OrbitProps) {
  const rings = [1, 2, 3, 4, 5, 6].map((i) => ({
    r: i * 46,
    opacity: 0.4 + i * 0.05,
  }));

  const useGradient = stroke === "grad";

  return (
    <svg viewBox="0 0 620 620" width="100%" height="100%">
      {useGradient && gradientId && (
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1D4ED8" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
      )}
      {rings.map((ring) => (
        <circle
          key={ring.r}
          cx={310}
          cy={310}
          r={ring.r}
          fill="none"
          stroke={useGradient ? `url(#${gradientId})` : stroke}
          strokeWidth={1}
          opacity={ring.opacity}
        />
      ))}
    </svg>
  );
}
