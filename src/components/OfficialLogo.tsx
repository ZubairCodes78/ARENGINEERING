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
  height = 52,
  priority = false,
  className,
}: OfficialLogoProps) {
  const width = Math.round(height * 3.2);

  return (
    <span
      className={cn("relative inline-block shrink-0", className)}
      style={{ width, height }}
    >
      <Image
        src={theme === "dark" ? "/images/logo-white.png" : "/images/logo.png"}
        alt="AL RAHEEM ENGINEERING Logo"
        fill
        priority={priority}
        sizes={`${width}px`}
        className="object-contain"
      />
    </span>
  );
}
