import { motion } from 'framer-motion';
import type { MenuItem } from '../data/menu';

interface MenuCardProps {
  item: MenuItem;
  index: number;
}

export default function MenuCard({ item, index }: MenuCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, delay: index * 0.05, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl bg-charcoal-800 shadow-card ring-1 ring-white/5 transition-shadow hover:shadow-glow"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          width={800}
          height={600}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 to-transparent" />
        {item.popular && (
          <span className="absolute left-3 top-3 rounded-full bg-flame-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
            Popular
          </span>
        )}
      </div>
      <div className="flex items-start justify-between gap-3 p-5">
        <div>
          <h3 className="font-display text-2xl tracking-wide text-cream">
            {item.name}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-stone-400">
            {item.description}
          </p>
        </div>
        <p className="shrink-0 rounded-full bg-brand-500/10 px-3 py-1.5 font-display text-xl tabular-nums text-brand-400">
          {item.price}
          <span className="ml-1 text-xs font-sans text-brand-500">MAD</span>
        </p>
      </div>
    </motion.article>
  );
}
