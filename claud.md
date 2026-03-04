# POW Website - Project Memory & Context

## 🎯 Project Overview
**Site**: POW Transportation Website
**Tech Stack**: React, TypeScript, Tailwind CSS, Vite
**Deployment**: Vercel

## 🤝 Agent Collaboration Strategy

### Core Team
1. **frontend-engineer**: Primary builder for React/TSX components, Tailwind CSS, accessibility (WCAG 2.1 AA)
2. **zeromotion-ui-engineer**: UI/UX polish, modern viral-worthy design, 2025-2026 standards
3. **senior-webdev-assistant**: Technical lead, performance optimization, deployment oversight

### Collaboration Workflow
- **Phase 1**: Frontend-engineer builds core functionality
- **Phase 2**: Zeromotion-ui-engineer adds polish and modern interactions
- **Phase 3**: Senior-webdev-assistant reviews and optimizes for production
- **Continuous**: All agents work in parallel for iterative improvements

## 📅 Current Sprint: Calendar Embedding for Bus Booking

### Objective
Embed calendar links to "Book This" buttons for each bus service

### Status
- [x] Calendar links identified - ALL BUSES HAVE CALENDAR EMBEDS IN constants.ts
- [x] Button components updated - BookingModal displays calendars
- [ ] UI polish applied
- [ ] Performance optimized
- [ ] Deployed to production

### Implementation Details
- **BookingModal.tsx**: Main component handling calendar display
- **Calendar Embeds Present**:
  - Orange Juice: ✅ Has calendar embed
  - Green Light: ✅ Has calendar embed
  - Kuttin Loose: ❌ Empty (shows fallback phone number)
  - The Coconut: ✅ Has calendar embed
- **Service Menu**: Unified booking widget also implemented

## 📂 Key Files & Components

### Components
- `components/Hero.tsx` - Main hero section (MODIFIED)
- `components/ServiceCard.tsx` - Individual service cards with booking buttons
- `components/ServiceMenu.tsx` - Service menu with bus options
- `components/Footer.tsx` - Footer with contact info

### Configuration
- `constants.ts` - Site-wide constants and configuration (MODIFIED)
- `index.css` - Global styles (DELETED)
- `tailwind.config.js` - Tailwind configuration

## 🚌 Bus Services & Calendar Links

### Current Fleet (Updated 2024-02-20)
1. **The Juice** (40 pax, $135/hr) - ✅ Calendar embed active
   - Formerly "Orange Juice", renamed to match business records
2. **Kuttin Loose** (40 pax, $125/hr) - ✅ Calendar embed active
   - Price updated from $150 to $125
3. **The Cotton Candy** (40 pax, $110/hr) - ✅ Calendar embed active
   - NEW BUS ADDED - needs image
4. **Rackz** (40 pax, $100/hr) - ✅ Calendar embed active
   - NEW BUS ADDED - needs image
5. **The Dirty Dancer** (40 pax, $90/hr) - ✅ Calendar embed active
   - NEW BUS ADDED - needs image
6. **The Limo** (20 pax, $80/hr, 3hr min) - ✅ Calendar embed active
   - NEW VEHICLE ADDED - smaller capacity, lower minimum

### Removed Buses
- **Green Light** - No longer in fleet
- **The Coconut** - No longer in fleet

### Bus Images (All Active)
- The Juice: `/images/buses/The Juice/Orange Juice.jpeg`
- Kuttin Loose: `/images/buses/The Kuttin Loose/KuttinLoose.png`
- The Cotton Candy: `/images/buses/The Cotton Candy/CottonCandy.jpeg`
- Rackz: `/images/buses/The Rackz/TheRackz.jpeg`
- The Dirty Dancer: `/images/buses/Dirty Dancer/DirtyDancer.jpeg`
- The Limo: `/images/buses/Limo/Limo.jpeg`

## 📝 Recent Changes
- **2024-02-20 - MAJOR UPDATE**:
  - ✅ Project memory system established (claud.md)
  - ✅ Complete fleet overhaul with new calendar embeds
  - ✅ Added 4 new vehicles: Cotton Candy, Rackz, Dirty Dancer, The Limo
  - ✅ Renamed Orange Juice → The Juice
  - ✅ Updated pricing: Kuttin Loose ($150→$125), The Juice ($125→$135)
  - ✅ All buses now have working calendar embeds
  - ❌ Removed: Green Light, The Coconut (no longer in fleet)
  - ✅ All bus images added and linked properly
- **Previous**: Unified Service Menu embed implemented
- **Previous**: Mobile optimization completed
- **Previous**: Facebook link enhanced in footer
- **Previous**: Phone number standardized to 985-333-9762

## 🔄 Current Booking Flow
1. **Hero/Nav**: "Book Now" button → Opens Service Menu modal
2. **BusFleet Component**: Individual bus cards with "Book This Bus" buttons
3. **BookingModal**: Opens with bus details + embedded calendar
4. **Calendar Embeds**: ZeroMotion Marketing iframe widgets
5. **Fallback**: Phone number (985-333-9762) for buses without calendars

## 🎨 Design Standards
- **Typography**: Clean, modern, accessible
- **Colors**: Consistent brand palette
- **Interactions**: Smooth transitions, hover effects
- **Mobile**: Fully responsive, touch-optimized
- **Accessibility**: WCAG 2.1 AA compliant

## 🚀 Deployment Notes
- **Platform**: Vercel
- **Branch**: main
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

## 🔄 Next Steps
1. Get calendar booking links from business owner
2. Implement calendar integration
3. Test on all devices
4. Deploy to production

## 📊 Performance Targets
- Lighthouse Score: 90+
- First Contentful Paint: <1.5s
- Time to Interactive: <3s
- Accessibility Score: 100

## 🐛 Known Issues
- None currently tracked

## 💡 Future Enhancements
- Advanced booking system integration
- Real-time availability checking
- Payment processing
- Customer portal

---
*Last Updated: 2024-02-20*
*Remember: Always use the three-agent team for all changes*