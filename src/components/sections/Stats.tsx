import { Reveal } from "@/components/ui/Reveal";
import { StatCounter } from "@/components/ui/StatCounter";
import { stats } from "@/content/profile";

/**
 * Headline metrics strip sitting between the hero and the about section.
 *
 * Each card names the source of its figure, so the numbers read as claims a
 * reader can check against the CV rather than decoration.
 */
export function Stats() {
  return (
    <section aria-label="Key metrics" className="container-page pb-8">
      <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Reveal as="li" key={stat.label} index={index} className="h-full">
            <StatCounter stat={stat} />
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
