import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Desi Bites Catering",
  tagline: "Authentic homemade Maharashtrian food and festive Diwali faral in Scarborough.",
  category: "Maharashtrian catering",
  schemaType: "FoodEstablishment",
  area: "Scarborough, ON",
  siteUrl: "https://desi-bites-catering.vercel.app",

  theme: {
    preset: "catering-events",
    colors: { accent: "#1F4A2E" },
    wordmark: "script",
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Homemade in Scarborough",
    headline: "Maharashtrian flavours for your table",
    subhead: "Fresh misal paav, sabudana wada, Diwali faral, and party trays made with love. DM or call to place your order.",
    images: [
      { src: "/images/post-8.jpg", alt: "Misal paav and sabudana wada party spread" },
      { src: "/images/post-6.jpg", alt: "Fresh Diwali faral snacks" },
      { src: "/images/post-7.jpg", alt: "Bhajni chakli and shankarpale" },
    ],
    secondaryCta: { label: "See the menu", href: "#menu" },
  },

  highlights: [
    "Authentic Maharashtrian cuisine",
    "Homemade with love",
    "Diwali faral and party orders",
    "Based in Scarborough, ON",
  ],

  about: {
    title: "Homemade. Authentic. Made for sharing.",
    body: [
      "Desi Bites Catering brings traditional Maharashtrian taste to Scarborough and the GTA. Every tray is homemade fresh, flavourful, and ready for festivals, parties, and everyday comfort food.",
      "From misal paav and sabudana wada to bhajni chakli, shankarpale, and festive Diwali faral, we cook the snacks and meals that feel like home. Send a DM or call to order.",
    ],
    image: { src: "/images/post-2.jpg", alt: "Shubh Navratri wishes from Desi Bites" },
  },

  menu: {
    label: "Menu",
    title: "What we make",
    intro: "Favourites from recent orders. Message us for pricing on your date and guest count.",
    variant: "list",
    showPrices: false,
    priceNote: "Message us for pricing on your date and guest count.",
    groups: [
      {
        title: "Savouries and snacks",
        items: [
          { name: "Misal Paav", description: "Classic Maharashtrian misal with paav." },
          { name: "Sabudana Wada", description: "Crispy sabudana fritters, perfect for fasting days and parties." },
          { name: "Bhajni chakli", description: "Crunchy homemade chakli." },
          { name: "Shankarpale", description: "Sweet festive snack." },
        ],
      },
      {
        title: "Festive and party",
        items: [
          { name: "Diwali faral", description: "Fresh faral boxes for the season. Less time in the kitchen, more time celebrating." },
          { name: "Party orders", description: "Trays and spreads for gatherings across the GTA." },
        ],
      },
    ],
    footnote: "Ask about seasonal festive specials when you order.",
  },

  gallery: {
    title: "From our kitchen",
    items: [
      { src: "/images/post-8.jpg", width: 1080, height: 1080, alt: "Misal paav and sabudana wada order", caption: "Misal paav and sabudana wada", href: "https://www.instagram.com/p/DeE_dCyNfnA/" },
      { src: "/images/post-7.jpg", width: 1080, height: 1350, alt: "Bhajni chakli and shankarpale", caption: "Bhajni chakli and shankarpale", href: "https://www.instagram.com/p/DeISChpNmRU/" },
      { src: "/images/post-6.jpg", width: 1080, height: 1350, alt: "Fresh Diwali faral", caption: "Fresh Diwali faral", href: "https://www.instagram.com/p/DePs0i2tv6G/" },
      { src: "/images/post-1.jpg", width: 1080, height: 1350, alt: "Party order ready to go", caption: "Party order", href: "https://www.instagram.com/p/DecAlr9R63L/" },
      { src: "/images/post-2.jpg", width: 1080, height: 1350, alt: "Navratri festive greeting", caption: "Festival wishes", href: "https://www.instagram.com/p/DeXNe01tAcn/" },
      { src: "/images/post-4.jpg", width: 1080, height: 1080, alt: "Desi Bites Catering logo", caption: "Our brand", href: "https://www.instagram.com/p/DeVOcm_tAao/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "desi_bites_catering",
    embeds: [
      "https://www.instagram.com/p/DeE_dCyNfnA/",
      "https://www.instagram.com/p/DePs0i2tv6G/",
    ],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    title: "Order in a quick DM or call",
    intro: "Orders are taken through Instagram or by phone. Tap the button to copy a starter message, then paste it into the chat.",
    dmMessage: "Hi Desi Bites! I would like to order.\nDate needed:\nServings or tray size:\nItems (misal, faral, snacks, party tray):\nPickup or delivery preference:\n",
    links: [],
    note: "DM to order, or call 647-612-6401.",
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Send a DM on Instagram with your date, servings, and what you would like, or call 647-612-6401. We will confirm details in chat." },
    { q: "Where are you based?", a: "We are based in Scarborough, Ontario, and take orders across the GTA." },
    { q: "Do you make Diwali faral?", a: "Yes. Fresh Diwali faral is available for the festive season. Message us to reserve yours." },
    { q: "Can you cater a party?", a: "Yes. We take party orders for trays and spreads. Share your guest count and date in a DM." },
  ],

  contact: {
    area: "Scarborough, Ontario",
    phone: "+1 647-612-6401",
    socials: [],
  },

  seo: {
    title: "Desi Bites Catering | Maharashtrian food in Scarborough",
    description: "Authentic homemade Maharashtrian cuisine and Diwali faral in Scarborough. Misal paav, sabudana wada, party trays. Order by Instagram DM or phone.",
    keywords: ["Maharashtrian catering Scarborough", "Diwali faral Toronto", "homemade Indian snacks GTA", "misal paav Scarborough"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
