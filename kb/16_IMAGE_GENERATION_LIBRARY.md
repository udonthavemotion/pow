# Image Sending & Generation Library

GoHighLevel's Conversation AI **cannot natively generate AI images and inline them into a reply** (verified as of June 2026 — the feature request is open but not shipped). The reliable way to send customers pictures of POW buses is the **pre-hosted photo + workflow MMS** pattern. Optionally, you can wire in DALL-E or Stable Diffusion via a custom webhook for "show me the bus at my event" scene generation — but for a fleet business with 5 buses, that's usually overkill.

This document covers both: the **primary pattern (pre-hosted photos)** that should ship now, and the **optional generative path** for later.

---

## Primary Pattern: Pre-Hosted Photo Library + Workflow MMS

This is how the agent will actually send pictures 99% of the time.

### Setup (One-Time, By Deric / Operator)

1. **Upload bus photos to GHL Media Library** under **Settings → Media** in the subaccount. Use these exact filenames so the agent can reference them:

   - `Orange Juice — hero.jpg` (main exterior photo)
   - `Orange Juice — back-deck.jpg`
   - `Orange Juice — interior.jpg`
   - `Orange Juice — gallery-1.jpg` through `Orange Juice — gallery-12.jpg`
   - `Kuttin Loose — hero.jpg`
   - `Kuttin Loose — interior.jpg`
   - `Kuttin Loose — gallery-1.jpg` through `Kuttin Loose — gallery-6.jpg`
   - `Cotton Candy — hero.jpg`
   - `Cotton Candy — interior.jpg`
   - `Rackz — hero.jpg`
   - `Rackz — interior.jpg`
   - `Skittles — hero.jpg`
   - `Skittles — interior.jpg`
   - `Skittles — pole.jpg`

2. **Grab the public URL** for each uploaded file from the Media Library (right-click → Copy Link).

3. **Create a Custom Value** per bus per shot — naming convention: `media_orange_juice_hero`, `media_kuttin_loose_interior`, etc. Set the value to the public URL. (Custom Values are at **Settings → Custom Values**.)

4. **Build a workflow trigger** in **Automation → Workflows**:
   - Trigger: Inbound message contains a media-request tag (e.g., agent added tag `needs_photo_orange_juice_hero`)
   - Action: Send SMS / MMS with the matching `{{custom_values.media_orange_juice_hero}}` URL attached.

5. **In the agent prompt**, give the agent permission to add the appropriate tag when a customer asks for a photo. (Already in `01_AGENT_SYSTEM_PROMPT.md`.)

### How The Agent Decides Which Photo To Send

Use this routing table:

| Customer Says | Send |
| --- | --- |
| "Show me Orange Juice" / "Send a pic of OJ" / "What's the orange bus look like?" | `Orange Juice — hero.jpg` |
| "What's the inside look like?" (Orange Juice context) | `Orange Juice — interior.jpg` |
| "Show me the back deck" | `Orange Juice — back-deck.jpg` |
| "Show me Kuttin Loose" | `Kuttin Loose — hero.jpg` |
| "What's it look like inside Kuttin Loose?" | `Kuttin Loose — interior.jpg` |
| "Show me Cotton Candy" / "the pink one" | `Cotton Candy — hero.jpg` |
| "Inside the Cotton Candy?" | `Cotton Candy — interior.jpg` |
| "Show me Rackz" / "the VIP one" | `Rackz — hero.jpg` |
| "Show me Skittles" / "the pole bus" | `Skittles — hero.jpg` + `Skittles — pole.jpg` |
| "Send me your whole lineup" / "all the buses" | All 5 hero shots, one message each |

### How To Phrase It When Sending

Send **1–2 photos per message** with a one-line caption:

> "Here's Orange Juice — the open-air back deck is the move for parades. [photo]"

> "Cotton Candy interior — built for the photo dump. [photo]"

Never send all 12 gallery photos at once. That's spam. If a customer wants more, point them to the website gallery: **partyonwheelspow.com**.

---

## What The Agent Says When It Can't Find The Right Shot

If a customer asks for a specific angle the agent doesn't have (e.g., "show me the engine bay" — we don't have that):

> "Don't have a shot of that one — but I can get Deric to text one fresh. Want me to set that up?"

(Tag conversation `needs_owner_photo`.)

---

## Optional: AI Image Generation (Advanced Setup)

For customers who ask things like:
- "Show me what Cotton Candy would look like at the Quarter at night"
- "What would Orange Juice look like at a Mardi Gras parade"
- "Generate me a scene of Rackz outside a bar"

You **can** wire up DALL-E or Stable Diffusion via a Custom Webhook. **For 95% of bookings this is unnecessary** — most customers just want to see the real bus. But here's the pattern if you want it:

### Generative Pattern (Optional)

1. Build a workflow with a **Custom Webhook** action that hits OpenAI's image API (`https://api.openai.com/v1/images/generations`) or a Stable Diffusion endpoint.
2. Pass the agent-generated prompt in the body.
3. Capture the returned image URL into a Custom Value.
4. Send SMS / MMS with that URL attached.
5. Cache common scenes (Mardi Gras + Orange Juice, Quarter Night + Cotton Candy, etc.) to avoid re-generating.

### Pre-Built Prompts For Common Scenes

If you set up image generation, use these prompts as the base — they're tuned to produce photo-realistic Party On Wheels scenes:

**Orange Juice + Mardi Gras parade**
> "Photo-realistic image of a bright orange 40-passenger party bus parked on St. Charles Avenue in New Orleans during Mardi Gras, twilight golden hour, an open-air rear deck on the bus with festive lighting, beads on the ground, parade floats in the background, a celebratory crowd, captured with a 35mm lens, vibrant color, Instagram-worthy."

**Cotton Candy + Bachelorette in the Quarter**
> "Photo-realistic image of a pink-and-blue exterior party bus parked outside a French Quarter bar at night, neon signs and string lights overhead, a group of women in matching pastel outfits laughing near the bus door, soft glow, low-light photography style, magazine quality."

**Kuttin Loose + concert ride**
> "Photo-realistic image of a green party bus parked outside a music venue at night with floodlights, LED interior lights visible through tinted windows, a hype crowd outside, atmospheric haze, color-graded cinematic lighting, music festival energy."

**Rackz + local night in Houma**
> "Photo-realistic image of a sleek maroon party bus on a Louisiana small-town main street at sunset, classy and understated lighting, a dressed-up crowd boarding, professional photography style, magazine quality."

**Skittles + dance pole interior**
> "Photo-realistic interior of a party bus with a chrome dance pole at center, multi-color LED panel lighting in pink, purple, green, and blue, plush leather seating along both walls, club atmosphere, low-angle wide shot, party in progress."

### Generation Guardrails

If you do enable image generation:
- **Always show the real photo first.** If a customer asks "what's it look like?", send the actual bus photo first. Offer generated scenes only when they ask for a scene specifically.
- **Cache the top 10 scenes.** Don't regenerate the same Mardi Gras shot every time.
- **Watermark generated images** with a small "AI-generated illustration" tag — customers should not confuse a generated render for the real bus.
- **Monitor cost.** OpenAI image API costs add up. Set a per-conversation cap.

---

## Recommendation For Deric

**Ship the pre-hosted photo library first.** That alone makes the agent feel
high-end — most customers ask "got pics?" and expect a real photo of the real bus.
You already have the photos (they're in the `public/images/buses/` folder on the
website). Upload them to GHL Media Library, wire up the Custom Value pattern, and
the agent can send them instantly.

The generative AI path is an upgrade for later — only worth setting up if customers
keep asking for "show me what it'd look like at [my event]." If that's a rare ask,
skip it.

---

## Quick Setup Checklist

- [ ] Upload all hero / interior / feature shots to GHL Media Library
- [ ] Create Custom Values for each photo URL (`media_<bus>_<shot>`)
- [ ] Build the "Send Photo" workflow that triggers off conversation tags
- [ ] Test: "Show me Orange Juice" → agent should send `Orange Juice — hero.jpg`
- [ ] Test: "Send me your whole lineup" → agent should send all 5 hero shots
- [ ] (Optional) Set up DALL-E webhook + caching for scene generation
- [ ] (Optional) Pre-generate the top 5 scene shots and cache them
