# Party On Wheels — AI Agent Knowledge Base
## Owner Upload Guide

Hi Deric — this folder is your AI agent's "brain." Once it's uploaded to GoHighLevel, your AI will answer customers about your buses better than any other party bus company in Louisiana.

**Read this whole file before uploading anything.** It's short.

---

## What You Actually Upload To GoHighLevel

Look inside the `upload/` subfolder. **Everything inside `upload/` is what goes into GHL.** That's it. 23 files:

- 20 DOCX files (the knowledge documents — Word format because GoHighLevel's Knowledge Base does not accept Markdown)
- 3 CSV files (the pricing table, service-area table, and fleet feature matrix — GHL embeds each row of a CSV individually, so structured data goes way further in CSV form)

**You do NOT upload** the original `.md` files in this folder (kb/), the Python conversion script, or this README. Those are for editing and re-generating.

---

## Two Things You Configure In GHL

### 1. The Agent Persona (paste, don't upload)
Open `01_AGENT_SYSTEM_PROMPT.md`. Copy the entire contents. Paste it into the agent's **Bot Goals** / **Agent Persona** / **Custom Instructions** field. Save.

This is the agent's personality and rules — it does not belong in the Knowledge Base. It belongs in the agent's configuration.

### 2. The Knowledge Base (upload the files)
Everything in `upload/` goes into the Knowledge Base. Instructions below.

---

## Step-By-Step Upload

### Step 1 — Log into GoHighLevel
Go to **app.gohighlevel.com** → switch to the **Party On Wheels** subaccount.

### Step 2 — Open Knowledge Base
Left sidebar → **AI Agents** → **Conversation AI** (or **AI Employee** if you're using the newer product) → **Knowledge Base**.

### Step 3 — Decide On Single KB vs. Multiple KBs (recommended)

You can put all 23 files into one big KB and it'll work fine. But based on how GHL's retrieval engine routes queries, **splitting into 4 smaller KBs delivers noticeably cleaner answers**:

| KB Name | Files To Upload |
| --- | --- |
| **POW Pricing** | `pricing_table.csv`, `10_PRICING_AND_MINIMUMS.docx`, `service_area_table.csv`, `03_SERVICE_AREA_AND_PICKUP.docx` |
| **POW Fleet** | `fleet_features_matrix.csv`, `04_FLEET_OVERVIEW.docx`, `05_BUS_ORANGE_JUICE.docx`, `06_BUS_KUTTIN_LOOSE.docx`, `07_BUS_COTTON_CANDY.docx`, `08_BUS_RACKZ.docx`, `09_BUS_SKITTLES.docx`, `16_IMAGE_GENERATION_LIBRARY.docx` |
| **POW Policies & Booking** | `02_BUSINESS_PROFILE.docx`, `11_BOOKING_PROCESS.docx`, `12_EVENT_TYPES.docx`, `13_POLICIES_RULES_SAFETY.docx`, `17_ESCALATION_AND_HANDOFF.docx` |
| **POW Conversation Playbook** | `14_FAQ_MASTER.docx`, `15_OBJECTION_HANDLING.docx`, `18_TONE_VOICE_PERSONALITY.docx`, `19_GLOSSARY_KEYWORDS_SYNONYMS.docx`, `20_RESPONSE_TEMPLATES.docx`, `21_COMPETITOR_DIFFERENTIATION.docx` |

Then in your agent's **Smart Triggers**, set:
- **Always-On Trigger** → all four KBs (default fallback)
- **Smart Trigger 1** — fires when message contains "price/rate/cost/quote/how much" → **POW Pricing** KB only
- **Smart Trigger 2** — fires when message contains city names or "where/area/come to" → **POW Pricing** KB (which has the service-area CSV) + **POW Fleet** KB
- **Smart Trigger 3** — fires when message contains "show/pic/photo/picture/look like" → **POW Fleet** KB

This makes the agent reach into the right drawer of files first instead of guessing.

> **Don't want to fiddle with Smart Triggers?** One big KB with all 23 files works fine too. The 4-KB split is the optimization, not the requirement.

### Step 4 — Upload The Files
- Inside each KB, click **+ Add Knowledge** → **Upload Document**.
- Drag in the DOCX and CSV files for that KB group.
- Wait for the green checkmark (1–5 minutes per file).

### Step 5 — Paste The Agent Persona
- Open `01_AGENT_SYSTEM_PROMPT.md` in any text editor.
- Copy everything.
- Paste into **AI Agent → Settings → Bot Goals / Agent Persona / Custom Instructions**.
- Save.

### Step 6 — Test In The Retrieval Tester
GHL has a built-in **Knowledge Base Retrieval Tester** — use it before you go live. Type in real customer-style questions:
- "How much for the Orange Juice for 5 hours?"
- "What's your cheapest bus?"
- "Can you pick us up in New Orleans on Saturday?"
- "Show me the Cotton Candy"
- "What's the minimum for Rackz?"
- "We're in Lafayette, can you come?"
- "Is there a dance pole?"
- "Can we bring our own alcohol?"
- "Y'all do bachelorettes?"
- "Are you a real company?"

Confirm the agent's answers match what's in this knowledge base. If anything is off,
edit the source `.md` file in the `kb/` folder, re-run `convert_to_docx.py`, and re-upload.

### Step 7 — Set Up Photo Sending
The agent can't natively generate AI images inside a GHL reply (the feature isn't live yet). The right pattern is:

1. Upload all bus photos to **Settings → Media** in GHL.
2. Create **Custom Values** for each photo URL (`media_orange_juice_hero`, `media_cotton_candy_interior`, etc.).
3. Build a workflow that fires when the agent tags a conversation `needs_photo_<bus>` and sends the matching photo URL as MMS.

Full instructions are in `16_IMAGE_GENERATION_LIBRARY.docx`. Most customers who ask "got pics?" just want to see the real bus — pre-hosted photos solve 99% of cases. Generative AI images are an optional upgrade.

### Step 8 — A2P 10DLC Compliance
Before the agent can send a single text from your subaccount, you need **A2P 10DLC registration**:
- GHL has an **AI-Powered A2P Compliance Validation** tool — it pre-checks your opt-in form, Privacy Policy, and Terms before submission.
- Your existing privacy/TCPA copy (already in your subaccount) covers most of this.
- One-time brand registration (~$4) + campaign registration ($15) — quick approval.

If you don't already have this set up, do it before turning on outbound SMS. The agent can still handle inbound messages without it, but outbound will be blocked.

---

## How To Update Information (When Prices, Buses, Or Policies Change)

1. Open the relevant `.md` file in this `kb/` folder (e.g., `10_PRICING_AND_MINIMUMS.md` for a rate change).
2. Edit the line(s) that changed.
3. Run `python3 convert_to_docx.py` from inside the `kb/` folder — that regenerates the DOCX files in `upload/`.
4. Re-upload the changed file to GHL (the new version replaces the old).
5. Test the change in the Retrieval Tester before going live.

If a price changes in `pricing_table.csv`, edit the CSV directly and re-upload it.

---

## What Changes Most Often (Keep These Files Fresh)

- **`10_PRICING_AND_MINIMUMS.md` + `pricing_table.csv`** — anytime a rate or minimum changes
- **`03_SERVICE_AREA_AND_PICKUP.md` + `service_area_table.csv`** — if you stop serving an area or add one
- **`04_FLEET_OVERVIEW.md`** + the individual bus file (`05`–`09`) — if a bus goes offline or comes back
- **`09_BUS_SKITTLES.md`** — flip the "currently offline" line when Skittles comes back

---

## The 5 Pitfalls To Avoid (Lessons From Other GHL Setups)

1. **Hallucinated pricing** — agent makes up a number. **Fix:** the system prompt already locks the agent down to only quote from the KB. If a customer asks about something not in the KB, the agent hands off to you.
2. **Wrong service area answers** — agent quotes Rackz for a New Orleans customer. **Fix:** the service-area CSV, the system prompt, and three separate doc sections all reinforce that Rackz and Skittles are local only.
3. **Pretending to be a human** — if asked, the agent says it's an AI assistant. Period. Tested in the persona.
4. **Going silent on complaints** — the system prompt routes any complaint / refund / legal mention to a Human Handover trigger that pings you immediately.
5. **Drift between the website and the KB** — anytime you update prices on the website, also update the KB. They should never disagree.

---

## Two Rules That Matter Most

1. **The KB is the source of truth.** The agent only quotes prices, minimums, and policies that are in these files. If something isn't here, it doesn't exist to the agent.

2. **Rackz and Skittles are LOCAL ONLY (Houma / Thibodaux / surrounding parishes).** These are your two buses with hourly minimums. If a customer in Baton Rouge or New Orleans asks for either, the agent redirects to Orange Juice, Kuttin Loose, or Cotton Candy.

---

## File Map (Everything In This Folder)

```
kb/
├── 00_README_FOR_OWNER.md           ← this file (do not upload)
├── 01_AGENT_SYSTEM_PROMPT.md        ← paste into Agent Persona (not the KB)
├── 02_BUSINESS_PROFILE.md           ← source markdown (edit these)
├── 03_SERVICE_AREA_AND_PICKUP.md
├── 04_FLEET_OVERVIEW.md
├── 05_BUS_ORANGE_JUICE.md
├── 06_BUS_KUTTIN_LOOSE.md
├── 07_BUS_COTTON_CANDY.md
├── 08_BUS_RACKZ.md
├── 09_BUS_SKITTLES.md
├── 10_PRICING_AND_MINIMUMS.md
├── 11_BOOKING_PROCESS.md
├── 12_EVENT_TYPES.md
├── 13_POLICIES_RULES_SAFETY.md
├── 14_FAQ_MASTER.md
├── 15_OBJECTION_HANDLING.md
├── 16_IMAGE_GENERATION_LIBRARY.md
├── 17_ESCALATION_AND_HANDOFF.md
├── 18_TONE_VOICE_PERSONALITY.md
├── 19_GLOSSARY_KEYWORDS_SYNONYMS.md
├── 20_RESPONSE_TEMPLATES.md
├── 21_COMPETITOR_DIFFERENTIATION.md
├── pricing_table.csv                ← structured pricing data (uploaded as-is)
├── service_area_table.csv           ← city/zip eligibility (uploaded as-is)
├── fleet_features_matrix.csv        ← per-bus feature matrix (uploaded as-is)
├── convert_to_docx.py               ← runs the markdown → DOCX conversion
└── upload/                          ← THIS is what you upload to GHL
    ├── 02_BUSINESS_PROFILE.docx
    ├── 03_SERVICE_AREA_AND_PICKUP.docx
    ├── ... (all 20 DOCX files)
    ├── pricing_table.csv
    ├── service_area_table.csv
    └── fleet_features_matrix.csv
```

---

## When You're Done Setting Up

You should have:
- ✅ All 23 files in `upload/` uploaded to GHL (one big KB or four scoped KBs)
- ✅ `01_AGENT_SYSTEM_PROMPT.md` contents pasted into the agent's persona field
- ✅ Hero photos of each bus uploaded to GHL Media Library
- ✅ A workflow that sends bus photos via MMS when the agent tags a conversation
- ✅ A2P 10DLC registered and approved
- ✅ Smart Triggers configured (or a single KB if you skipped the optimization)
- ✅ Human Handover Action wired to your inbox / phone
- ✅ Tested 10+ real customer questions in the Retrieval Tester

Once that's all green, flip the agent on and let it work.

---

## Quick Test Phrases After You Go Live

Send these from a personal phone (not your business line) to confirm everything's wired:

1. "How much for the Orange Juice?" → should quote $135/hr
2. "What's the minimum for Rackz?" → should say 3 hours, local-only
3. "Can the Cotton Candy come to Baton Rouge?" → should say yes, wide-travel
4. "Can Rackz come to New Orleans?" → should say no, redirect to wide-travel buses
5. "Show me Cotton Candy" → should send the photo
6. "I want to book Orange Juice for Saturday for 5 hours" → should send booking link
7. "I want to talk to a human" → should ask for callback number, tag for owner

If any of those fail, troubleshoot. If they all pass, you're live.

---

— End of Owner Guide —
