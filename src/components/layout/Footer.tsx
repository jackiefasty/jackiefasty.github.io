import { socialIcons } from "@/components/ui/Icon";
import { profile, socialLinks } from "@/content/profile";

/** Site footer: attribution-free, with the profile links and current year. */
export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="container-page flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold text-fg">{profile.name}</p>
          <p className="mt-1 text-xs text-subtle">
            {profile.role} · {profile.location}
          </p>
        </div>

        <ul className="flex items-center gap-2">
          {socialLinks.map((link) => {
            const Icon = socialIcons[link.icon];

            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noreferrer noopener"
                      : undefined
                  }
                  className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted transition-colors duration-200 hover:border-accent/50 hover:text-accent"
                  aria-label={link.label}
                >
                  <Icon width={17} height={17} />
                </a>
              </li>
            );
          })}
        </ul>

        <p className="font-mono text-xs text-subtle">
          © {new Date().getFullYear()} · Built with Next.js
        </p>
      </div>
    </footer>
  );
}
