import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "left",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === "center" && "text-center",
        className
      )}
    >
      {label && (
        <p
          className={cn(
            "mb-4 text-sm font-semibold tracking-[0.02em]",
            light ? "text-secondary" : "text-secondary"
          )}
        >
          {label}
        </p>
      )}
      <h2
        className={cn(
          "max-w-3xl font-heading text-3xl font-semibold sm:text-4xl lg:text-[42px]",
          align === "center" && "mx-auto",
          light ? "text-white" : "text-primary"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base leading-relaxed",
            align === "center" && "mx-auto",
            light ? "text-white/70" : "text-dark-gray"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
