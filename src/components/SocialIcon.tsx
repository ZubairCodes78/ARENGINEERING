interface SocialIconProps {
  platform: string;
  className?: string;
}

export default function SocialIcon({ platform, className }: SocialIconProps) {
  if (platform === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
        <rect x="3" y="3" width="18" height="18" rx="5.2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3.8" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
      </svg>
    );
  }

  if (platform === "Facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
        <path d="M14.2 8.2V6.9c0-.66.45-.82.77-.82h1.96V2.84L14.23 2.83c-3 0-3.68 2.25-3.68 3.69v1.68H8.8v3.66h1.75V22h3.65V11.86h2.45l.32-3.66H14.2Z" />
      </svg>
    );
  }

  if (platform === "YouTube") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
        <path d="M21.58 7.18a2.74 2.74 0 0 0-1.93-1.94C17.95 4.78 12 4.78 12 4.78s-5.95 0-7.65.46a2.74 2.74 0 0 0-1.93 1.94A28.58 28.58 0 0 0 1.96 12c0 1.7.15 3.39.46 4.82a2.74 2.74 0 0 0 1.93 1.94c1.7.46 7.65.46 7.65.46s5.95 0 7.65-.46a2.74 2.74 0 0 0 1.93-1.94c.31-1.43.46-3.12.46-4.82s-.15-3.39-.46-4.82ZM10 15.26V8.74L15.54 12 10 15.26Z" />
      </svg>
    );
  }

  if (platform === "LinkedIn") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
        <path d="M5.36 8.89H2.24V22h3.12V8.89ZM3.8 2a1.81 1.81 0 1 0 0 3.62A1.81 1.81 0 0 0 3.8 2Zm17.96 12.05c0-3.52-1.88-5.16-4.39-5.16a3.78 3.78 0 0 0-3.41 1.88h-.05V8.89h-2.99V22h3.12v-6.49c0-1.71.33-3.37 2.45-3.37 2.08 0 2.11 1.95 2.11 3.48V22h3.16v-7.95Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M18.244 2H21.5l-7.11 8.123L22.75 22h-6.545l-5.127-6.7L5.21 22H1.95l7.604-8.69L1.54 2h6.71l4.633 6.124L18.244 2Zm-1.143 17.91h1.804L7.268 3.98H5.333L17.101 19.91Z" />
    </svg>
  );
}
