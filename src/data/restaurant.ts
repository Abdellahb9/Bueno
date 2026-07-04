/**
 * Static restaurant info. In a future backend integration this could be
 * fetched from a CMS or admin API (e.g. GET /api/restaurant).
 */
export const restaurant = {
  name: 'Bueno',
  tagline: 'Fast food, done deliciously.',
  rating: 4.1,
  reviewCount: 65,
  address: '154 Rue Mecca, Laâyoune 70000, Morocco',
  phone: '+212 5 28 98 11 00',
  phoneHref: 'tel:+212528981100',
  services: ['Dine-in', 'Takeaway', 'Delivery'] as const,
  hours: [
    { days: 'Monday – Thursday', time: '11:00 – 23:00' },
    { days: 'Friday', time: '14:00 – 23:30' },
    { days: 'Saturday – Sunday', time: '11:00 – 00:00' },
  ],
  socials: [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'Facebook', href: 'https://facebook.com' },
    { label: 'TikTok', href: 'https://tiktok.com' },
  ],
};
