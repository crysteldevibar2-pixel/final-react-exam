// data/products.js

export const initialProducts = [
  {
    id: 1101, // Unique ID
    image: 'https://images.unsplash.com/photo-1546435017-d2050f29ff10?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'NovaPulse X Pro Headphones', // Changed
    category: 'Electronics', // Changed
    description: 'Over-ear headphones with superior noise cancellation, memory foam earcups, and up to 30 hours of playback.', // Changed
    specification: 'Active Noise Cancelling (ANC), Bluetooth 5.4, USB-C fast charging.',
    rating: 4.8,
    price: 199.99, // Changed
    quantity: 12,
  },
  {
    id: 1102,
    image: 'https://images.unsplash.com/photo-1620799140408-edc68ac23554?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Atlas Slim Fit Blazer', // Changed
    category: 'Apparel', // Changed
    description: 'A sophisticated slim-fit blazer made from a breathable, wrinkle-resistant wool blend. Ideal for professional wear.', // Changed
    specification: 'Wool/Polyester blend, two-button closure, inner pocket.',
    rating: 4.5,
    price: 149.00, // Changed
    quantity: 8,
  },
  {
    id: 1103,
    image: 'https://images.unsplash.com/photo-1616629918730-4e366113b28f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Artisan Bamboo Cutting Board', // Changed
    category: 'Home & Kitchen', // Changed
    description: 'Extra-large, reversible bamboo cutting board with a deep juice groove. Naturally antibacterial.', // Changed
    specification: '18x12 inches, Organic Bamboo, reversible design.',
    rating: 4.9,
    price: 34.50, // Changed
    quantity: 30,
  },
  {
    id: 1104,
    image: 'https://images.unsplash.com/photo-1596796412190-3b47b4194098?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Venture Waterproof Backpack', // Changed
    category: 'Bags & Luggage', // Changed
    description: 'Roll-top waterproof backpack with a padded laptop sleeve and ergonomic straps, perfect for commuting or travel.', // Changed
    specification: 'Heavy-duty PVC, 30L capacity, side water bottle pockets.',
    rating: 4.6,
    price: 85.00, // Changed
    quantity: 10,
  },
  {
    id: 1105,
    image: 'https://images.unsplash.com/photo-1542496658-e390232463e2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Chronos Smart Watch 2.0', // Changed
    category: 'Electronics', // Changed
    description: 'Tracks fitness, heart rate, sleep, and features integrated GPS. Long-lasting battery.', // Changed
    specification: 'OLED display, Heart Rate Monitor, GPS, Water-resistant (5ATM).',
    rating: 4.7,
    price: 189.99, // Changed
    quantity: 16,
  },
  {
    id: 1106,
    image: 'https://images.unsplash.com/photo-1555529712-409100852e69?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Silken Cloud Throw Blanket', // Changed
    category: 'Home & Kitchen', // Changed
    description: 'Luxuriously soft microfiber throw blanket, lightweight yet exceptionally warm and cozy.', // Changed
    specification: '100% Microfiber, 60x70 inches, Machine washable.',
    rating: 4.3,
    price: 39.99, // Changed
    quantity: 22,
  },
  {
    id: 1107,
    image: 'https://images.unsplash.com/photo-1511556820808-01584283842c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Radiant Glow LED Mirror', // Changed
    category: 'Beauty & Health',
    description: 'Adjustable LED lighting and 5x magnification, perfect for detailed makeup application or grooming.', // Changed
    specification: 'Built-in LED strip, 5x magnification, rechargeable battery.',
    rating: 4.4,
    price: 59.99, // Changed
    quantity: 14,
  },
  // --- New Products Added Below ---
  {
    id: 1108,
    image: 'https://images.unsplash.com/photo-1574637775532-6a7e0406830d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Starlight Telescope Set',
    category: 'Toys & Hobbies',
    description: 'Beginner-friendly astronomical telescope with interchangeable eyepieces and a stable tripod for clear celestial viewing.',
    specification: '70mm aperture, 400mm focal length, includes 2 eyepieces (K20mm, K9mm).',
    rating: 4.1,
    price: 95.99,
    quantity: 6,
  },
  {
    id: 1109,
    image: 'https://images.unsplash.com/photo-1556911220-d3910c2834c7?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Gourmet Stainless Steel Pan',
    category: 'Home & Kitchen',
    description: 'Professional-grade 10-inch stainless steel frying pan with a triple-ply construction for even heat distribution.',
    specification: '18/10 Stainless Steel, 10-inch diameter, Oven safe up to 500°F.',
    rating: 5.0,
    price: 79.99,
    quantity: 17,
  },
  {
    id: 1110,
    image: 'https://images.unsplash.com/photo-1582298627702-0e9e98490a6e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Rechargeable LED Headlamp',
    category: 'Outdoor & Sports',
    description: 'High-lumen, lightweight headlamp with multiple brightness modes and a comfortable, adjustable strap.',
    specification: '1200 Lumens, USB rechargeable, IPX5 waterproof rating, 4 lighting modes.',
    rating: 4.7,
    price: 24.99,
    quantity: 40,
  },
  {
    id: 1111,
    image: 'https://images.unsplash.com/photo-1627889151280-ba6c38234691?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Geometric Wall Art Print',
    category: 'Home Decor',
    description: 'Abstract geometric canvas print featuring bold colors, pre-mounted on a wooden frame, ready to hang.',
    specification: 'Canvas print, 24x36 inches, wooden stretcher bars.',
    rating: 4.5,
    price: 55.00,
    quantity: 9,
  },
];

export default initialProducts;