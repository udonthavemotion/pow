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
    hourlyRate: 125,
    minHours: 4,
    capacity: 40,
    // IMAGE: Orange Juice bus photos
    imageUrl: '/images/buses/orange-juice-main.jpeg',
    // GALLERY: Multiple images of Orange Juice bus
    gallery: [
      '/images/buses/orange-juice-gallery-1.jpeg',
      '/images/buses/orange-juice-gallery-2.jpeg',
      '/images/buses/orange-juice-gallery-3.jpeg',
    ],
    features: ['Open Air Deck', 'Premium Sound System', 'LED Light Show', 'Coolers On Board'],
    
    // ------------------------------------------------------------------
    // PASTE YOUR GOHIGHLEVEL CALENDAR EMBED CODE FOR "ORANGE JUICE" BELOW
    // ------------------------------------------------------------------
    calendarEmbedCode: `<iframe src="https://app.partyonwheelspow.com/widget/booking/yK1kBBvBCJP64ex1AxT9" style="width: 100%;border:none;overflow: hidden;" scrolling="no" id="eVnwTNulhldzIaZuYCeh_1764626578838"></iframe><br><script src="https://app.partyonwheelspow.com/js/form_embed.js" type="text/javascript"></script>`
  },
  {
    id: 'b2',
    name: 'Green Light',
    tagline: 'Ready. Set. Party.',
    description: 'The green machine that signals it is time to go. Perfect for bachelor parties and Saints game days. Spacious interior with club-style lighting.',
    hourlyRate: 100,
    minHours: 4,
    capacity: 40,
    // IMAGE: Green Light bus photo
    imageUrl: '/images/buses/green-light-main.jpg',
    // GALLERY: Additional images of Green Light bus
    gallery: [
      '/images/buses/green-light-gallery-1.jpg',
    ],
    features: ['Club Lighting', 'Bluetooth Audio', 'Dance Pole', 'AC/Heat'],
    
    // ------------------------------------------------------------------
    // PASTE YOUR GOHIGHLEVEL CALENDAR EMBED CODE FOR "GREEN LIGHT" BELOW
    // ------------------------------------------------------------------
    calendarEmbedCode: `<iframe src="https://app.partyonwheelspow.com/widget/booking/eQsFVZL3GQdwOiyxahv6" style="width: 100%;border:none;overflow: hidden;" scrolling="no" id="eVnwTNulhldzIaZuYCeh_1764626542840"></iframe><br><script src="https://app.partyonwheelspow.com/js/form_embed.js" type="text/javascript"></script>`
  },
  {
    id: 'b3',
    name: 'Kuttin Loose',
    tagline: 'Cut loose and party hard.',
    description: 'When you need to let loose and turn up the energy. This beast brings the party wherever it goes with maximum sound and lighting for the wildest rides.',
    hourlyRate: 150,
    minHours: 4,
    capacity: 40,
    // IMAGE: Kuttin Loose bus photo
    imageUrl: '/images/buses/kuttin-loose-main.jpg',
    features: ['Premium Sound System', 'LED Light Show', 'Dance Floor', 'Climate Control'],
    
    // ------------------------------------------------------------------
    // PASTE YOUR GOHIGHLEVEL CALENDAR EMBED CODE FOR "KUTTIN LOOSE" (COCONUT) BELOW
    // ------------------------------------------------------------------
    calendarEmbedCode: `<iframe src="https://app.partyonwheelspow.com/widget/booking/lxTcijWz1fWVLZHizAoC" style="width: 100%;border:none;overflow: hidden;" scrolling="no" id="eVnwTNulhldzIaZuYCeh_1764626564280"></iframe><br><script src="https://app.partyonwheelspow.com/js/form_embed.js" type="text/javascript"></script>` 
  },
  {
    id: 'b4',
    name: 'Big Blue',
    tagline: 'Maximum capacity, maximum fun.',
    description: 'Our largest hauler for the biggest krewes. Perfect for Greek life events, corporate outings, or massive family reunions.',
    hourlyRate: 200,
    minHours: 5,
    capacity: 45,
    // IMAGE: Place bus photo in public/images/buses/ and update path below
    imageUrl: '/images/buses/big-blue-main.jpg', // Update filename to match your image
    features: ['Max Capacity', 'Karaoke System', 'Fog Machine', 'Bathroom'],
    
    // ------------------------------------------------------------------
    // PASTE YOUR GOHIGHLEVEL CALENDAR EMBED CODE FOR BUS 4 BELOW
    // ------------------------------------------------------------------
    calendarEmbedCode: ``
  }
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
