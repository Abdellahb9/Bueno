import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import StarRating from '../components/StarRating';
import { reviews } from '../data/reviews';
import { restaurant } from '../data/restaurant';

const AUTOPLAY_MS = 6000;

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number, dir: number) => {
    setDirection(dir);
    setIndex((next + reviews.length) % reviews.length);
  }, []);

  // Auto-advance, paused on hover/focus so users can read at their pace
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => go(index + 1, 1), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [index, paused, go]);

  const review = reviews[index];

  return (
    <section id="reviews" className="grain relative bg-charcoal-900 py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Reviews"
          title="What our guests say"
          description={`Rated ${restaurant.rating}/5 across ${restaurant.reviewCount} reviews.`}
        />

        <div
          className="relative mt-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="relative min-h-[260px] overflow-hidden rounded-3xl bg-charcoal-800/70 p-8 ring-1 ring-white/5 sm:min-h-[220px] sm:p-12">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.blockquote
                key={review.id}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                aria-live="polite"
              >
                <StarRating rating={review.rating} />
                <p className="mt-4 text-lg leading-relaxed text-cream sm:text-xl">
                  “{review.text}”
                </p>
                <footer className="mt-6 flex items-center gap-3">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-500/15 font-display text-xl text-brand-400"
                    aria-hidden="true"
                  >
                    {review.author.charAt(0)}
                  </span>
                  <div>
                    <cite className="not-italic font-semibold text-cream">
                      {review.author}
                    </cite>
                    <p className="text-sm text-stone-500">{review.date}</p>
                  </div>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => go(index - 1, -1)}
              aria-label="Previous review"
              className="flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-white/15 transition-colors hover:bg-brand-500 hover:text-charcoal-950 hover:ring-brand-500"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M15 6l-6 6 6 6" />
              </svg>
            </button>

            <div className="flex gap-2" role="tablist" aria-label="Choose review">
              {reviews.map((r, i) => (
                <button
                  key={r.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Review ${i + 1} of ${reviews.length}`}
                  onClick={() => go(i, i > index ? 1 : -1)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index ? 'w-8 bg-brand-500' : 'w-2.5 bg-stone-600 hover:bg-stone-400'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => go(index + 1, 1)}
              aria-label="Next review"
              className="flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-white/15 transition-colors hover:bg-brand-500 hover:text-charcoal-950 hover:ring-brand-500"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
