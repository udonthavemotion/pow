# Booking Modal - Testing Instructions

## Server is Running
✅ **Development Server**: http://localhost:3000/

## What Was Fixed

The booking modal calendar was completely blank before. The issue was that the GoHighLevel iframe and its required JavaScript weren't loading properly.

### Key Changes:
1. **Proper Script Loading**: GoHighLevel's `form_embed.js` now loads correctly
2. **Dynamic iframe Injection**: Calendar iframe is properly inserted into the DOM
3. **Loading States**: Beautiful spinner shows while calendar loads
4. **Full-Screen Modal**: Modal now fills the entire screen for better calendar visibility
5. **Optimized Layout**: 35% left panel (bus info) / 65% right panel (calendar)
6. **Perfect Scrolling**: Only the calendar scrolls, no double scrollbars

## Testing Steps

### 1. Test Service Menu (Main Booking Calendar)

This calendar shows ALL 6 buses for selection.

**Entry Points**:
1. Click the **"Pick Your Bus"** button in the Hero section (orange skewed button)
2. Click **"Book Now"** in the navigation bar

**Expected Result**:
- Modal opens with "Choose Your Ride" on the left
- Loading spinner appears briefly (animated blue circle)
- Calendar displays with all 6 bus options:
  - The Juice
  - Kuttin Loose
  - The Cotton Candy
  - Rackz
  - The Dirty Dancer
  - The Limo
- You can click on any bus to see booking details

### 2. Test Individual Bus Calendars

Each bus has its own dedicated calendar.

**Entry Points**:
1. Scroll to "THE FLEET" section
2. Click **"Book This Bus"** on any bus card (6 total buses)

**Expected Result**:
- Modal opens with specific bus name on the left (e.g., "The Juice")
- Shows bus tagline, image, features, and pricing
- Loading spinner appears briefly
- Calendar displays booking form for that specific bus
- Can select dates and times for that bus

### 3. Visual Checks

**Desktop (1024px+)**:
- [ ] Modal fills entire screen (no sm:rounded corners)
- [ ] Left panel (35%) shows bus info clearly
- [ ] Right panel (65%) gives calendar plenty of room
- [ ] No blank white spaces
- [ ] Calendar content is visible and scrollable
- [ ] Close button (X) visible in top-right
- [ ] No horizontal scroll bars

**Tablet (768px - 1023px)**:
- [ ] Two-column layout maintained
- [ ] Calendar remains functional
- [ ] All content visible

**Mobile (375px - 767px)**:
- [ ] Left panel collapses to top (max 30vh height)
- [ ] Left panel scrollable if needed
- [ ] Calendar fills remaining space below
- [ ] Calendar is scrollable
- [ ] Bottom bar shows pricing/close button

### 4. Interaction Tests

**Opening Modal**:
- [ ] Clicking "Pick Your Bus" → Opens service menu
- [ ] Clicking "Book Now" → Opens service menu
- [ ] Clicking "Book This Bus" → Opens specific bus calendar
- [ ] Background blurs when modal opens
- [ ] Body scroll is disabled when modal is open

**Closing Modal**:
- [ ] Click X button → Modal closes
- [ ] Click outside modal (dark area) → Modal closes
- [ ] Press ESC key → Modal closes
- [ ] Body scroll re-enables after closing

**Loading**:
- [ ] Loading spinner shows immediately
- [ ] Spinner has rotating blue circle animation
- [ ] "Loading calendar..." text displays
- [ ] Spinner disappears when calendar loads (within 3 seconds)

**Calendar Functionality**:
- [ ] Calendar displays full GoHighLevel interface
- [ ] Can scroll through calendar months
- [ ] Can click on bus options (service menu)
- [ ] Can select dates
- [ ] Can fill out booking form
- [ ] All interactive elements work

### 5. Browser Testing

Test in multiple browsers:
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (if available)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### 6. Network Checks

Open Browser DevTools (F12):

**Console Tab**:
- [ ] No red errors
- [ ] Should see: "GoHighLevel form_embed.js loaded successfully" (green log)
- [ ] No blocked resources

**Network Tab**:
- [ ] `form_embed.js` loads successfully (Status 200)
- [ ] Calendar iframe URL loads (Status 200)
- [ ] No 404 or 500 errors

**Elements Tab**:
- [ ] Find the iframe element in the DOM
- [ ] Verify it has proper src attribute
- [ ] Check iframe width is 100%
- [ ] Confirm script tag exists for form_embed.js

## Common Issues & Solutions

### Issue: Calendar Still Blank

**Check**:
1. Open DevTools Console - any errors?
2. Check Network tab - is `form_embed.js` loading?
3. Check iframe src URL - is it accessible?
4. Try different browser
5. Disable ad blockers or privacy extensions
6. Check internet connection

**Quick Fix**:
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache
- Try incognito/private window

### Issue: Loading Spinner Never Disappears

**Check**:
1. Network tab - is iframe loading slow?
2. Console - any script errors?
3. Wait 5 seconds - fallback should hide spinner

**Quick Fix**:
- Close and reopen modal
- Refresh page

### Issue: Modal Too Small

This should be fixed, but if you still see it:
- Modal should be full screen (100vw x 100vh)
- Check browser zoom is at 100%
- Try maximizing browser window

### Issue: Scroll Bars Everywhere

This should be fixed:
- Modal itself has no scroll
- Only the calendar area scrolls
- Left panel scrolls only on mobile

## Performance Expectations

- **Initial Load**: < 1 second
- **Modal Open**: Instant (smooth animation)
- **Calendar Load**: 1-3 seconds (depending on network)
- **Modal Close**: Instant

## What Success Looks Like

### Service Menu Modal:
```
┌────────────────────────────────────────────────┐
│                              [X]               │
│  ┌─────────────┬──────────────────────────┐  │
│  │ Choose Your │ Select Your Service      │  │
│  │ Ride        │                          │  │
│  │             │ [LOADING SPINNER]        │  │
│  │ Select from │         ↓                │  │
│  │ our premium │ ┌──────────────────────┐│  │
│  │ fleet       │ │ • The Juice          ││  │
│  │             │ │ • Kuttin Loose       ││  │
│  │ [Trust      │ │ • The Cotton Candy   ││  │
│  │  Signals]   │ │ • Rackz             ││  │
│  │             │ │ • The Dirty Dancer   ││  │
│  │             │ │ • The Limo          ││  │
│  │             │ │                      ││  │
│  │             │ │ [Calendar Interface] ││  │
│  │             │ └──────────────────────┘│  │
│  └─────────────┴──────────────────────────┘  │
└────────────────────────────────────────────────┘
```

### Individual Bus Modal:
```
┌────────────────────────────────────────────────┐
│                              [X]               │
│  ┌─────────────┬──────────────────────────┐  │
│  │ The Juice   │ Schedule Your Booking    │  │
│  │             │                          │  │
│  │ The Main    │ [Calendar for The Juice] │  │
│  │ Squeeze.    │                          │  │
│  │             │ ┌──────────────────────┐│  │
│  │ [Bus Image] │ │ Date Picker          ││  │
│  │             │ │ Time Slots           ││  │
│  │ Features:   │ │ Booking Form         ││  │
│  │ ✓ Open Air  │ │                      ││  │
│  │ ✓ Premium   │ │                      ││  │
│  │             │ └──────────────────────┘│  │
│  │ $135/hour   │                          │  │
│  │ 4hr min     │                          │  │
│  │ 40 guests   │                          │  │
│  └─────────────┴──────────────────────────┘  │
└────────────────────────────────────────────────┘
```

## Developer Notes

### Files Changed:
- `components/BookingModal.tsx` - Complete refactor

### Key Implementation:
```typescript
// Proper script loading
const script = document.createElement('script');
script.src = 'https://link.zeromotionmarketing.com/js/form_embed.js';
script.async = true;
document.body.appendChild(script);

// Proper iframe injection
const tempDiv = document.createElement('div');
tempDiv.innerHTML = embedCode;
const iframe = tempDiv.querySelector('iframe');
container.appendChild(iframe.cloneNode(true));
```

### State Management:
- `isVisible` - Controls modal entrance animation
- `isCalendarLoading` - Shows/hides loading spinner
- `scriptLoadedRef` - Prevents duplicate script loads

## Support

If issues persist after following this guide:

1. **Check GoHighLevel Status**: Verify the calendar service is online
2. **Inspect Embed Code**: Ensure `SERVICE_MENU_EMBED` in App.tsx is valid
3. **Network Issues**: Check firewall/proxy settings
4. **Browser Extensions**: Disable ad blockers, privacy tools
5. **Console Logs**: Share any error messages

## Success Criteria

✅ All 6 buses display in service menu
✅ Individual bus calendars load
✅ Loading spinner shows and disappears
✅ Calendar is fully functional
✅ Modal is responsive on all devices
✅ No JavaScript errors
✅ Smooth user experience

---

**Ready to Test!** Open http://localhost:3000/ and start clicking those booking buttons!
