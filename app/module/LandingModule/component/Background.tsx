export function Background() {
  const rows = Array.from({ length: 75 });
  const columns = Array.from({ length: 25 });

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-30">
      <div className="absolute left-1/2 top-1/2 w-[160vw] -translate-x-1/2 -translate-y-1/2 rotate-316">
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
