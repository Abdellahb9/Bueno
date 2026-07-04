/**
 * Mock menu data. When a backend exists, replace this module with a fetch
 * from e.g. GET /api/menu and keep the same MenuItem shape so components
 * don't need to change.
 */
export type MenuCategory =
  | 'Salads'
  | 'Seafood'
  | 'Tacos'
  | 'Pizza'
  | 'Grills'
  | 'Sides';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number; // in MAD (Moroccan dirham)
  category: MenuCategory;
  image: string;
  popular?: boolean;
}

export const categories: MenuCategory[] = [
  'Salads',
  'Seafood',
  'Tacos',
  'Pizza',
  'Grills',
  'Sides',
];

export const menuItems: MenuItem[] = [
  // Salads
  {
    id: 'salad-bueno',
    name: 'Bueno Signature Salad',
    description: 'Crisp greens, grilled chicken, avocado, house vinaigrette.',
    price: 45,
    category: 'Salads',
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    popular: true,
  },
  {
    id: 'salad-tuna',
    name: 'Atlantic Tuna Salad',
    description: 'Fresh tuna, olives, eggs, tomatoes and red onion.',
    price: 40,
    category: 'Salads',
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'salad-caesar',
    name: 'Crispy Caesar',
    description: 'Romaine, parmesan, golden croutons, creamy caesar dressing.',
    price: 38,
    category: 'Salads',
    image:
      'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=800&q=80',
  },
  // Seafood
  {
    id: 'seafood-platter',
    name: 'Seafood Platter',
    description: 'Calamari, grilled shrimp, fried fish fillet and fries.',
    price: 95,
    category: 'Seafood',
    image:
      'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=800&q=80',
    popular: true,
  },
  {
    id: 'seafood-shrimp',
    name: 'Grilled Shrimp Skewers',
    description: 'Chermoula-marinated shrimp flame-grilled to order.',
    price: 70,
    category: 'Seafood',
    image:
      'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'seafood-calamari',
    name: 'Crispy Calamari',
    description: 'Golden fried calamari rings with lemon aioli.',
    price: 55,
    category: 'Seafood',
    image:
      'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80',
  },
  // Tacos
  {
    id: 'tacos-chicken',
    name: 'Chicken Tacos',
    description: 'French-style tacos, marinated chicken, cheese sauce, fries.',
    price: 35,
    category: 'Tacos',
    image:
      'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=800&q=80',
    popular: true,
  },
  {
    id: 'tacos-mixte',
    name: 'Tacos Mixte',
    description: 'Chicken and minced beef, double cheese, secret sauce.',
    price: 42,
    category: 'Tacos',
    image:
      'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'tacos-viande',
    name: 'Beef Tacos',
    description: 'Tender beef strips, caramelized onions, algérienne sauce.',
    price: 40,
    category: 'Tacos',
    image:
      'https://images.unsplash.com/photo-1613514785940-daed07799d9b?auto=format&fit=crop&w=800&q=80',
  },
  // Pizza
  {
    id: 'pizza-margherita',
    name: 'Margherita',
    description: 'San Marzano tomato, mozzarella, fresh basil.',
    price: 45,
    category: 'Pizza',
    image:
      'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pizza-bueno',
    name: 'Pizza Bueno',
    description: 'Loaded with pepperoni, peppers, olives and extra cheese.',
    price: 60,
    category: 'Pizza',
    image:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    popular: true,
  },
  {
    id: 'pizza-fruits-mer',
    name: 'Seafood Pizza',
    description: 'Shrimp, calamari and tuna on a garlic-tomato base.',
    price: 65,
    category: 'Pizza',
    image:
      'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=80',
  },
  // Grills
  {
    id: 'grill-mixed',
    name: 'Mixed Grill',
    description: 'Kefta, chicken skewers and merguez with grilled veggies.',
    price: 85,
    category: 'Grills',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    popular: true,
  },
  {
    id: 'grill-brochettes',
    name: 'Chicken Brochettes',
    description: 'Char-grilled marinated chicken skewers with rice.',
    price: 55,
    category: 'Grills',
    image:
      'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'grill-kefta',
    name: 'Kefta Grill',
    description: 'Spiced minced beef kefta with Moroccan salad.',
    price: 50,
    category: 'Grills',
    image:
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
  },
  // Sides
  {
    id: 'sides-fries',
    name: 'Golden Fries',
    description: 'Double-cooked crispy fries with house seasoning.',
    price: 18,
    category: 'Sides',
    image:
      'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80',
    popular: true,
  },
  {
    id: 'sides-cheesy-fries',
    name: 'Cheesy Fries',
    description: 'Golden fries smothered in melted cheddar sauce.',
    price: 25,
    category: 'Sides',
    image:
      'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'sides-onion-rings',
    name: 'Onion Rings',
    description: 'Crunchy beer-battered onion rings, smoky dip.',
    price: 22,
    category: 'Sides',
    image:
      'https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=800&q=80',
  },
];
