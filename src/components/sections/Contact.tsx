import { AvailabilityBadge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import {
  DocumentIcon,
  GithubIcon,
  LinkedinIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
} from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/content/profile";

/** Contact detail rows, each a real link where the medium allows one. */
const details = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: MailIcon,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    Icon: PhoneIcon,
  },
  {
    label: "LinkedIn",
    value: "in/borjajavierre",
    href: profile.linkedin,
    Icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    value: "jackiefasty",
    href: profile.github,
    Icon: GithubIcon,
  },
];

/**
 * Contact section.
 *
 * Deliberately has no contact form: a static GitHub Pages site cannot process
 * one without a third-party endpoint, and a form that silently fails is worse
 * than a mailto link that always works.
 */
export function Contact() {
  return (
    <section id="contact" className="section-y">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk"
          description="I'm open to senior and staff engineering roles in real-time media, video infrastructure and backend systems — in Barcelona, remote, or hybrid across the EU."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <div className="surface-card h-full p-7">
              <AvailabilityBadge>{profile.availability}</AvailabilityBadge>

              <p className="mt-5 text-sm leading-relaxed text-muted">
                The fastest way to reach me is email — I reply to everything
                that isn&apos;t automated. If you would rather read first, the
                résumé below has the full detail behind every figure on this
                page.
              </p>

              <p className="mt-5 inline-flex items-center gap-2 text-sm text-subtle">
                <LocationIcon width={16} height={16} />
                {profile.location}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <ButtonLink href={`mailto:${profile.email}`}>
                  <MailIcon width={17} height={17} />
                  Send an email
                </ButtonLink>
                <ButtonLink href={profile.resume} variant="secondary">
                  <DocumentIcon width={17} height={17} />
                  Résumé
                </ButtonLink>
              </div>
            </div>
          </Reveal>

          <Reveal index={1}>
            <ul className="surface-card h-full divide-y divide-border p-2">
              {details.map(({ label, value, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noreferrer noopener"
                        : undefined
                    }
                    className="group flex items-center gap-4 rounded-xl px-5 py-4 transition-colors hover:bg-surface-raised"
                  >
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface-raised text-muted transition-colors group-hover:border-accent/50 group-hover:text-accent">
                      <Icon width={17} height={17} />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-mono text-xs tracking-wider text-subtle uppercase">
                        {label}
                      </span>
                      <span className="mt-0.5 block truncate text-sm font-medium text-fg transition-colors group-hover:text-accent">
                        {value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
