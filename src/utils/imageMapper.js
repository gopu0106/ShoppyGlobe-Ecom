export const enhancedImages = {
  1: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=600&auto=format&fit=crop", // Beauty - Essence Mascara
  2: "https://images.unsplash.com/photo-1596462502278-27bfdd403348?q=80&w=600&auto=format&fit=crop", // Beauty - Eyeshadow
  3: "https://images.unsplash.com/photo-1632765854612-9b02b6ec2b3c?q=80&w=600&auto=format&fit=crop", // Beauty - Foundation
  4: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=600&auto=format&fit=crop", // Beauty - Lipstick
  5: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=600&auto=format&fit=crop", // Fragrance - Perfume
  6: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=600&auto=format&fit=crop", // Fragrance - Luxury Scent
  7: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=600&auto=format&fit=crop", // Fragrance - Chanel
  8: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=600&auto=format&fit=crop", // Fragrance - Dior
  9: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600&auto=format&fit=crop", // Furniture - Bed
  10: "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=600&auto=format&fit=crop", // Furniture - Sofa
  11: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=600&auto=format&fit=crop", // Furniture - Chair
  12: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop", // Furniture - Modern Chair
  13: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=600&auto=format&fit=crop", // Furniture - Table
  14: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=600&auto=format&fit=crop", // Furniture - Sofa Set
  15: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=600&auto=format&fit=crop", // Furniture - Wooden Table
  16: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=600&auto=format&fit=crop", // Furniture - Lamp
  17: "https://images.unsplash.com/photo-1595200427190-7d9fc8988631?q=80&w=600&auto=format&fit=crop", // Furniture - Shelf
  18: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=600&auto=format&fit=crop", // Home Decoration - Decoration
  19: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=600&auto=format&fit=crop", // Home Decoration - Wall Art
  20: "https://images.unsplash.com/photo-1534349762913-96c22559734f?q=80&w=600&auto=format&fit=crop", // Home Decoration - Plant
  21: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&auto=format&fit=crop", // Groceries - Apple
  22: "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?q=80&w=600&auto=format&fit=crop", // Groceries - Pasta
  23: "https://images.unsplash.com/photo-1623356301535-95f129987828?q=80&w=600&auto=format&fit=crop", // Groceries - Rice
  24: "https://images.unsplash.com/photo-1596483726510-724f3c7a72d7?q=80&w=600&auto=format&fit=crop", // Groceries - Oil
  25: "https://images.unsplash.com/photo-1616486029423-aaa478965c97?q=80&w=600&auto=format&fit=crop", // Groceries - Spices
  26: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=600&auto=format&fit=crop", // Groceries - Ice Cream
  27: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=600&auto=format&fit=crop", // Groceries - Coffee
  28: "https://images.unsplash.com/photo-1621453862214-8075ea37db29?q=80&w=600&auto=format&fit=crop", // Groceries - Juice
  29: "https://images.unsplash.com/photo-1589301760014-d9296456363a?q=80&w=600&auto=format&fit=crop", // Groceries - Beef
  30: "https://images.unsplash.com/photo-1607623814022-58db3059d722?q=80&w=600&auto=format&fit=crop"  // Groceries - Chicken
};

export const getEnhancedImage = (id) => {
  return enhancedImages[id] || null;
};
