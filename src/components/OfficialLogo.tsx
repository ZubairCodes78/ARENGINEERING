import Image from "next/image";
import { cn } from "@/lib/utils";

interface OfficialLogoProps {
  theme?: "light" | "dark";
  height?: number;
  priority?: boolean;
  className?: string;
}

export default function OfficialLogo({
  theme = "light",
  height,
  priority = false,
  className,
}: OfficialLogoProps) {
  const width = height ? Math.round(height * 3.2) : undefined;

  return (
    <span
      className={cn(
        "relative inline-block shrink-0",
        height ? "" : "h-[42px] w-[134px] sm:h-[52px] sm:w-[166px]",
        className
      )}
      style={height && width ? { width, height } : undefined}
    >
      <Image
        src={theme === "dark" ? "/images/logo-white.png" : "/images/logo.png"}
        alt="AL RAHEEM ENGINEERING Logo"
        fill
        priority={priority}
        sizes={height && width ? `${width}px` : "(min-width: 640px) 166px, 134px"}
        className="object-contain"
      />
    </span>
  );
}
