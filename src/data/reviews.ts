/**
 * Mock customer reviews. Replace with e.g. GET /api/reviews (or a Google
 * Places API integration) when a backend is available.
 */
export interface Review {
  id: string;
  author: string;
  rating: number; // 1–5
  text: string;
  date: string;
}

export const reviews: Review[] = [
  {
    id: 'r1',
    author: 'Yassine B.',
    rating: 5,
    text: 'Best tacos in Laâyoune, hands down. Generous portions and the cheese sauce is incredible. Delivery was fast too.',
    date: 'March 2026',
  },
  {
    id: 'r2',
    author: 'Fatima Z.',
    rating: 4,
    text: 'The seafood platter is fresh and well seasoned. Nice cozy place for a family dinner. Will definitely come back.',
    date: 'February 2026',
  },
  {
    id: 'r3',
    author: 'Ahmed K.',
    rating: 4,
    text: 'Great mixed grill and very friendly staff. The fries alone are worth the trip. Prices are fair for the quality.',
    date: 'January 2026',
  },
  {
    id: 'r4',
    author: 'Sara M.',
    rating: 5,
    text: 'Ordered pizza for the whole office — everyone loved it. Crispy crust, generous toppings, arrived hot.',
    date: 'December 2025',
  },
  {
    id: 'r5',
    author: 'Omar L.',
    rating: 4,
    text: 'Solid fast food spot. The Bueno salad is surprisingly good and the service is quick even at rush hour.',
    date: 'November 2025',
  },
];
