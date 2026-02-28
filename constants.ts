/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { Bus, EventItem, Product, JournalArticle } from './types';

// ==========================================
// CONFIGURATION ZONE - BRANDING & ASSETS
// ==========================================
//
// QUICK START: Add your images to public/images/ folder, then update paths below
// See ASSETS_GUIDE.md for detailed instructions

export const BRAND_NAME = 'Party On Wheels';
export const OWNER_NAME = 'Deric Hebert';

// LOGO: Place your logo file in public/images/logo/ and update the filename below
// Supported formats: .png, .svg, .jpg, .webp
export const LOGO_URL = '/images/logo/pow-logo.png'; // Change filename if different

export const BUSES: Bus[] = [
  {
    id: 'b1',
    name: 'The Juice',
    tagline: 'The Main Squeeze.',
    description: 'Our flagship ride. Hard to miss and impossible not to have fun in. Features wrap-around seating, premium sound, and an open-air back deck for the ultimate cruise.',
    hourlyRate: 135,
    minHours: 4,
    capacity: 40,
    nameColor: '#FF6B00', // Orange like the bus
    // IMAGE: The Juice bus photos
    imageUrl: '/images/buses/The Juice/Orange Juice.jpeg',
    // GALLERY: Multiple images of The Juice bus
    gallery: [
      '/images/buses/orange-juice-gallery-1.jpeg',
      '/images/buses/orange-juice-gallery-2.jpeg',
      '/images/buses/orange-juice-gallery-3.jpeg',
    ],
    features: ['Open Air Deck', 'Premium Sound System', 'LED Light Show', 'Coolers On Board'],

    // ------------------------------------------------------------------
    // THE JUICE - CALENDAR EMBED
    // ------------------------------------------------------------------
    calendarEmbedCode: `<iframe src="https://link.zeromotionmarketing.com/booking/partyonwheels/sv/6997f3cd13de2126c1af475b?heightMode=fixed&showHeader=true" style="width: 100%;border:none;overflow: hidden;" scrolling="no" id="6997f3cd13de2126c1af475b_1771615404908"></iframe><br><script src="https://link.zeromotionmarketing.com/js/form_embed.js" type="text/javascript"></script>`
  },
  {
    id: 'b2',
    name: 'Kuttin Loose',
    tagline: 'Cut loose and party hard.',
    description: 'When you need to let loose and turn up the energy. This beast brings the party wherever it goes with maximum sound and lighting for the wildest rides.',
    hourlyRate: 125,
    minHours: 4,
    capacity: 40,
    nameColor: '#228B22', // Green
    // IMAGE: Kuttin Loose bus photo
    imageUrl: '/images/buses/The Kuttin Loose/KuttinLoose.png',
    features: ['Premium Sound System', 'LED Light Show', 'Dance Floor', 'Climate Control'],

    // ------------------------------------------------------------------
    // KUTTIN LOOSE - CALENDAR EMBED
    // ------------------------------------------------------------------
    calendarEmbedCode: `<iframe src="https://link.zeromotionmarketing.com/booking/partyonwheels/sv/6997f987b7155aae6f37abed?heightMode=fixed&showHeader=true" style="width: 100%;border:none;overflow: hidden;" scrolling="no" id="6997f987b7155aae6f37abed_1771615298073"></iframe><br><script src="https://link.zeromotionmarketing.com/js/form_embed.js" type="text/javascript"></script>`
  },
  {
    id: 'b3',
    name: 'The Cotton Candy',
    tagline: 'Sweet rides, sweeter memories.',
    description: 'Step into a world of sweetness with The Cotton Candy. This vibrant party bus delivers a fun, festive atmosphere perfect for birthdays, bachelorette parties, and special celebrations.',
    hourlyRate: 110,
    minHours: 4,
    capacity: 40,
    nameColor: '#FF69B4', // Pink/Blue gradient - we'll use pink as primary
    // IMAGE: The Cotton Candy bus photo
    imageUrl: '/images/buses/The Cotton Candy/CottonCandy.jpeg',
    features: ['Vibrant Interior', 'Premium Sound System', 'LED Lighting', 'Climate Control'],

    // ------------------------------------------------------------------
    // THE COTTON CANDY - CALENDAR EMBED
    // ------------------------------------------------------------------
    calendarEmbedCode: `<iframe src="https://link.zeromotionmarketing.com/booking/partyonwheels/sv/6997f8e90a59e3eff7ea08a8?heightMode=fixed&showHeader=true" style="width: 100%;border:none;overflow: hidden;" scrolling="no" id="6997f8e90a59e3eff7ea08a8_1771615328444"></iframe><br><script src="https://link.zeromotionmarketing.com/js/form_embed.js" type="text/javascript"></script>`
  },
  {
    id: 'b4',
    name: 'Rackz',
    tagline: 'Make it rain on wheels.',
    description: 'Bring the VIP experience wherever you go with Rackz. This sleek party bus is designed for those who want to make a statement with style, sound, and comfort.',
    hourlyRate: 90,
    minHours: 4,
    capacity: 40,
    nameColor: '#C0C0C0', // Metallic silver
    // IMAGE: Rackz bus photo
    imageUrl: '/images/buses/The Rackz/TheRackz.jpeg',
    features: ['VIP Seating', 'Premium Audio', 'LED Light Show', 'AC/Heat'],

    // ------------------------------------------------------------------
    // RACKZ - CALENDAR EMBED
    // ------------------------------------------------------------------
    calendarEmbedCode: `<iframe src="https://link.zeromotionmarketing.com/booking/partyonwheels/sv/6997f558375466488a063555?heightMode=fixed&showHeader=true" style="width: 100%;border:none;overflow: hidden;" scrolling="no" id="6997f558375466488a063555_1771615387203"></iframe><br><script src="https://link.zeromotionmarketing.com/js/form_embed.js" type="text/javascript"></script>`
  },
  {
    id: 'b5',
    name: 'The Dirty Dancer',
    tagline: 'Dance like nobody is watching.',
    description: 'Turn up the heat with The Dirty Dancer. This party bus features an expansive dance floor, pole, and club-quality sound system for the ultimate moving nightclub experience.',
    hourlyRate: 80,
    minHours: 4,
    capacity: 40,
    nameColor: '#FFA500', // School bus orange
    // IMAGE: The Dirty Dancer bus photo
    imageUrl: '/images/buses/Dirty Dancer/DirtyDancer.jpeg',
    features: ['Dance Floor', 'Dance Pole', 'Club Sound System', 'Premium Lighting', 'Climate Control'],

    // ------------------------------------------------------------------
    // THE DIRTY DANCER - CALENDAR EMBED
    // ------------------------------------------------------------------
    calendarEmbedCode: `<iframe src="https://link.zeromotionmarketing.com/booking/partyonwheels/sv/6997f5980a59e3a7e6e925b1?heightMode=fixed&showHeader=true" style="width: 100%;border:none;overflow: hidden;" scrolling="no" id="6997f5980a59e3a7e6e925b1_1771615368878"></iframe><br><script src="https://link.zeromotionmarketing.com/js/form_embed.js" type="text/javascript"></script>`
  },
  {
    id: 'b6',
    name: 'The Limo',
    tagline: 'Intimate luxury on wheels.',
    description: 'For smaller groups seeking an upscale experience. Our limo offers elegant seating, premium amenities, and intimate ambiance perfect for special occasions and romantic nights out.',
    hourlyRate: 80,
    minHours: 3,
    capacity: 20,
    nameColor: '#1C1C1C', // Black like a classic limo
    // IMAGE: The Limo photo
    imageUrl: '/images/buses/Limo/Limo.jpeg',
    features: ['Luxury Seating', 'Premium Sound', 'Mood Lighting', 'Climate Control', 'Mini Bar'],

    // ------------------------------------------------------------------
    // THE LIMO - CALENDAR EMBED
    // ------------------------------------------------------------------
    calendarEmbedCode: `<iframe src="https://link.zeromotionmarketing.com/booking/partyonwheels/sv/6997f691f6ab8f441ceaf29d?heightMode=fixed&showHeader=true" style="width: 100%;border:none;overflow: hidden;" scrolling="no" id="6997f691f6ab8f441ceaf29d_1771615349252"></iframe><br><script src="https://link.zeromotionmarketing.com/js/form_embed.js" type="text/javascript"></script>`
  }
  // NOTE: Green Light and The Coconut removed as they were not in the updated fleet list
  // If you need to add them back, use the booking calendar widget format from ZeroMotion Marketing
];

// EVENT IMAGES: Place event photos in public/images/events/ and update paths below
export const EVENTS: EventItem[] = [
    {
        id: 1,
        title: "Weddings",
        subtitle: "Get to the altar on time",
        description: "Transport your bridal party or your entire guest list in style. We handle the driving so you can handle the champagne.",
        image: "/images/events/wedding.jpg"
    },
    {
        id: 2,
        title: "Mardi Gras",
        subtitle: "Laissez les bons temps rouler",
        description: "The ultimate parade base. AC, bathroom breaks, and a dedicated driver to navigate the chaos. Book early!",
        image: "/images/events/mardi-gras.jpg"
    },
    {
        id: 3,
        title: "Nights Out",
        subtitle: "New Orleans & Houma",
        description: "Bachelor/ettes, birthdays, or just because it's Saturday. The party starts the second you step on the bus.",
        image: "/images/events/nights-out.jpg"
    }
];

// Placeholder constants for unused components
export const PRODUCTS: Product[] = [];
export const JOURNAL_ARTICLES: JournalArticle[] = [];
