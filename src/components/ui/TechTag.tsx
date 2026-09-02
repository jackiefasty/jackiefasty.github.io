import { cn } from "@/lib/cn";

interface TechTagProps {
  label: string;
  className?: string;
}

/** Monospaced chip naming a single technology. */
export function TechTag({ label, className }: TechTagProps) {
  return (
    <span
      className={cn(
        "rounded-md border border-border/70 bg-surface-raised/80 px-2 py-1 font-mono text-[0.7rem] leading-none text-muted",
        className,
      )}
    >
      {label}
    </span>
  );
}

interface TechTagListProps {
  items: string[];
  /** Truncate to this many tags and append a `+N` chip. */
  limit?: number;
  className?: string;
}

/** Wrapping row of `TechTag`s, optionally truncated with an overflow count. */
export function TechTagList({ items, limit, className }: TechTagListProps) {
  const visible = limit ? items.slice(0, limit) : items;
  const hidden = items.length - visible.length;

  return (
    <ul className={cn("flex flex-wrap gap-1.5", className)}>
      {visible.map((item) => (
        <li key={item}>
          <TechTag label={item} />
        </li>
      ))}
      {hidden > 0 && (
        <li>
          <TechTag label={`+${hidden}`} className="text-subtle" />
        </li>
      )}
    </ul>
  );
}
