# Design Variation Prompts for Party On Wheels Website

This document contains detailed prompts for generating design variations of three sections that need visual improvement. Each prompt includes context about the current design, color scheme, and desired aesthetic.

---

## Color Scheme Reference
- **Primary Orange**: `#FF6B00`
- **Bright Green**: `#39FF14` 
- **Dark Background**: `#1A1E28` (gray-900)
- **White**: `#FFFFFF`
- **Gray Accents**: Various shades (gray-50, gray-200, gray-300, gray-400, gray-700, gray-800)

## Typography
- **Headings**: Bebas Neue (bold, uppercase, large)
- **Body**: Sans-serif, clean and modern
- **Uppercase Labels**: Bold, tracking-widest

## Design Aesthetic
- Bold, energetic, party-focused
- Modern, clean layouts
- Gradient accents (orange to green)
- Rounded corners, subtle borders
- Hover effects and transitions
- Dark backgrounds with vibrant accents

---

## PROMPT 1: About Section Statistics Display

### Current Design
The statistics section displays three metrics horizontally:
- "4+" with "Custom Buses" label
- "1000+" with "Parties Hosted" label  
- "100%" with "Local" label

Currently styled as simple text blocks with a border-top separator, displayed in a flex row layout on a dark background (gray-900).

### Design Variation Prompt

```
Create 5-7 alternative design variations for displaying statistics/metrics in a party bus rental website's "About" section. 

CONTEXT:
- Brand: "Party On Wheels" - a high-energy party bus rental service in South Louisiana
- Section background: Dark gray (#1A1E28)
- Text color: White primary, gray-300 for secondary text
- Accent colors: Orange (#FF6B00) and Bright Green (#39FF14)
- Typography: Bebas Neue for large numbers, sans-serif for labels

METRICS TO DISPLAY:
1. "4+" - "Custom Buses"
2. "1000+" - "Parties Hosted"
3. "100%" - "Local"

REQUIREMENTS:
- Must maintain the three metrics in a horizontal layout (or creative grid)
- Should feel energetic and party-focused, not corporate
- Use the orange/green color scheme creatively
- Consider: icon integration, animated counters, gradient backgrounds, card-based layouts, badge styles, or creative typography treatments
- Ensure mobile responsiveness
- Keep text readable and hierarchy clear
- Avoid overly corporate or minimalist styles - this is a FUN brand

DESIGN DIRECTIONS TO EXPLORE:
- Card-based with gradient borders or backgrounds
- Icon integration (bus icons, party icons, etc.)
- Animated number counters
- Badge/pill styles with colored backgrounds
- Creative typography with gradient text effects
- Overlapping or layered elements
- Subtle background patterns or shapes
- Hover effects that reveal more information

Provide HTML/CSS code examples for each variation that can be easily integrated into a React component.
```

---

## PROMPT 2: Testimonials/Reviews Section Cards

### Current Design
Three review cards displayed in a grid:
- Dark gray cards (gray-800) with gray-700 borders
- Orange star ratings
- White quote text
- Reviewer name in white
- Event type in bright green
- Simple border hover effect (changes to orange)

### Design Variation Prompt

```
Create 5-7 alternative design variations for customer testimonial/review cards in a party bus rental website's "Rave Reviews" section.

CONTEXT:
- Brand: "Party On Wheels" - energetic party bus rental service
- Section background: Dark gray (#1A1E28)
- Accent colors: Orange (#FF6B00) and Bright Green (#39FF14)
- Typography: Bebas Neue for headings, clean sans-serif for body
- Current layout: 3-column grid of cards

REVIEW CARD CONTENT:
- 5 orange stars (rating)
- Quote text (testimonial)
- Reviewer name
- Event type (e.g., "BACHELORETTE PARTY", "SAINTS GAME DAY")

CURRENT ISSUES:
- Cards feel too simple/plain
- Border-only hover effect is subtle
- Lacks visual interest and energy matching the brand

REQUIREMENTS:
- Must display all review information clearly
- Should feel energetic and fun, matching party bus brand
- Use orange/green accents creatively
- Consider: gradient backgrounds, creative borders, quote marks, profile elements, background patterns, or card elevation/shadow effects
- Ensure mobile responsiveness (stacks vertically on mobile)
- Maintain readability
- Add visual interest without overwhelming content

DESIGN DIRECTIONS TO EXPLORE:
- Gradient card backgrounds (subtle orange/green)
- Creative quote mark treatments (large decorative quotes)
- Profile avatars or initials
- Card elevation with shadows and hover lift effects
- Diagonal or creative border treatments
- Background pattern overlays (subtle party-themed)
- Icon integration (event type icons)
- Animated entrance effects
- Split color schemes (orange top, green bottom, etc.)
- Creative typography treatments for names/events

Provide HTML/CSS code examples for each variation that can be easily integrated into a React component with hover states and transitions.
```

---

## PROMPT 3: FAQ "Still Have Questions?" Call-to-Action Banner

### Current Design
A gradient banner (orange to green) with:
- White text heading "STILL HAVE QUESTIONS?"
- Subtext: "We're here to help! Give us a call or send us a message."
- White button with orange text: "Call Us: 985-333-9762"
- Rounded corners, centered content

### Design Variation Prompt

```
Create 5-7 alternative design variations for a call-to-action banner in a FAQ section that encourages users to contact the business.

CONTEXT:
- Brand: "Party On Wheels" - party bus rental service
- Section background: White (FAQ section is on white background)
- Accent colors: Orange (#FF6B00) and Bright Green (#39FF14)
- Typography: Bebas Neue for headings (bold, uppercase)
- Current design: Full-width gradient banner (orange to green) with centered text and button

CONTENT TO DISPLAY:
- Heading: "STILL HAVE QUESTIONS?"
- Subtext: "We're here to help! Give us a call or send us a message."
- CTA Button: "Call Us: 985-333-9762" (phone number)

CURRENT ISSUES:
- Gradient banner feels generic/common
- Button styling is basic (white button with orange text)
- Lacks visual interest and brand personality

REQUIREMENTS:
- Must include heading, subtext, and call button
- Should feel energetic and inviting, matching party bus brand
- Use orange/green color scheme creatively
- Consider: split designs, creative button styles, icon integration, background patterns, or unique layouts
- Ensure mobile responsiveness
- Button should be prominent and clickable
- Avoid generic "contact us" designs - make it FUN and memorable

DESIGN DIRECTIONS TO EXPLORE:
- Split-screen design (orange left, green right with content overlay)
- Creative button styles (outlined, gradient, with icons, animated)
- Phone icon integration (large decorative or inline)
- Background pattern overlays (subtle party-themed patterns)
- Card-based design instead of full banner
- Asymmetric layouts
- Creative typography treatments
- Multiple CTA options (call button + message button)
- Animated elements (pulsing phone icon, gradient animation)
- Creative border treatments or shapes

Provide HTML/CSS code examples for each variation that can be easily integrated into a React component with proper link/button functionality.
```

---

## Usage Instructions

1. **Copy the relevant prompt** for the section you want to redesign
2. **Paste into Claude** (or your preferred AI design tool)
3. **Review the generated variations** and select your favorites
4. **Request code implementation** if needed, or use the provided code examples
5. **Test variations** in your React components before finalizing

## Integration Notes

- All variations should use Tailwind CSS classes (current tech stack)
- Components are React functional components with TypeScript
- Maintain existing responsive breakpoints (sm:, md:, lg:)
- Preserve accessibility (semantic HTML, proper contrast ratios)
- Keep performance in mind (minimal animations, optimized assets)

---

## Additional Design Principles to Maintain

- **Bold & Energetic**: Match the party bus brand personality
- **Clean & Modern**: Don't sacrifice readability for style
- **Mobile-First**: Ensure all designs work beautifully on mobile
- **Consistent Branding**: Orange and green should be used thoughtfully, not overwhelming
- **Performance**: Avoid heavy animations or large assets
- **Accessibility**: Maintain proper contrast and semantic HTML

