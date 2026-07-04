import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { restaurant } from '../data/restaurant';

export default function Location() {
  return (
    <section id="contact" className="relative bg-charcoal-950 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Find Us"
          title="Come say hello"
          description="Right on Rue Mecca — easy to find, hard to leave."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Map placeholder — swap for a Google Maps embed / Leaflet map later:
              <iframe src="https://www.google.com/maps/embed?..." /> */}
          <motion.div
            className="relative min-h-[320px] overflow-hidden rounded-3xl bg-charcoal-800 ring-1 ring-white/5"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div
              className="absolute inset-0 opacity-30"
              aria-hidden="true"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(249,115,22,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.25) 1px, transparent 1px)',
                backgroundSize: '48px 48px',
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-500 shadow-glow">
                <svg viewBox="0 0 24 24" className="h-7 w-7 text-charcoal-950" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 21s-7-5.5-7-11a7 7 0 0114 0c0 5.5-7 11-7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </span>
              <p className="font-display text-2xl tracking-wide text-cream">
                Map coming soon
              </p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-brand-400 underline-offset-4 hover:underline"
              >
                Open in Google Maps →
              </a>
            </div>
          </motion.div>

          {/* Contact details */}
          <motion.div
            className="flex flex-col justify-center gap-8 rounded-3xl bg-charcoal-800/60 p-8 ring-1 ring-white/5 sm:p-10"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">
                Address
              </h3>
              <p className="mt-2 text-lg text-cream">{restaurant.address}</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">
                Phone
              </h3>
              <a
                href={restaurant.phoneHref}
                className="mt-2 inline-block text-lg font-semibold text-cream underline-offset-4 transition-colors hover:text-brand-400 hover:underline"
              >
                {restaurant.phone}
              </a>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">
                Opening Hours
              </h3>
              <dl className="mt-2 space-y-2">
                {restaurant.hours.map((slot) => (
                  <div key={slot.days} className="flex justify-between gap-4 text-cream">
                    <dt className="text-stone-400">{slot.days}</dt>
                    <dd className="font-semibold tabular-nums">{slot.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <a
              href={restaurant.phoneHref}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-brand-500 px-8 py-4 text-base font-bold text-charcoal-950 shadow-glow transition-transform hover:scale-105 active:scale-95"
            >
              Call to Order
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
