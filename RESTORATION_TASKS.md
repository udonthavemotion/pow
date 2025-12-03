# Feature Restoration Task List

This document contains detailed tasks to restore features from a previous version of the website, based on the provided screenshots. Each task includes a detailed prompt for implementation.

---

## Task 1: Update Testimonials Section - Change "Rave Reviews" to "WHO DAT SAYS"

**File to Modify:** `components/Testimonials.tsx`

**Current State:**
- Section header says "What People Say" (small text)
- Main heading says "Rave Reviews"
- Uses orange accent color (#FF6B00)

**Target State:**
- Keep "What People Say" as the small label text (in green #39FF14)
- Change main heading from "Rave Reviews" to "WHO DAT SAYS"
- Apply a gradient effect to "WHO DAT SAYS" text: orange-to-green gradient (left to right, #FF6B00 to #39FF14)
- Add a gradient underline below the heading: orange-to-green gradient (#FF6B00 to #39FF14)
- Maintain the existing testimonial card design with glassmorphism effect
- Keep testimonial cards with gradient quotation mark icons (orange to green)
- Keep 5-star ratings in orange (#FF6B00)
- Keep reviewer avatars with gradient backgrounds (orange to green)
- Keep event type labels in green (#39FF14)

**Implementation Prompt:**
```
Update the Testimonials component to change the main heading from "Rave Reviews" to "WHO DAT SAYS" with an orange-to-green gradient effect (#FF6B00 to #39FF14). The text should use the Bebas Neue font (already in use) and be uppercase. Add a gradient underline below the heading that transitions from orange (#FF6B00) on the left to green (#39FF14) on the right. Maintain all existing testimonial card styling, including the glassmorphism effect, gradient quotation mark icons (orange to green), star ratings in orange (#FF6B00), and reviewer information. The small "What People Say" label should remain in green (#39FF14) above the main heading. Event type labels should use green (#39FF14).
```

---

## Task 2: Create Enhanced "Still Have Questions" CTA Section

**File to Create/Modify:** `components/ContactCTA.tsx` (new component) or modify `components/FAQ.tsx`

**Current State:**
- FAQ section has a simple gradient CTA at the bottom (orange to green gradient)
- Single column design with centered content

**Target State:**
- Create a split-section design with two columns:
  - **Left Column (Dark Background - black or dark gray):**
    - Orange circular icon with green outline (telephone receiver icon) in top-left
    - Large white text: "STILL HAVE QUESTIONS?"
    - Smaller white text below: "We're here to help! Give us a call or send us a message."
  - **Right Column (White Background):**
    - Small orange text at top: "READY TO PARTY?" (#FF6B00)
    - Large black text: "LET'S TALK!"
    - Gradient underline: orange-to-green horizontal line (#FF6B00 to #39FF14)
    - Large gradient button (orange to green, #FF6B00 to #39FF14) with:
      - White telephone icon on the left
      - White text: "985-333-9762"
    - Below button: Two small text items separated by vertical divider:
      - Left: Orange circle icon + "Available 24/7" (in orange #FF6B00)
      - Right: Grey speech bubble icon + "Text Us Too!" (in grey)

**Implementation Prompt:**
```
Create a new ContactCTA component that displays a prominent two-column call-to-action section. The left column should have a dark background (black or dark gray, matching the current footer style) with an orange circular telephone icon with green outline in the top-left, large white "STILL HAVE QUESTIONS?" heading, and descriptive white text below. The right column should have a white background with a small orange "READY TO PARTY?" label (#FF6B00), large black "LET'S TALK!" heading, an orange-to-green gradient underline (#FF6B00 to #39FF14), and a prominent gradient button (orange to green, #FF6B00 to #39FF14) containing a white phone icon and the phone number "985-333-9762". Below the button, add two small text items: "Available 24/7" with an orange circle icon (#FF6B00) and "Text Us Too!" with a grey speech bubble icon, separated by a vertical divider. The section should be responsive, stacking on mobile devices. Place this component after the FAQ section in App.tsx.
```

---

## Task 3: Create "Ready to Party?" Orange Banner CTA Section

**File to Create:** `components/ReadyToPartyBanner.tsx`

**Target State:**
- Full-width orange gradient background (darker orange at edges, brighter in center)
- Centered content with:
  - Small white text at top: "LIMITED AVAILABILITY FOR MARDI GRAS" with bright green dot before it
  - Large white heading: "READY TO" (white)
  - Large green heading: "PARTY?" (bright green #39FF14 with subtle 3D/shadow effect)
  - Two-line white descriptive text:
    - "Book your ride now and let the good times roll."
    - "Your unforgettable night starts here."
  - Large white button with rounded corners:
    - Orange text: "BOOK YOUR RIDE NOW"
    - Orange right-pointing arrow icon
  - Three feature icons at bottom (horizontal):
    - Green checkmark + "Instant Confirmation" (white text)
    - Green phone icon + "24/7 Support" (white text)
    - Green padlock icon + "Secure Booking" (white text)

**Implementation Prompt:**
```
Create a new ReadyToPartyBanner component that displays a full-width orange gradient banner section. The background should be an orange gradient that's darker at the edges and brighter in the center. Center all content vertically and horizontally. Include a small white text label at the top saying "LIMITED AVAILABILITY FOR MARDI GRAS" with a bright green circular dot before it. Display a large two-line heading: "READY TO" in white and "PARTY?" in bright green (#39FF14) with a subtle shadow/3D effect. Add two lines of white descriptive text below. Include a large white button with rounded corners containing orange text "BOOK YOUR RIDE NOW" and an orange right-pointing arrow icon. At the bottom, display three horizontal feature items with green icons (checkmark, phone, padlock) and white text labels. The button should trigger the booking modal when clicked. Make this section responsive and place it strategically in the page flow (suggest after Events or before Testimonials).
```

---

## Task 4: Enhance Footer Design

**File to Modify:** `components/Footer.tsx`

**Current State:**
- Black background footer
- Three-column layout (About, Quick Links, Contact Us)
- Simple border separator

**Target State:**
- Dark background with subtle gradient (black to dark gray, or black with orange/green accent glows)
- Maintain three-column layout but enhance styling:
  - **Left Column:** Keep logo, description, and Facebook link
  - **Middle Column:** "QUICK LINKS" heading in bold white uppercase
  - **Right Column:** "CONTACT US" heading in bold white uppercase
- Add a thin horizontal separator line (orange or green accent) between main content and bottom footer bar
- Bottom footer bar should display:
  - Combined contact info in one line: "Serving All Of Southern Louisiana - +1 985-333-9762 - partyonwheelspow@gmail.com"
  - Website development credit: "Website Developed By ZeroMotion Marketing © 2025 Party On Wheels Inc."
- Add subtle visual enhancements (glows, better spacing, hover effects with orange/green accents)

**Implementation Prompt:**
```
Enhance the Footer component with a dark background (black or subtle dark gradient) that maintains the current aesthetic. Maintain the three-column layout but improve the visual hierarchy. Ensure all headings ("QUICK LINKS", "CONTACT US") are in bold white uppercase. Add a thin horizontal separator line with orange or green accent (#FF6B00 or #39FF14) between the main three-column content and the bottom footer bar. The bottom footer bar should display the combined contact information in a single line, followed by the website development credit. Add subtle visual enhancements like better spacing, hover effects with orange/green brand colors, and ensure the design creates a more premium look while maintaining readability. Keep all existing functionality and links intact, maintaining the current color scheme (orange #FF6B00 and green #39FF14 for accents).
```

---

## Task 5: Add Additional CTA Sections Throughout Page

**Files to Modify:** Various component files or create new `components/CTASection.tsx`

**Target State:**
- Add strategic CTA sections between major content sections
- Each CTA should be minimal but effective:
  - Simple gradient backgrounds (orange to green, #FF6B00 to #39FF14)
  - Clear call-to-action text
  - Phone number prominently displayed
  - "Book Now" or "Call Us" buttons

**Implementation Prompt:**
```
Review the page flow and add 1-2 additional minimal CTA sections between major content sections (e.g., after BusFleet, after HowItWorks). These CTAs should be simple, not overwhelming, and focus on getting users to contact or book. Use gradient backgrounds (orange-to-green, #FF6B00 to #39FF14) that match the brand colors. Include clear, concise text like "Ready to book your ride?" or "Questions? We're here to help!" with a prominent phone number display and a call-to-action button. Keep these sections compact and visually appealing without adding unnecessary information. Ensure they're responsive and maintain the existing design aesthetic with orange and green brand colors.
```

---

## Task 6: Temporarily Remove Orange Juice Bus

**File to Modify:** `constants.ts`

**Current State:**
- BUSES array includes Orange Juice bus (id: 'b1') as the first bus
- Orange Juice is referenced throughout the site

**Target State:**
- Comment out or remove the Orange Juice bus from the BUSES array
- Ensure the site still functions correctly with only Green Light and Kuttin Loose buses
- Add a comment noting this is temporary as the bus has been sold

**Implementation Prompt:**
```
Temporarily remove the Orange Juice bus from the BUSES array in constants.ts. Comment out the entire Orange Juice bus object (id: 'b1') and add a comment above it stating "TEMPORARILY REMOVED: Orange Juice bus has been sold. Remove this comment when ready to add replacement bus." Ensure that the remaining buses (Green Light and Kuttin Loose) still display correctly in the BusFleet component and that all functionality continues to work properly. The bus selection should now only show Green Light and Kuttin Loose options.
```

---

## Task 7: Update App.tsx to Include New Components

**File to Modify:** `App.tsx`

**Implementation Prompt:**
```
Update App.tsx to import and include the new components in the correct order:
1. Import ContactCTA component
2. Import ReadyToPartyBanner component
3. Place ReadyToPartyBanner after Events section (or before Testimonials)
4. Place ContactCTA after FAQ section (before Footer)
5. Ensure all components receive necessary props (onBookNow handler for booking modals)
6. Maintain smooth scrolling and navigation functionality
```

---

## Implementation Order Recommendation

1. **Task 6** - Remove Orange Juice bus (quick fix, prevents showing sold bus)
2. **Task 1** - Update Testimonials (quickest, establishes pattern)
3. **Task 4** - Enhance Footer (independent, can be done in parallel)
4. **Task 2** - Create ContactCTA component (more complex, needs design work)
5. **Task 3** - Create ReadyToPartyBanner component (standalone, can be done independently)
6. **Task 5** - Add additional CTAs (requires reviewing page flow)
7. **Task 7** - Update App.tsx (final integration step)

---

## Design Notes

- **Color Palette (Current Brand Colors):**
  - Orange: #FF6B00 (primary brand color - use for primary CTAs, accents, buttons)
  - Green: #39FF14 (secondary brand color - use for secondary accents, highlights)
  - Black: #000000 (backgrounds, text)
  - White: #FFFFFF (text on dark backgrounds)
  - Gray shades: Use for subtle backgrounds and borders
  - **Note:** Do NOT use purple - stick to orange and green gradients only

- **Typography:**
  - Headings: Bebas Neue font (already in use)
  - Body text: Existing sans-serif font
  - Maintain uppercase for headings and CTAs

- **Responsive Design:**
  - All new sections must be mobile-responsive
  - Stack columns on mobile devices
  - Maintain touch-friendly button sizes (min-height: 44px or 56px)
  - Ensure text remains readable on all screen sizes

- **Accessibility:**
  - Maintain proper heading hierarchy
  - Ensure sufficient color contrast
  - Add proper ARIA labels where needed
  - Keep interactive elements keyboard accessible

---

## Testing Checklist

After implementing each task:
- [ ] Visual design matches screenshots
- [ ] Responsive on mobile, tablet, desktop
- [ ] All links and buttons work correctly
- [ ] Phone number links trigger phone dialer
- [ ] Booking modals open correctly
- [ ] Smooth scrolling navigation works
- [ ] No console errors
- [ ] Colors match brand palette
- [ ] Text is readable and properly sized
- [ ] Gradients render correctly
- [ ] Icons display properly

