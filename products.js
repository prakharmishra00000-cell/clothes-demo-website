const products = [
  {
    id: 1,
    name: "Classic Beige Trench Coat",
    brand: "Atelier V",
    price: 189.99,
    rating: 4.8,
    reviewsCount: 124,
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600",
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=600"
    ],
    description: "An iconic silhouette crafted from water-repellent cotton gabardine. Features a double-breasted closure, storm flap, and a belted waist for a timeless defined fit.",
    categories: ["Women's Wear", "Winter Collection", "Formal Wear"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Beige", "Black", "Navy"],
    material: "100% Organic Cotton Gabardine",
    inStock: true
  },
  {
    id: 2,
    name: "Slim Fit Wool Blazer",
    brand: "Tailor & Co",
    price: 249.99,
    rating: 4.9,
    reviewsCount: 88,
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=600"
    ],
    description: "Expertly tailored from premium Italian wool blend. Features notch lapels, structured shoulders, and a fully lined interior designed to offer sophisticated comfort.",
    categories: ["Men's Wear", "Formal Wear", "Winter Collection"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Charcoal", "Navy Blue", "Houndstooth"],
    material: "80% Virgin Wool, 20% Silk",
    inStock: true
  },
  {
    id: 3,
    name: "Linen Breeze Casual Shirt",
    brand: "Sol & Sea",
    price: 69.99,
    rating: 4.6,
    reviewsCount: 215,
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=600",
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=600"
    ],
    description: "Relaxed fit shirt in lightweight, breathable linen. Perfect for summer days or layering under light knitwear. Features a classic button-down collar.",
    categories: ["Men's Wear", "Casual Wear", "Summer Collection"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Olive Green", "Sky Blue"],
    material: "100% Pure Flax Linen",
    inStock: true
  },
  {
    id: 4,
    name: "Silk Embroidered Anarkali Suit",
    brand: "Heritage Threads",
    price: 320.00,
    rating: 5.0,
    reviewsCount: 42,
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=600"
    ],
    description: "Exquisite hand-embroidered Anarkali suit set in premium raw silk. Embellished with delicate zari and sequin work, completed with a sheer organza dupatta.",
    categories: ["Women's Wear", "Ethnic Wear"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Emerald Green", "Ruby Red", "Deep Plum"],
    material: "Pure Raw Silk & Silk Organza",
    inStock: true
  },
  {
    id: 5,
    name: "Floral Print Sun Dress",
    brand: "Atelier V",
    price: 119.50,
    rating: 4.7,
    reviewsCount: 167,
    images: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=600",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=600"
    ],
    description: "A breezy silhouette featuring a delicate hand-painted floral pattern, sweetheart neckline, and a flowing tiered skirt. Perfect for sunny garden parties.",
    categories: ["Women's Wear", "Casual Wear", "Summer Collection"],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Lavender", "Buttercup Yellow", "Rose Blush"],
    material: "100% Mulberry Silk Crepe",
    inStock: true
  },
  {
    id: 6,
    name: "High-Performance Active Set",
    brand: "AeroFit",
    price: 89.99,
    rating: 4.7,
    reviewsCount: 310,
    images: [
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600",
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=600"
    ],
    description: "Two-piece seamless workout set featuring a compression crop top and high-rise leggings. Made with sweat-wicking 4-way stretch fabric for maximum mobility.",
    categories: ["Women's Wear", "Sportswear"],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Slate Gray", "Sage Green", "Burgundy"],
    material: "85% Recycled Nylon, 15% Elastane",
    inStock: true
  },
  {
    id: 7,
    name: "Oversized Cashmere Pullover",
    brand: "Nordic Soft",
    price: 195.00,
    rating: 4.9,
    reviewsCount: 94,
    images: [
      "https://images.unsplash.com/photo-1574164904299-3a102b110380?q=80&w=600",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=600"
    ],
    description: "Indulgently soft, medium-weight knit pullover crafted from sustainable Mongolian cashmere. Relaxed body with dropped shoulders and ribbed cuffs.",
    categories: ["Women's Wear", "Casual Wear", "Winter Collection"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Oatmeal", "Soft Gray", "Cream White"],
    material: "100% Mongolian Cashmere",
    inStock: true
  },
  {
    id: 8,
    name: "Minimalist Leather Chronograph",
    brand: "Tempo",
    price: 155.00,
    rating: 4.5,
    reviewsCount: 78,
    images: [
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=600",
      "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?q=80&w=600"
    ],
    description: "Crafted with a sleek brushed stainless steel case and a genuine Italian leather strap. Water-resistant up to 5 ATM, powered by Japanese quartz movement.",
    categories: ["Accessories"],
    sizes: ["One Size"],
    colors: ["Tan/Silver", "Black/Gold"],
    material: "Stainless Steel Case, Full Grain Leather Band",
    inStock: true
  },
  {
    id: 9,
    name: "Classic Chelsea Leather Boots",
    brand: "Tailor & Co",
    price: 175.00,
    rating: 4.8,
    reviewsCount: 112,
    images: [
      "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?q=80&w=600",
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?q=80&w=600"
    ],
    description: "Handcrafted Chelsea boots in rich oil-tanned leather. Elasticated side panels and pull tabs ensure easy wear, resting on a durable stacked wooden heel.",
    categories: ["Accessories", "Winter Collection"],
    sizes: ["8", "9", "10", "11", "12"],
    colors: ["Chestnut Brown", "Noir Black"],
    material: "100% Genuine Calf Leather",
    inStock: true
  },
  {
    id: 10,
    name: "Unisex Cotton Denim Jacket",
    brand: "Sol & Sea",
    price: 95.00,
    rating: 4.7,
    reviewsCount: 243,
    images: [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=600",
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=600"
    ],
    description: "A rugged, classic fit denim jacket in vintage washed indigo. Features shank buttons, button-flap chest pockets, and welt waist pockets.",
    categories: ["Men's Wear", "Women's Wear", "Casual Wear"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Vintage Indigo", "Acid Wash White"],
    material: "100% Recycled Rigid Denim",
    inStock: true
  },
  {
    id: 11,
    name: "Kids Cotton Knit Dungarees",
    brand: "Mini Bloom",
    price: 49.99,
    rating: 4.9,
    reviewsCount: 54,
    images: [
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=600",
      "https://images.unsplash.com/photo-1622290319146-7b63df48a635?q=80&w=600"
    ],
    description: "Adorable overalls knitted in organic cotton. Breathable, hypoallergenic, featuring adjustable button straps and bottom snaps for easy changing.",
    categories: ["Kids' Wear", "Casual Wear", "Summer Collection"],
    sizes: ["6M", "12M", "18M", "24M", "3T"],
    colors: ["Sage Green", "Dusty Pink", "Oatmeal"],
    material: "100% Organic GOTS-Certified Cotton",
    inStock: true
  },
  {
    id: 12,
    name: "Mens Premium Sport Hoodie",
    brand: "AeroFit",
    price: 79.99,
    rating: 4.6,
    reviewsCount: 139,
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=600"
    ],
    description: "Ergonomic sportswear hoodie with quick-dry fleece lining. Scuba-style hood and zip-secure pockets make it perfect for running or pre-workout warmth.",
    categories: ["Men's Wear", "Sportswear", "Winter Collection"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Carbon Black", "Heather Gray"],
    material: "90% Polyester, 10% Spandex",
    inStock: true
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = products;
}
