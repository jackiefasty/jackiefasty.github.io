import { AvailabilityBadge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import {
  ChevronDownIcon,
  DocumentIcon,
  LocationIcon,
  MailIcon,
  socialIcons,
} from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { profile, socialLinks } from "@/content/profile";

/**
 * Opening screen: positioning, availability, contact routes and profile links.
 *
 * Uses `mode="load"` reveals with ascending indices so the name lands first and
 * the calls to action arrive last; a scroll-driven reveal would be pointless
 * here because the section is already in view on load.
 */
export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[92svh] items-center overflow-hidden pt-24 pb-16"
    >
      <div className="backdrop-grid absolute inset-0 -z-10" aria-hidden />
      <div
        className="absolute -top-40 left-1/2 -z-10 size-[36rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
        aria-hidden
      />

      <div className="container-page">
        <Reveal mode="load">
          <AvailabilityBadge>{profile.availability}</AvailabilityBadge>
        </Reveal>

        <Reveal mode="slide" index={1}>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-gradient">{profile.name}</span>
          </h1>
        </Reveal>

        <Reveal mode="slide" index={2}>
          <p className="mt-4 max-w-3xl text-lg font-semibold text-fg sm:text-2xl">
            {profile.role}
          </p>
        </Reveal>

        <Reveal mode="load" index={3}>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.tagline}
          </p>
        </Reveal>

        <Reveal mode="load" index={4}>
          <p className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-subtle">
            <span className="inline-flex items-center gap-2">
              <LocationIcon width={16} height={16} />
              {profile.location}
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-subtle" aria-hidden />
              EU citizen — no visa sponsorship required
            </span>
          </p>
        </Reveal>

        <Reveal mode="load" index={5}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <ButtonLink href={`mailto:${profile.email}`}>
              <MailIcon width={17} height={17} />
              Get in touch
            </ButtonLink>
            <ButtonLink href={profile.resume} variant="secondary">
              <DocumentIcon width={17} height={17} />
              Download résumé
            </ButtonLink>

            <ul className="ml-1 flex items-center gap-2">
              {socialLinks
                .filter((link) => link.icon !== "mail")
                .map((link) => {
                  const Icon = socialIcons[link.icon];

                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={link.label}
                        className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-surface/70 text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
                      >
                        <Icon width={18} height={18} />
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </Reveal>

        <Reveal mode="load" index={7}>
          <a
            href="#about"
            className="mt-16 inline-flex items-center gap-2 font-mono text-xs tracking-widest text-subtle uppercase transition-colors hover:text-accent"
          >
            Scroll
            <ChevronDownIcon width={16} height={16} className="animate-bounce" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
