import { useEffect, useMemo, useState } from "react";

export function Background() {
  const [viewport, setViewport] = useState(() => {
    if (typeof window === "undefined") {
      return { width: 1920, height: 1080 };
    }

    return { width: window.innerWidth, height: window.innerHeight };
  });

  useEffect(() => {
    let rafId = 0;

    const handleResize = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setViewport({ width: window.innerWidth, height: window.innerHeight });
      });
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { rows, columns, canvasSize } = useMemo(() => {
    const rotationDegrees = 316;
    const rotationRadians = (rotationDegrees * Math.PI) / 180;
    const absCos = Math.abs(Math.cos(rotationRadians));
    const absSin = Math.abs(Math.sin(rotationRadians));

    // Smallest square side that can cover the larger viewport edge after rotation.
    const minCoverSide =
      Math.max(viewport.width, viewport.height) / (absCos + absSin);
    // Add safety bleed for row staggering + font metric differences across devices.
    const overscanCanvas =
      minCoverSide + Math.max(viewport.width, viewport.height) * 0.32 + 180;

    const tileWidth = 112;
    const tileHeight = 24;

    const rowCount = Math.ceil((overscanCanvas + 160) / tileHeight) + 6;
    const columnCount = Math.ceil((overscanCanvas + 240) / tileWidth) + 8;

    return {
      rows: Array.from({ length: rowCount }),
      columns: Array.from({ length: columnCount }),
      canvasSize: overscanCanvas,
    };
  }, [viewport.height, viewport.width]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-30">
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-316"
        style={{ width: canvasSize, height: canvasSize }}
      >
        <div className="flex flex-col gap-1.5 opacity-75">
          {rows.map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-nowrap gap-3 whitespace-nowrap"
              style={{ marginLeft: rowIndex % 2 === 0 ? 0 : 28 }}
            >
              {columns.map((__, columnIndex) => (
                <span
                  key={`${rowIndex}-${columnIndex}`}
                  data-text="Zoya's Planet"
                  className="w-fit text-shadow-layer text-center text-p1 text-dark-blue text-shadow-4 text-shadow-dark-blue text-stroke-4 text-stroke-light-blue"
                >
                  Zoya's Planet
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
