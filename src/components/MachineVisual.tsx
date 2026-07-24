import { Gauge, SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

interface MachineVisualProps {
  model: string;
  name?: string;
  tone?: "light" | "dark";
  className?: string;
}

export default function MachineVisual({ model, name, tone = "light", className }: MachineVisualProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "relative isolate flex min-h-[260px] overflow-hidden rounded-lg border",
        isDark ? "border-white/10 bg-[#082744]" : "border-border bg-light-gray",
        className
      )}
      aria-label={name ? `${name} machine visual` : `${model} machine visual`}
    >
      <div className={cn("industrial-grid absolute inset-0", isDark ? "opacity-70" : "opacity-20")} />
      <div className={cn("industrial-light absolute inset-0", !isDark && "opacity-20")} />

      <div className="absolute left-[10%] top-[18%] h-[50%] w-[70%] rounded-md border border-current opacity-20" />
      <div className="absolute left-[16%] top-[30%] h-[27%] w-[52%] rounded-sm border border-current opacity-30" />
      <div className="absolute bottom-[26%] left-[18%] h-2 w-[56%] rounded-full bg-current opacity-25" />
      <div className="absolute bottom-[20%] left-[14%] h-10 w-10 rounded-full border-[6px] border-current opacity-25" />
      <div className="absolute bottom-[20%] right-[20%] h-10 w-10 rounded-full border-[6px] border-current opacity-25" />
      <div className="absolute right-[18%] top-[24%] h-[38%] w-[15%] rounded-sm border border-current opacity-25" />
      <div className="absolute right-[21%] top-[31%] h-3 w-[9%] rounded-full bg-current opacity-30" />
      <div className="absolute bottom-[37%] right-[14%] h-px w-[20%] bg-current opacity-30" />

      <div
        className={cn(
          "absolute left-6 top-6 rounded-md border px-3 py-2",
          isDark ? "border-white/15 bg-white/8 text-white" : "border-white bg-white text-primary shadow-sm"
        )}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.16em]">{model}</p>
      </div>

      <div
        className={cn(
          "absolute bottom-6 right-6 flex items-center gap-3 rounded-md border px-3 py-2",
          isDark ? "border-white/15 bg-white/8 text-white/75" : "border-border bg-white text-dark-gray shadow-sm"
        )}
      >
        <SlidersHorizontal className="h-4 w-4" strokeWidth={1.8} />
        <Gauge className="h-4 w-4" strokeWidth={1.8} />
      </div>
    </div>
  );
}
