import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';

// Lazy-load the 3D scene so Three.js lands in its own chunk and doesn't
// block first paint of the page copy.
const Burger3D = lazy(() => import('../components/Burger3D'));
import StarRating from '../components/StarRating';
import { restaurant } from '../data/restaurant';

export default function Hero() {
  return (
    <section
      id="home"
      className="grain relative flex min-h-dvh items-center overflow-hidden bg-charcoal-900"
    >
      {/* Warm radial glow behind the 3D model */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 70% 45%, rgba(249,115,22,0.18), transparent 70%), radial-gradient(ellipse 40% 40% at 20% 80%, rgba(239,68,68,0.10), transparent 70%)',
        }}
      />

      {/* Oversized outline word for depth */}
      <span
        className="text-outline pointer-events-none absolute -bottom-6 left-0 select-none font-display text-[22vw] leading-none opacity-40 lg:text-[16vw]"
        aria-hidden="true"
      >
        BUENO
      </span>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-8 px-4 pb-16 pt-28 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pt-16">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-charcoal-800/80 px-4 py-2 ring-1 ring-white/10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <StarRating rating={restaurant.rating} />
            <span className="text-sm font-semibold text-cream">
              {restaurant.rating}
            </span>
            <span className="text-sm text-stone-400">
              ({restaurant.reviewCount} reviews)
            </span>
          </motion.div>

          <h1 className="font-display text-6xl leading-[0.95] tracking-wide text-cream sm:text-7xl lg:text-8xl">
            Crave it.
            <br />
            <span className="text-brand-500">Grill it.</span>
            <br />
            Love it.
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-stone-400">
            {restaurant.tagline} From sizzling tacos to seafood platters —
            fresh, fast and full of flavor in the heart of Laâyoune.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#menu"
              className="rounded-full bg-brand-500 px-8 py-4 text-base font-bold text-charcoal-950 shadow-glow transition-transform hover:scale-105 active:scale-95"
            >
              Order Now
            </a>
            <a
              href="#menu"
              className="rounded-full px-8 py-4 text-base font-bold text-cream ring-1 ring-white/20 transition-colors hover:bg-white/5 hover:ring-brand-500"
            >
              View Menu
            </a>
          </div>

          <p className="mt-8 text-sm text-stone-500">
            {restaurant.services.join('  ·  ')}
          </p>
        </motion.div>

        {/* 3D model */}
        <motion.div
          className="h-[340px] sm:h-[420px] lg:h-[560px]"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <Suspense fallback={null}>
            <Burger3D />
          </Suspense>
        </motion.div>
      </div>
    </section>
  );
}
