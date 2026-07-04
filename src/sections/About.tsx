import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { restaurant } from '../data/restaurant';

const services = [
  {
    name: 'Dine-in',
    description: 'Cozy seating and a warm welcome — enjoy your meal fresh off the grill.',
    icon: (
      <path d="M3 11l9-8 9 8M5 9.5V20a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1V9.5" />
    ),
  },
  {
    name: 'Takeaway',
    description: 'Order ahead, grab your bag and go. Ready in minutes, packed with care.',
    icon: (
      <path d="M6 7h12l1 13a1 1 0 01-1 1H6a1 1 0 01-1-1L6 7zm3 0V5a3 3 0 016 0v2" />
    ),
  },
  {
    name: 'Delivery',
    description: 'Hot and fast to your door, anywhere in Laâyoune. Call us to order.',
    icon: (
      <path d="M3 16V6a1 1 0 011-1h9v11M13 8h4l3 4v4h-2m-14 0h2m4 0h4m-10 0a2 2 0 104 0m6 0a2 2 0 104 0" />
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-charcoal-950 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Story"
          title="Made in Laâyoune, loved by Laâyoune"
          description={`Since opening on Rue Mecca, ${restaurant.name} has had one simple mission: serve honest, generous fast food that tastes like it took all day. Everything is prepped fresh each morning — from hand-pressed tacos to flame-kissed grills.`}
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              className="rounded-2xl bg-charcoal-800/60 p-8 ring-1 ring-white/5 transition-colors hover:ring-brand-500/40"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.1, ease: 'easeOut' }}
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {service.icon}
                </svg>
              </div>
              <h3 className="font-display text-2xl tracking-wide text-cream">
                {service.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
