/**
 * Zarte Spirale — Isas Bild für die "Reise nach Innen".
 * Archimedische Spirale, die von außen nach innen läuft.
 */
function spiralPoints(turns = 3.1, steps = 260, maxRadius = 45) {
  const points: string[] = [];
  const total = turns * 2 * Math.PI;

  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * total;
    const r = 1.5 + (t / total) * maxRadius;
    points.push(
      `${(50 + r * Math.cos(t)).toFixed(2)},${(50 + r * Math.sin(t)).toFixed(2)}`
    );
  }

  return points.join(' ');
}

const PATH = spiralPoints();

export default function Spiral({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
    >
      <polyline points={PATH} />
    </svg>
  );
}
