import { cn } from "@/lib/cn";

export function MeshBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(168,85,247,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.35) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, #000 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, #000 30%, transparent 75%)",
        }}
      />
      <div className="parallax-down absolute -top-24 left-1/2 -translate-x-1/2">
        <div className="mesh-orb-a h-[520px] w-[820px] rounded-full bg-brand/30 blur-[120px]" />
      </div>
      <div className="parallax-up absolute right-[-10%] top-1/3 h-[380px] w-[380px]">
        <div className="mesh-orb-b h-full w-full rounded-full bg-accent/20 blur-[120px]" />
      </div>
    </div>
  );
}
