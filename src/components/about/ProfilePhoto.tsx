import { profile } from "@/content/profile";

/**
 * Profile photo for the about sidebar.
 *
 * On mobile the width is capped at the image's intrinsic 300px and centred. On
 * desktop it fills the rail so its edges line up with the cards beneath it;
 * that upscales it slightly, which is imperceptible on a photograph and worth
 * it to avoid a ragged right edge. `width` and `height` are declared so the
 * browser reserves the space and the section does not shift as it loads.
 */
export function ProfilePhoto() {
  const { photo } = profile;

  return (
    <figure className="relative mx-auto w-full max-w-[300px] lg:mx-0 lg:max-w-none">
      <div
        className="absolute -inset-3 -z-10 rounded-3xl bg-accent/10 blur-2xl"
        aria-hidden
      />
      {/* Static export disables the image optimizer, so a plain img is used. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        loading="lazy"
        decoding="async"
        className="w-full rounded-2xl border border-border object-cover shadow-xl shadow-black/25"
      />
    </figure>
  );
}
