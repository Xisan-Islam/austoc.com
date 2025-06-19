import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299.99,
    originalPrice: 399.99,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3394649/pexels-photo-3394649.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'Electronics',
    description: 'High-quality wireless headphones with noise cancellation and premium sound quality. Perfect for music lovers and professionals.',
    rating: 4.8,
    reviews: 324,
    inStock: true,
    featured: true,
    tags: ['wireless', 'premium', 'audio', 'noise-cancelling']
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 249.99,
    image: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'Electronics',
    description: 'Advanced fitness tracking with heart rate monitoring, GPS, and smartphone integration.',
    rating: 4.6,
    reviews: 156,
    inStock: true,
    featured: true,
    tags: ['fitness', 'smart', 'health', 'tracking']
  },
  {
    id: '3',
    name: 'Luxury Leather Bag',
    price: 189.99,
    originalPrice: 249.99,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1038000/pexels-photo-1038000.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'Fashion',
    description: 'Handcrafted genuine leather bag with spacious compartments and elegant design.',
    rating: 4.9,
    reviews: 89,
    inStock: true,
    featured: true,
    tags: ['leather', 'luxury', 'handcrafted', 'fashion']
  },
  {
    id: '4',
    name: 'Professional Camera',
    price: 1299.99,
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'Electronics',
    description: 'High-end digital camera with 4K video recording and professional-grade image quality.',
    rating: 4.7,
    reviews: 67,
    inStock: true,
    tags: ['camera', 'professional', '4K', 'photography']
  },
  {
    id: '5',
    name: 'Designer Sunglasses',
    price: 159.99,
    originalPrice: 199.99,
    image: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'Fashion',
    description: 'Stylish designer sunglasses with UV protection and premium frame construction.',
    rating: 4.4,
    reviews: 203,
    inStock: true,
    tags: ['sunglasses', 'designer', 'UV protection', 'style']
  },
  {
    id: '6',
    name: 'Gaming Laptop',
    price: 1899.99,
    image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'Electronics',
    description: 'High-performance gaming laptop with advanced graphics and lightning-fast processing.',
    rating: 4.5,
    reviews: 412,
    inStock: true,
    featured: true,
    tags: ['gaming', 'laptop', 'high-performance', 'graphics']
  },
  {
    id: '7',
    name: 'Artisan Coffee Beans',
    price: 24.99,
    image: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'Food & Beverage',
    description: 'Premium single-origin coffee beans roasted to perfection for the ultimate coffee experience.',
    rating: 4.9,
    reviews: 128,
    inStock: true,
    tags: ['coffee', 'artisan', 'single-origin', 'premium']
  },
  {
    id: '8',
    name: 'Minimalist Desk Lamp',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1164777/pexels-photo-1164777.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'Home & Living',
    description: 'Modern minimalist desk lamp with adjustable brightness and sleek design.',
    rating: 4.3,
    reviews: 94,
    inStock: true,
    tags: ['lamp', 'minimalist', 'adjustable', 'modern']
  }
];

export const categories = [
  'All',
  'Electronics',
  'Fashion',
  'Home & Living',
  'Food & Beverage'
];