import { restaurant } from '../data/restaurant';

const quickLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

const socialIcons: Record<string, JSX.Element> = {
  Instagram: (
    <path d="M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zm5 5.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM17.5 6a1 1 0 100 2 1 1 0 000-2z" />
  ),
  Facebook: (
    <path d="M14 9h3l-.5 3H14v9h-3v-9H8V9h3V7.5A4.5 4.5 0 0115.5 3H18v3h-2.5A1.5 1.5 0 0014 7.5V9z" />
  ),
  TikTok: (
    <path d="M15 3h3a5 5 0 005 5v3a8 8 0 01-5-1.7V15a6 6 0 11-6-6v3a3 3 0 103 3V3z" />
  ),
};

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-charcoal-950 py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <a href="#home" className="font-display text-4xl tracking-wider text-cream">
            BUE<span className="text-brand-500">NO</span>
          </a>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-stone-400">
            {restaurant.tagline} Dine-in, takeaway and delivery in Laâyoune.
          </p>
          <div className="mt-5 flex gap-3">
            {restaurant.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Bueno on ${social.label}`}
                className="flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-white/10 transition-colors hover:bg-brand-500 hover:text-charcoal-950 hover:ring-brand-500"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  {socialIcons[social.label]}
                </svg>
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer quick links">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-stone-400 transition-colors hover:text-brand-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">
            Contact
          </h3>
          <address className="mt-4 space-y-2.5 text-sm not-italic text-stone-400">
            <p>{restaurant.address}</p>
            <p>
              <a
                href={restaurant.phoneHref}
                className="transition-colors hover:text-brand-400"
              >
                {restaurant.phone}
              </a>
            </p>
          </address>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">
            Services
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-stone-400">
            {restaurant.services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/5 px-4 pt-6 sm:px-6 lg:px-8">
        <p className="text-center text-xs text-stone-500">
          © {new Date().getFullYear()} {restaurant.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
