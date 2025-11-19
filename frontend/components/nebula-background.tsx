export function NebulaBackground() {
  return (
    <div className="fixed inset-0 z-0">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-background via-background to-muted" />

      {/* Nebula effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Purple nebula */}
        <div
          className="absolute -top-1/2 left-1/4 h-[800px] w-[800px] rounded-full bg-nebula-purple opacity-20 blur-[120px] animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        {/* Blue nebula */}
        <div
          className="absolute right-1/4 top-1/3 h-[600px] w-[600px] rounded-full bg-nebula-blue opacity-25 blur-[100px] animate-pulse"
          style={{ animationDuration: "6s", animationDelay: "1s" }}
        />

        {/* Pink nebula */}
        <div
          className="absolute bottom-1/4 left-1/3 h-[700px] w-[700px] rounded-full bg-nebula-pink opacity-15 blur-[110px] animate-pulse"
          style={{ animationDuration: "10s", animationDelay: "2s" }}
        />
      </div>

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay">
        <svg className="h-full w-full">
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency={"0.8"}
              numOctaves={"4"}
              stitchTiles={"stitch"}
            />
          </filter>
          <rect width={"100%"} height={"100%"} filter="url(#noise)"/>
        </svg>
      </div>
    </div>
  );
}
