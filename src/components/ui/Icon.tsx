import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base: IconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
  focusable: false,
};

const strokeBase = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** GitHub mark. */
export function GithubIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        fill="currentColor"
        d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
      />
    </svg>
  );
}

/** LinkedIn mark. */
export function LinkedinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        fill="currentColor"
        d="M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.2 21.4h3.6V8.6H3.2v12.8Zm6.2-12.8h3.45v1.75h.05c.48-.9 1.66-1.86 3.42-1.86 3.65 0 4.33 2.4 4.33 5.53v7.38h-3.6v-6.54c0-1.56-.03-3.57-2.18-3.57-2.18 0-2.51 1.7-2.51 3.46v6.65H9.4V8.6Z"
      />
    </svg>
  );
}

/** Envelope. */
export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props} {...strokeBase}>
      <rect x="2.75" y="4.75" width="18.5" height="14.5" rx="2.5" />
      <path d="m3.5 7.5 7.34 5.27a2 2 0 0 0 2.32 0L20.5 7.5" />
    </svg>
  );
}

/** Phone handset. */
export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props} {...strokeBase}>
      <path d="M6.5 3h2.2l1.6 4-2 1.4a11 11 0 0 0 5.3 5.3l1.4-2 4 1.6v2.2a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3Z" />
    </svg>
  );
}

/** Document with a folded corner, used for the CV link. */
export function DocumentIcon(props: IconProps) {
  return (
    <svg {...base} {...props} {...strokeBase}>
      <path d="M14 2.75H7A2.25 2.25 0 0 0 4.75 5v14A2.25 2.25 0 0 0 7 21.25h10A2.25 2.25 0 0 0 19.25 19V8L14 2.75Z" />
      <path d="M13.75 3v5.25H19" />
    </svg>
  );
}

/** Arrow leaving a box, marking links that open a new tab. */
export function ExternalLinkIcon(props: IconProps) {
  return (
    <svg {...base} {...props} {...strokeBase}>
      <path d="M14 4.75h5.25V10" />
      <path d="M19 5 12 12" />
      <path d="M18.25 14v5.25H4.75V4.75H10" />
    </svg>
  );
}

/** Map pin. */
export function LocationIcon(props: IconProps) {
  return (
    <svg {...base} {...props} {...strokeBase}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

/** Sun, shown when the light theme is active. */
export function SunIcon(props: IconProps) {
  return (
    <svg {...base} {...props} {...strokeBase}>
      <circle cx="12" cy="12" r="4.25" />
      <path d="M12 2.75v2M12 19.25v2M2.75 12h2M19.25 12h2M5.5 5.5l1.4 1.4M17.1 17.1l1.4 1.4M18.5 5.5l-1.4 1.4M6.9 17.1 5.5 18.5" />
    </svg>
  );
}

/** Crescent moon, shown when the dark theme is active. */
export function MoonIcon(props: IconProps) {
  return (
    <svg {...base} {...props} {...strokeBase}>
      <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />
    </svg>
  );
}

/** Chevron pointing down, used by the hero scroll cue. */
export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...base} {...props} {...strokeBase}>
      <path d="m6 10 6 6 6-6" />
    </svg>
  );
}

/** Close cross, used by the project dialog. */
export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} {...props} {...strokeBase}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

/** Hamburger, used by the mobile nav trigger. */
export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} {...props} {...strokeBase}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

/** Icons addressable by the `SocialLink.icon` keys in the content layer. */
export const socialIcons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: MailIcon,
  document: DocumentIcon,
  phone: PhoneIcon,
} as const;
