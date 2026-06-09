# Escalation & Handoff — When To Get Deric Involved

GoHighLevel's Conversation AI has a built-in **Human Handover Action**. You're allowed up to 3 handover triggers per agent. This doc tells the agent exactly when to use them, and what tag / pipeline stage to apply each time.

---

## The 3 Configured Handover Triggers

In GHL agent settings → Smart Triggers → Human Handover, set up exactly these three:

### Trigger 1: `needs_owner_callback`
**When it fires:** Customer asks something the agent can't answer from the knowledge base, OR customer explicitly asks for a human.

**Agent reply right before handoff:**
> "Let me get Deric on this directly — what's the best number for him to call you back, and when's a good time?"

**Pipeline move:** Move contact to **"New Inquiry — Needs Owner Callback"**

---

### Trigger 2: `disputed_or_complaint`
**When it fires:** Customer is upset, frustrated, threatening, or disputing a charge / booking.

**Agent reply right before handoff:**
> "I want Deric to handle this with you personally — I'm flagging your message to him right now. What's the best number to reach you?"

**Pipeline move:** **"URGENT — Owner Response Needed"**

Tag immediately: `disputed`, `escalated`, `priority`.

---

### Trigger 3: `legal_or_safety_concern`
**When it fires:** Customer mentions an injury, accident, legal issue, refund threat, BBB / Yelp threat, or anything involving authorities.

**Agent reply right before handoff:**
> "This needs Deric personally — I'm escalating now. What's the best number to call you?"

**Pipeline move:** **"URGENT — Owner Response Needed"**

Tag: `legal_concern`, `escalated`, `priority`.

---

## Hand-Off Triggers — What To Watch For

| Trigger | Customer Says Something Like | Action |
| --- | --- | --- |
| Owner callback | "Talk to a human" / "Can I speak to the owner" / "Who runs this" | `needs_owner_callback` |
| Owner callback | Asks for a vehicle / feature / service not in KB | `needs_owner_callback` |
| Owner callback | Wants a discount or custom rate | `needs_owner_callback` |
| Owner callback | Wants multi-day or out-of-state trip | `needs_owner_callback` |
| Owner callback | Asks about a feature on a bus not listed in fleet | `needs_owner_callback` |
| Complaint | "I'm pissed" / "This is ridiculous" / profanity | `disputed_or_complaint` |
| Complaint | "I want a refund" / "Cancel my booking" | `disputed_or_complaint` |
| Complaint | "Y'all messed up" / "Driver was late" / "Driver was rude" | `disputed_or_complaint` |
| Legal | "I'm gonna sue" / "Calling my lawyer" / "BBB" / "Better Business Bureau" / "Reporting you" | `legal_or_safety_concern` |
| Legal | Mentions injury, accident, or property damage during a ride | `legal_or_safety_concern` |
| Legal | Police / law enforcement mentioned | `legal_or_safety_concern` |
| Legal | Insurance claim language | `legal_or_safety_concern` |

---

## Soft Triggers — Push For Owner Touch (No Bot Halt)

These aren't full escalations — the agent continues handling — but add a tag for Deric to see:

- **High-value booking** (8+ hours, multiple buses, $1,500+ total) → tag `high_value_lead`
- **VIP or repeat customer mentions a name Deric knows** → tag `vip_lead`
- **Wedding / multi-bus job** → tag `wedding_or_multi_bus`
- **Corporate / business name** → tag `corporate_lead`

Deric can sweep these tags daily and personally reach out to seal the deal.

---

## How To Hand Off Cleanly

The agent should ALWAYS:
1. Acknowledge the customer's need.
2. Tell them Deric will reach back.
3. Ask for the best callback number and time.
4. Set the tag.
5. Stop replying about that issue — let Deric pick it up.

**Don't:**
- Promise a callback time you can't verify ("He'll call you in 5 minutes" — bad).
- Apologize repeatedly. One sincere acknowledgment is enough.
- Try to defend the brand / rebut the complaint. Hand it off.
- Keep replying after the handoff is tagged. Stop and let Deric take it.

---

## When NOT To Hand Off

These are clear cases where the agent should keep going:

- **Customer is just asking a question** → answer from KB, don't escalate.
- **Customer says "let me think"** → say "sounds good," send link, don't escalate.
- **Customer is excited and chatty** → ride the energy, don't hand off.
- **Customer asks for a price** that's in the KB → quote it, don't escalate.
- **Customer asks to see the bus** → send photos, don't escalate.

The agent should be confident handling the 95% of cases. Hand off the 5% that need a human.

---

## Owner Response SLA (Internal Goal)

Deric should aim to:
- **Reply to `needs_owner_callback`** within 24 hours
- **Reply to `disputed_or_complaint`** within 4 hours
- **Reply to `legal_or_safety_concern`** within 1 hour

If Deric isn't on the inbox for a while, set up a fallback notification (SMS to Deric's personal cell or email alert) on the urgent tags so nothing slips.

---

## After A Handoff Is Resolved

Once Deric handles a tagged conversation:
1. Remove the urgency tag (`escalated`, `priority`, `disputed`).
2. Add a resolution tag: `resolved`, `won_back`, `lost`, `refunded`, etc.
3. Move the contact to the appropriate pipeline stage.

This keeps the inbox clean and makes it easy to see what's still open.
