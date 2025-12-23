export default function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className ?? ""}`}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        {/* Outer frame */}
        <rect
          x="4"
          y="3"
          width="24"
          height="22"
          rx="2"
          className="stroke-foreground"
          strokeWidth="2"
        />

        {/* Vertical building columns */}
        <rect x="9" y="7" width="2" height="12" className="fill-foreground" />
        <rect x="15" y="7" width="2" height="12" className="fill-foreground" />
        <rect x="21" y="7" width="2" height="12" className="fill-foreground" />

        {/* Platform base */}
        <rect
          x="6"
          y="26"
          width="20"
          height="3"
          rx="1.5"
          className="fill-foreground"
        />
      </svg>

      <span className="text-lg font-semibold tracking-tight">
        BuilderStack
      </span>
    </div>
  );
}
