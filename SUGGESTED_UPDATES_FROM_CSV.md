# Party On Wheels - Suggested Updates from CSV Analysis

## Owner/Business Information Updates

### Current Information on Site:
- **Phone:** 985-333-9762
- **Owner:** Deric Hebert

### New Information from CSV:
- **Owner:** Deric Hebert
- **Phone:** 985-856-1860
- **Email:** Derichebert33@yahoo.com
- **Address:** 102 Clendenning Rd, Houma, LA 70363
- **Hours:** 24/7 - "any times you need we available"
- **Mission Statement:** "We Are All About Customer service & making sure our party has a unforgettable night"

## Fleet Updates Required

### Current Fleet on Website:
1. **Orange Juice** - $125/hr
2. **Green Light** - $100/hr
3. **Kuttin Loose** - $150/hr
4. **The Coconut** - $125/hr (recently added)

### New Fleet from CSV:
1. **Bus 1 - Juice** - $135/hr (was Orange Juice, price increased from $125)
2. **Bus 2 - Kuttin Loose** - $125/hr (price decreased from $150)
3. **Bus 3 - Cotton Candy** - $110/hr (replaces The Coconut)
4. **Bus 4 - Rackz** - $100/hr (new)
5. **Bus 5 - Dirty Dancer** - $90/hr (new)
6. **Other - Limo** - $80/hr (new addition)

### Notable Changes:
- **Remove:** Green Light bus
- **Remove:** The Coconut bus
- **Rename:** "Orange Juice" → "Juice"
- **Add:** Cotton Candy, Rackz, Dirty Dancer, Limo
- **Price Updates:** Juice increased to $135, Kuttin Loose decreased to $125

## Bus Images Available for Download:
1. **Bus 1 (Juice):** https://services.leadconnectorhq.com/documents/download/19PD2h1oL6M7HznTZBv9
2. **Bus 2 (Kuttin Loose):** https://services.leadconnectorhq.com/documents/download/K3eeRxTKu6BtHrivF6Xc
3. **Bus 3 (Cotton Candy):** https://services.leadconnectorhq.com/documents/download/O8Ujv2Yp0srph3MrMhg0
4. **Bus 4 (Rackz):** https://services.leadconnectorhq.com/documents/download/hT7BULMhKdbpKd336QdM
5. **Bus 5 (Dirty Dancer):** https://services.leadconnectorhq.com/documents/download/JTXrdGI5KYFmjBg4xjql
6. **Other (Limo):** https://services.leadconnectorhq.com/documents/download/dReEY5WPsmNlalSjKLxc

## Files to Update:

### 1. constants.ts
- Update OWNER_PHONE to 985-856-1860
- Add OWNER_EMAIL with Derichebert33@yahoo.com
- Update BUSES array with new fleet (6 vehicles total)
- Update prices for each bus
- Update bus names and descriptions

### 2. components/Footer.tsx
- Update phone number from 985-333-9762 to 985-856-1860
- Add/update address to 102 Clendenning Rd, Houma, LA 70363

### 3. components/FAQ.tsx
- Update phone number if displayed

### 4. components/BookingModal.tsx
- Update fallback phone number from 985-333-9762 to 985-856-1860

### 5. components/About.tsx (if exists)
- Update mission statement
- Update owner information
- Add 24/7 availability messaging

## Calendar Integration Notes:
- You mentioned needing to remake the calendars
- Current calendar embeds:
  - Orange Juice (now Juice): Has embed
  - Green Light (being removed): Has embed
  - Kuttin Loose: No embed (pending)
  - The Coconut (now Cotton Candy): Has embed
- New buses need calendar setup:
  - Rackz: Needs calendar
  - Dirty Dancer: Needs calendar
  - Limo: Needs calendar

## GoHighLevel Service Booking:
- Setting up service booking for Deric will require:
  1. Calendar for each bus (6 total)
  2. Service menu with all options
  3. Pricing configuration matching CSV
  4. Integration with new phone number

## Recommended Implementation Order:
1. Download and save bus images from provided URLs
2. Update phone number across all components
3. Update constants.ts with new fleet information
4. Create new GHL calendars for each bus
5. Update calendar embed codes
6. Test booking flow for each bus
7. Update About/Mission content
8. Verify all contact information is consistent

## Terms and Conditions Note:
The CSV includes TCPA compliance text that should be incorporated into any forms:
- Non-marketing consent text
- Marketing/promotional consent text
- Opt-out instructions (STOP to opt out)