"use client";

import { useRef, type ReactNode } from "react";

type Testimonial = { quote: string; name: string; role: string };

// Horizontal slider at every width (3 cards visible on lg+). Arrows: top right on lg+, under the cards below.
export default function Testimonials({ heading, items }: { heading: ReactNode; items: Testimonial[] }) {
  const track = useRef<HTMLDivElement>(null);

  // Slide by one card width (card + gap) in the given direction.
  function slide(dir: 1 | -1) {
    const el = track.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;
    el.scrollBy({ left: dir * (card.offsetWidth + parseFloat(getComputedStyle(el).columnGap)), behavior: "smooth" });
  }

  const arrow =
    "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-ink/20 transition-opacity duration-300 hover:opacity-75";

  const arrows = (
    <>
      <button type="button" aria-label="Previous testimonial" onClick={() => slide(-1)} className={arrow}>
        <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.25">
          <path d="M10 3L5 8l5 5" />
        </svg>
      </button>
      <button type="button" aria-label="Next testimonial" onClick={() => slide(1)} className={arrow}>
        <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.25">
          <path d="M6 3l5 5-5 5" />
        </svg>
      </button>
    </>
  );

  return (
    <div>
      {/* Desktop: arrows top right beside the heading */}
      <div className="flex items-end justify-between gap-6">
        {heading}
        <div className="hidden shrink-0 gap-3 lg:flex">{arrows}</div>
      </div>

      <div
        ref={track}
        className="reveal no-scrollbar -mx-6 mt-8 flex snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto px-6 sm:-mx-8 sm:scroll-px-8 sm:px-8 lg:mx-0 lg:scroll-px-0 lg:gap-5 lg:px-0"
      >
        {items.map((t, i) => (
          <figure
            key={i}
            className="relative flex w-[90%] shrink-0 snap-start flex-col rounded-lg border border-hairline bg-white/40 p-5 sm:w-[60%] sm:p-8 lg:w-[calc((100%-2.5rem)/3)] lg:p-10"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="mb-3 h-7 w-7 text-bronze/40 sm:absolute sm:top-8 sm:right-8 sm:mb-0 sm:h-10 sm:w-10 sm:text-bronze/25"
              fill="currentColor"
            >
              <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
            </svg>
            <blockquote className="flex-1 font-display text-xl leading-snug sm:pr-12 sm:text-2xl">{t.quote}</blockquote>
            <figcaption className="mt-6 flex items-center gap-4 sm:mt-8">
              <span
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-xs tracking-wider text-ivory sm:h-11 sm:w-11"
              >
                {t.name
                  .split(" ")
                  .map((w) => w[0])
                  .join("")
                  .slice(0, 2)}
              </span>
              <div>
                <p className="text-sm font-normal">{t.name}</p>
                <p className="mt-0.5 text-[0.65rem] tracking-[0.18em] text-stone uppercase sm:text-[0.7rem]">{t.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Phones and tablets: arrows under the cards */}
      <div className="mt-6 flex gap-3 lg:hidden">{arrows}</div>
    </div>
  );
}
