import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "outline-light" | "whatsapp";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-secondary text-white hover:bg-secondary/90 border border-secondary shadow-[0_10px_24px_rgba(20,121,214,0.18)]",
  secondary:
    "bg-primary text-white hover:bg-primary/90 border border-primary shadow-[0_10px_24px_rgba(8,40,68,0.16)]",
  outline:
    "bg-white text-primary border border-primary/15 hover:border-secondary/60 hover:text-secondary",
  "outline-light":
    "bg-transparent text-white border border-white/24 hover:border-white/70 hover:bg-white/10",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#20bd5a] border border-[#25D366] shadow-[0_10px_24px_rgba(37,211,102,0.18)]",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold leading-none transition-all duration-200 hover:-translate-y-0.5",
    variants[variant],
    className
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
