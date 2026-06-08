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
    name: 'Orange Juice',
    tagline: 'The Main Squeeze.',
    description: 'Our flagship ride. Hard to miss and impossible not to have fun in. Features wrap-around seating, premium sound, and an open-air back deck for the ultimate cruise.',
    hourlyRate: 135,
    capacity: 40,
    nameColor: '#FF6B00', // Orange like the bus
    // IMAGE: Orange Juice bus photos (first 5: 3,5,6,7,4 then 1,2,8,9; 10-12 = gallery)
    imageUrl: '/images/buses/The Juice/orange-juice-3.png',
    // IMAGES: Multiple images for alternating display (first 5 in this order)
    images: [
      '/images/buses/The Juice/orange-juice-3.png',
      '/images/buses/The Juice/orange-juice-5.jpeg',
      '/images/buses/The Juice/orange-juice-6.jpeg',
      '/images/buses/The Juice/orange-juice-7.jpeg',
      '/images/buses/The Juice/orange-juice-4.png',
      '/images/buses/The Juice/orange-juice-1.jpeg',
      '/images/buses/The Juice/orange-juice-2.png',
      '/images/buses/The Juice/orange-juice-8.jpeg',
      '/images/buses/The Juice/orange-juice-9.jpeg'
    ],
    // GALLERY: Multiple images of Orange Juice bus
    gallery: [
      '/images/buses/The Juice/orange-juice-10.jpeg',
      '/images/buses/The Juice/orange-juice-11.jpeg',
      '/images/buses/The Juice/orange-juice-12.jpeg',
    ],
    features: ['Open Air Deck', 'Premium Sound System', 'LED Light Show', 'Coolers On Board'],

    // ------------------------------------------------------------------
    // ORANGE JUICE - CALENDAR EMBED
    // ------------------------------------------------------------------
    calendarEmbedCode: `<iframe src="https://link.zeromotionmarketing.com/rentals/party-on-wheels-/rl/69a73da8ab0c5f869f4e3ba8?heightMode=fixed&showHeader=true" style="width: 100%;border:none;overflow: hidden;" scrolling="no" id="69a73da8ab0c5f869f4e3ba8_1772651362455"></iframe><br><script src="https://link.zeromotionmarketing.com/js/form_embed.js" type="text/javascript"></script>`
  },
  {
    id: 'b2',
    name: 'Kuttin Loose',
    tagline: 'Cut loose and party hard.',
    description: 'When you need to let loose and turn up the energy. This beast brings the party wherever it goes with maximum sound and lighting for the wildest rides.',
    hourlyRate: 125,
    capacity: 40,
    nameColor: '#407e3d',
    // IMAGE: Kuttin Loose bus photo (1-4 = new exterior/interior, 5-7 = previous)
    imageUrl: '/images/buses/The Kuttin Loose/kuttin-loose-1.jpeg',
    // IMAGES: Multiple images for alternating display (1-4 shown first)
    images: [
      '/images/buses/The Kuttin Loose/kuttin-loose-1.jpeg',
      '/images/buses/The Kuttin Loose/kuttin-loose-2.jpeg',
      '/images/buses/The Kuttin Loose/kuttin-loose-3.jpeg',
      '/images/buses/The Kuttin Loose/kuttin-loose-4.jpeg',
      '/images/buses/The Kuttin Loose/kuttin-loose-6.jpeg',
      '/images/buses/The Kuttin Loose/kuttin-loose-7.png'
    ],
    features: ['Premium Sound System', 'LED Light Show', 'Dance Floor', 'Climate Control'],

    // ------------------------------------------------------------------
    // KUTTIN LOOSE - CALENDAR EMBED
    // ------------------------------------------------------------------
    calendarEmbedCode: `<iframe src="https://link.zeromotionmarketing.com/rentals/party-on-wheels-/rl/69a78d9d7132f3629284deed?heightMode=fixed&showHeader=true" style="width: 100%;border:none;overflow: hidden;" scrolling="no" id="69a78d9d7132f3629284deed_1772651375530"></iframe><br><script src="https://link.zeromotionmarketing.com/js/form_embed.js" type="text/javascript"></script>`
  },
  {
    id: 'b3',
    name: 'Cotton Candy',
    tagline: 'Sweet rides, sweeter memories.',
    description: 'Step into a world of sweetness with The Cotton Candy. This vibrant party bus delivers a fun, festive atmosphere perfect for birthdays, bachelorette parties, and special celebrations.',
    hourlyRate: 110,
    capacity: 40,
    nameColor: '#FF69B4', // Pink/Blue gradient - we'll use pink as primary
    // IMAGE: The Cotton Candy bus photo
    imageUrl: '/images/buses/The Cotton Candy/cotton-candy-1.jpeg',
    features: ['Vibrant Interior', 'Premium Sound System', 'LED Lighting', 'Climate Control'],

    // ------------------------------------------------------------------
    // THE COTTON CANDY - CALENDAR EMBED
    // ------------------------------------------------------------------
    calendarEmbedCode: `<iframe src="https://link.zeromotionmarketing.com/rentals/party-on-wheels-/rl/69a78c3f85c0159b524cac2c?heightMode=fixed&showHeader=true" style="width: 100%;border:none;overflow: hidden;" scrolling="no" id="69a78c3f85c0159b524cac2c_1772651337096"></iframe><br><script src="https://link.zeromotionmarketing.com/js/form_embed.js" type="text/javascript"></script>`
  },
  {
    id: 'b4',
    name: 'Rackz',
    tagline: 'Make it rain on wheels.',
    description: 'Bring the VIP experience wherever you go with Rackz. This sleek party bus is designed for those who want to make a statement with style, sound, and comfort.',
    hourlyRate: 130,
    minHours: 3,
    capacity: 40,
    nameColor: '#800020', // Maroon red
    // IMAGE: Rackz bus photo (rackz-1 = main, rackz-2 = second)
    imageUrl: '/images/buses/The Rackz/rackz-1.jpeg',
    // IMAGES: Multiple images for alternating display
    images: [
      '/images/buses/The Rackz/rackz-1.jpeg',
      '/images/buses/The Rackz/rackz-2.png'
    ],
    features: ['VIP Seating', 'Premium Audio', 'LED Light Show', 'AC/Heat'],

    // ------------------------------------------------------------------
    // RACKZ - CALENDAR EMBED
    // ------------------------------------------------------------------
    calendarEmbedCode: `<iframe src="https://link.zeromotionmarketing.com/rentals/party-on-wheels-/rl/69a78cd4365f5d4c30d7906f?heightMode=fixed&showHeader=true" style="width: 100%;border:none;overflow: hidden;" scrolling="no" id="69a78cd4365f5d4c30d7906f_1772651306695"></iframe><br><script src="https://link.zeromotionmarketing.com/js/form_embed.js" type="text/javascript"></script>`
  },
  {
    id: 'b5',
    name: 'Skittles',
    tagline: 'Taste the rainbow on wheels.',
    description: 'Turn up the heat with Skittles. This party bus features an expansive dance floor, pole, and club-quality sound system for the ultimate moving nightclub experience.',
    hourlyRate: 100,
    minHours: 3,
    capacity: 40,
    isActive: false, // Currently being worked on — booking disabled
    nameColor: '#9B59B6', // Skittles purple
    // IMAGE: Skittles bus photo
    imageUrl: '/images/buses/Dirty Dancer/dirty-dancer-1.jpeg',
    // IMAGES: Multiple images for alternating display
    images: [
      '/images/buses/Dirty Dancer/dirty-dancer-1.jpeg',
      '/images/buses/Dirty Dancer/dirty-dancer-2.jpeg'
    ],
    features: ['Dance Floor', 'Dance Pole', 'Club Sound System', 'Premium Lighting', 'Climate Control'],

    // ------------------------------------------------------------------
    // SKITTLES - CALENDAR EMBED
    // ------------------------------------------------------------------
    calendarEmbedCode: `<iframe src="https://link.zeromotionmarketing.com/rentals/party-on-wheels-/rl/69a78d2edcc1c11d37b7385d?heightMode=fixed&showHeader=true" style="width: 100%;border:none;overflow: hidden;" scrolling="no" id="69a78d2edcc1c11d37b7385d_1772651327695"></iframe><br><script src="https://link.zeromotionmarketing.com/js/form_embed.js" type="text/javascript"></script>`
  }
  // NOTE: Green Light and The Coconut removed as they were not in the updated fleet list
  // If you need to add them back, use the booking calendar widget format from ZeroMotion Marketing
];

// EVENT IMAGES: Place event photos in public/images/events/ and update paths below
export const EVENTS: EventItem[] = [
    {
        id: 1,
        title: "Birthday Parties",
        subtitle: "Make a wish, then roll out",
        description: "Turn the big day into a rolling celebration. We bring the bus, the music, and the good times—you just bring your crew.",
        image: "/images/events/birthday-parties.jpeg"
    },
    {
        id: 2,
        title: "Mardi Gras",
        subtitle: "Laissez les bons temps rouler",
        description: "The ultimate parade base. AC, bathroom breaks, and a dedicated driver to navigate the chaos. Book early!",
        image: "/images/events/mardi-gras.jpeg"
    },
    {
        id: 3,
        title: "Nights Out",
        subtitle: "New Orleans & Houma",
        description: "Bachelor/ettes, birthdays, or just because it's Saturday. The party starts the second you step on the bus.",
        image: "/images/events/nights-out.jpeg"
    }
];

// Placeholder constants for unused components
export const PRODUCTS: Product[] = [];
export const JOURNAL_ARTICLES: JournalArticle[] = [];
