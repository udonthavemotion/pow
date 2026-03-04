# GoHighLevel Calendar - Maintenance Guide

## Quick Reference

### Calendar URLs
All calendars are hosted on ZeroMotion Marketing's GoHighLevel account.

**Service Menu (All Buses)**:
```
https://link.zeromotionmarketing.com/booking/partyonwheels/sc/69973c8861f69e3db6e9664f
```

**Individual Bus Calendars**:
- The Juice: `6997f3cd13de2126c1af475b`
- Kuttin Loose: `6997f987b7155aae6f37abed`
- The Cotton Candy: `6997f8e90a59e3eff7ea08a8`
- Rackz: `6997f558375466488a063555`
- The Dirty Dancer: `6997f5980a59e3a7e6e925b1`
- The Limo: `6997f691f6ab8f441ceaf29d`

### Required Script
```
https://link.zeromotionmarketing.com/js/form_embed.js
```

## How to Update Calendars

### Service Menu (Main Calendar)

**File**: `C:\Users\godsp\OneDrive\Desktop\pow\pow\App.tsx`

**Location**: Line 25

**Current Code**:
```typescript
const SERVICE_MENU_EMBED = `<iframe src="https://link.zeromotionmarketing.com/booking/partyonwheels/sc/69973c8861f69e3db6e9664f?heightMode=fixed&showHeader=true" style="width: 100%;border:none;overflow: hidden;" scrolling="no" id="69973c8861f69e3db6e9664f_1771570530498"></iframe><br><script src="https://link.zeromotionmarketing.com/js/form_embed.js" type="text/javascript"></script>`;
```

**To Update**:
1. Get new embed code from GoHighLevel
2. Replace the entire string
3. **IMPORTANT**: Keep these parameters:
   - `heightMode=fixed` - Required for dynamic height
   - `showHeader=true` - Shows calendar header
   - `scrolling="no"` - Prevents iframe scrolling
   - `style="width: 100%;border:none;overflow: hidden;"` - Seamless integration

### Individual Bus Calendars

**File**: `C:\Users\godsp\OneDrive\Desktop\pow\pow\constants.ts`

**Example** (The Juice - Lines 43-44):
```typescript
calendarEmbedCode: `<iframe src="https://link.zeromotionmarketing.com/booking/partyonwheels/sv/6997f3cd13de2126c1af475b?heightMode=fixed&showHeader=true" style="width: 100%;border:none;overflow: hidden;" scrolling="no" id="6997f3cd13de2126c1af475b_1771615404908"></iframe><br><script src="https://link.zeromotionmarketing.com/js/form_embed.js" type="text/javascript"></script>`
```

**To Update Any Bus**:
1. Find the bus in `BUSES` array in constants.ts
2. Locate the `calendarEmbedCode` property
3. Replace with new embed code from GoHighLevel
4. **IMPORTANT**: Keep same parameters as Service Menu

## Adding a New Bus

**File**: `C:\Users\godsp\OneDrive\Desktop\pow\pow\constants.ts`

**Steps**:
1. Get calendar embed code from GoHighLevel
2. Add new bus object to `BUSES` array:

```typescript
{
  id: 'b7', // Increment number
  name: 'New Bus Name',
  tagline: 'Catchy tagline here.',
  description: 'Full description of the bus and what makes it special.',
  hourlyRate: 120, // Price per hour
  minHours: 4, // Minimum booking hours
  capacity: 40, // Max passengers
  imageUrl: '/images/buses/NewBus/photo.jpg', // Add image to public/images/buses/
  features: [
    'Feature 1',
    'Feature 2',
    'Feature 3',
  ],
  calendarEmbedCode: `<iframe src="YOUR_GOHIGHLEVEL_URL?heightMode=fixed&showHeader=true" style="width: 100%;border:none;overflow: hidden;" scrolling="no" id="YOUR_CALENDAR_ID"></iframe><br><script src="https://link.zeromotionmarketing.com/js/form_embed.js" type="text/javascript"></script>`
}
```

**Don't Forget**:
- Upload bus image to `public/images/buses/NewBusName/`
- Update service menu in GoHighLevel to include new bus
- Test both individual calendar and service menu

## Removing a Bus

**Steps**:
1. Find bus in `BUSES` array in constants.ts
2. Delete the entire bus object
3. Remove bus images from public/images/buses/
4. Update GoHighLevel service menu to exclude the bus

**Note**: Removed buses are commented in constants.ts:
```typescript
// NOTE: Green Light and The Coconut removed as they were not in the updated fleet list
```

## Embed Code Requirements

### Must Have
1. **heightMode=fixed**: Allows dynamic height adjustment
2. **showHeader=true**: Shows calendar header with branding
3. **scrolling="no"**: Iframe doesn't scroll (parent container does)
4. **style attribute**: `width: 100%;border:none;overflow: hidden;`
5. **Script tag**: GoHighLevel's form_embed.js

### Example Valid Embed Code
```html
<iframe
  src="https://link.zeromotionmarketing.com/booking/partyonwheels/sv/CALENDAR_ID?heightMode=fixed&showHeader=true"
  style="width: 100%;border:none;overflow: hidden;"
  scrolling="no"
  id="CALENDAR_ID_TIMESTAMP">
</iframe>
<br>
<script src="https://link.zeromotionmarketing.com/js/form_embed.js" type="text/javascript"></script>
```

## Troubleshooting

### Calendar Not Displaying

**Checklist**:
1. Verify embed code has correct URL
2. Check `heightMode=fixed` parameter exists
3. Ensure `form_embed.js` script tag is present
4. Test calendar URL directly in browser
5. Check GoHighLevel account is active
6. Verify no typos in calendar ID

### Wrong Calendar Showing

**Issue**: Individual bus button shows service menu or wrong bus

**Fix**:
1. Check bus object has `calendarEmbedCode` property
2. Verify calendar ID in embed code matches the bus
3. Clear browser cache and hard refresh
4. Check BookingModal is receiving correct props

### Loading Spinner Never Disappears

**Causes**:
1. Calendar URL is invalid (404)
2. GoHighLevel service is down
3. Network connectivity issue
4. Ad blocker blocking iframe

**Fix**:
1. Test calendar URL in browser
2. Check browser console for errors
3. Disable browser extensions
4. Try different network

### Script Loading Errors

**Error**: "Failed to load GoHighLevel form_embed.js"

**Fix**:
1. Check script URL is correct: `https://link.zeromotionmarketing.com/js/form_embed.js`
2. Verify network connection
3. Check for CORS issues in console
4. Try accessing script URL directly in browser

## Testing After Changes

### Quick Test
1. Save changes
2. Refresh browser (Ctrl+R)
3. Click "Pick Your Bus"
4. Verify calendar displays

### Full Test
1. Test service menu (Pick Your Bus)
2. Test each individual bus calendar (Book This Bus × 6)
3. Verify loading spinner shows and hides
4. Check responsive design (mobile/tablet/desktop)
5. Test all browser interactions (close, ESC, click outside)

### Production Test
Before deploying:
1. Run `npm run build`
2. Check for TypeScript errors
3. Test production build: `npm run preview`
4. Verify all calendars work in production mode

## GoHighLevel Dashboard

To update calendars at the source:

**Access**: https://app.gohighlevel.com
**Account**: ZeroMotion Marketing
**Location**: Party On Wheels

**Navigation**:
1. Login to GoHighLevel
2. Select "Party On Wheels" location
3. Go to Marketing → Calendars
4. Edit calendar
5. Get embed code

**Important Settings in GoHighLevel**:
- Calendar Type: Service Menu (for main) or Single Service (for buses)
- Display: Ensure proper branding
- Availability: Set correct hours/days
- Duration: Match with minHours in constants.ts
- Payment: Configure if accepting deposits

## Backup Procedure

Before making changes:

1. **Backup App.tsx**:
```bash
cp App.tsx App.tsx.backup
```

2. **Backup constants.ts**:
```bash
cp constants.ts constants.ts.backup
```

3. **Backup BookingModal.tsx**:
```bash
cp components/BookingModal.tsx components/BookingModal.tsx.backup
```

## Rollback Procedure

If something breaks:

1. **Restore from backup**:
```bash
mv App.tsx.backup App.tsx
mv constants.ts.backup constants.ts
```

2. **Rebuild**:
```bash
npm run build
```

3. **Test**:
```bash
npm run dev
```

## Version History

**v2.0** (2026-02-20):
- Fixed calendar loading issues
- Implemented proper script injection
- Added loading states
- Optimized modal sizing
- Enhanced mobile responsiveness

**v1.0** (Previous):
- Initial calendar integration
- Used dangerouslySetInnerHTML (had loading issues)

## Contact

**GoHighLevel Support**: support@gohighlevel.com
**ZeroMotion Marketing**: (Your contact for calendar access)

## Quick Commands

**Start Dev Server**:
```bash
npm run dev
```

**Build for Production**:
```bash
npm run build
```

**Preview Production Build**:
```bash
npm run preview
```

**TypeScript Check**:
```bash
npx tsc --noEmit
```

## Key Files

- `App.tsx` - Service menu embed code
- `constants.ts` - Individual bus calendars
- `components/BookingModal.tsx` - Calendar display logic
- `types.ts` - Bus interface definition

## Best Practices

1. **Always test locally** before deploying
2. **Keep embed codes backed up** in comments
3. **Maintain consistent parameters** across all calendars
4. **Document changes** in this file
5. **Test all entry points** after updates
6. **Verify mobile responsiveness** after changes
7. **Check browser console** for errors
8. **Use production build** for final testing

---

**Last Updated**: 2026-02-20
**Status**: ✅ All calendars operational
**Next Review**: When adding/removing buses or updating GoHighLevel
