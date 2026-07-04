/**
 * Gallery photo placeholders (Unsplash). Swap for real restaurant photos
 * or a CMS-driven media endpoint later.
 */
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  tall?: boolean; // spans two rows in the masonry grid
}

export const galleryImages: GalleryImage[] = [
  {
    id: 'g1',
    src: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    alt: 'Juicy burger with melted cheese and fresh toppings',
    tall: true,
  },
  {
    id: 'g2',
    src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80',
    alt: 'Warm restaurant interior with ambient lighting',
  },
  {
    id: 'g3',
    src: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80',
    alt: 'Loaded tacos with fresh garnish',
  },
  {
    id: 'g4',
    src: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    alt: 'Wood-fired pizza with pepperoni and herbs',
    tall: true,
  },
  {
    id: 'g5',
    src: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    alt: 'Sizzling mixed grill platter',
  },
  {
    id: 'g6',
    src: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80',
    alt: 'Crispy golden fries with dipping sauce',
  },
  {
    id: 'g7',
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    alt: 'Cozy dining tables ready for guests',
  },
  {
    id: 'g8',
    src: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=800&q=80',
    alt: 'Fresh seafood platter with lemon',
  },
];
