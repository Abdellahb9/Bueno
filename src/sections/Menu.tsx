import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import MenuCard from '../components/MenuCard';
import { categories, menuItems, type MenuCategory } from '../data/menu';

export default function Menu() {
  const [active, setActive] = useState<MenuCategory>('Tacos');
  const items = menuItems.filter((item) => item.category === active);

  return (
    <section id="menu" className="grain relative bg-charcoal-900 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Menu"
          title="Pick your craving"
          description="Everything made to order. Prices in Moroccan dirham (MAD)."
        />

        {/* Category tabs */}
        <div
          className="mt-10 flex flex-wrap justify-center gap-3"
          role="tablist"
          aria-label="Menu categories"
        >
          {categories.map((category) => {
            const selected = category === active;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls="menu-panel"
                onClick={() => setActive(category)}
                className={`relative min-h-11 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                  selected
                    ? 'text-charcoal-950'
                    : 'text-stone-300 ring-1 ring-white/10 hover:text-brand-400 hover:ring-brand-500/50'
                }`}
              >
                {selected && (
                  <motion.span
                    layoutId="active-tab"
                    className="absolute inset-0 rounded-full bg-brand-500 shadow-glow"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            );
          })}
        </div>

        {/* Cards */}
        <div
          id="menu-panel"
          role="tabpanel"
          aria-label={`${active} menu items`}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {items.map((item, i) => (
              <MenuCard key={item.id} item={item} index={i} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
