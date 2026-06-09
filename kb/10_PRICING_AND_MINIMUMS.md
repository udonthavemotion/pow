# Pricing & Minimums — Source of Truth

This is the **only place** the agent should pull pricing from. If a number doesn't appear here, the agent does not quote it.

A machine-readable version of this same data is also in `pricing_table.csv` — that file is what the agent's RAG retrieval will hit when a customer asks a pricing question.

---

## Fleet Pricing Table (Per-Hour Rates)

| Bus | Hourly Rate | Minimum Hours | Capacity | Travel Range |
| --- | --- | --- | --- | --- |
| **Orange Juice** | **$135 / hour** | None | 40 | Wide |
| **Kuttin Loose** | **$125 / hour** | None | 40 | Wide |
| **Rackz** | **$120 / hour** | 3 hours | 40 | Local only |
| **Cotton Candy** | **$110 / hour** | None | 40 | Wide |
| **Skittles** | **$100 / hour** | 3 hours | 40 | Local only — *currently offline* |

> **"Wide" travel range** = Houma, Thibodaux, New Orleans, Baton Rouge, Lafayette, anywhere reasonable in South Louisiana.
> **"Local only"** = Houma, Thibodaux, and within ~45 minutes of Houma.

---

## What's Included In The Hourly Rate

Every booking includes:
- The bus itself
- A licensed, sober driver
- Fuel (within the service area)
- Climate control (AC + heat)
- Premium sound system access
- LED light show
- Ice and water onboard (most buses)
- All standard insurance

---

## What's NOT Included

- **Alcohol** — bring your own. POW does not provide or sell alcohol.
- **Food** — bring your own.
- **Decorations** — bring your own. (Driver can help set up basic balloons / banners on arrival.)
- **Out-of-area fuel surcharges** — for trips outside the standard service area, additional travel hours may be billed. Confirmed at booking.
- **Tip** — driver gratuity is appreciated but not required. Customer's call.
- **Cleaning fee for excessive mess** — see `13_POLICIES_RULES_SAFETY.md`.

---

## Quick Totals Cheat Sheet

### Orange Juice — $135/hr
- 3 hrs → $405
- 4 hrs → $540
- 5 hrs → $675
- 6 hrs → $810
- 8 hrs → $1,080
- 10 hrs → $1,350

### Kuttin Loose — $125/hr
- 3 hrs → $375
- 4 hrs → $500
- 5 hrs → $625
- 6 hrs → $750
- 8 hrs → $1,000

### Rackz — $120/hr (3-hr minimum)
- 3 hrs → $360 (min)
- 4 hrs → $480
- 5 hrs → $600
- 6 hrs → $720

### Cotton Candy — $110/hr
- 3 hrs → $330
- 4 hrs → $440
- 5 hrs → $550
- 6 hrs → $660
- 8 hrs → $880

### Skittles — $100/hr (3-hr minimum, currently offline)
- 3 hrs → $300 (min)
- 4 hrs → $400
- 5 hrs → $500
- 6 hrs → $600

---

## Minimum Hours — Why Some Buses Have Them

**Buses WITH a minimum:** Rackz (3 hrs) and Skittles (3 hrs). These are our two
**local-only** buses with the lowest hourly rates. The minimum keeps the per-hour
rate low and the operation viable for short local runs. The trade-off: they don't
travel outside the Houma area.

**Buses WITHOUT a minimum:** Orange Juice, Kuttin Loose, Cotton Candy. Book by the
hour with no floor. These also travel wider.

If a customer wants a sub-3-hour booking, recommend Cotton Candy ($110/hr, no minimum) — it's the closest match in price to the local-only buses.

---

## Deposit & Payment

- **Deposit:** Required to lock in the date. Amount and timing handled at the booking calendar checkout — the agent should NOT quote deposit amounts. The calendar shows the customer the exact figure.
- **Balance:** Due before the event. Method confirmed at booking.
- **Card on file:** May be required for incidentals — calendar will surface this.
- **No cash-only deals.** All bookings go through the official calendar / invoice system.

The agent does not collect cards, deposits, or payment info in chat. Direct the
customer to the booking calendar for their bus — payment happens there.

---

## Discounts, Promo Codes, & Negotiation

- The agent does **not have authority to discount**.
- If a customer asks for a discount, the standard response is:
  > "Posted rate is the rate — Deric keeps it clean so the customer always knows what they're paying. I can have him reach out directly if you want to talk specifics — what's the best number?"
- If a customer mentions a returning-customer or repeat-booking discount, **hand off to Deric** — those decisions are case-by-case.
- Holiday / Mardi Gras week pricing: same hourly rate, but availability is the constraint. Book early.

---

## Mardi Gras Pricing

Mardi Gras pricing is the **same hourly rate** as the rest of the year. There is no
"holiday surcharge." The catch is **availability** — Mardi Gras week books up fast,
and minimums on parade days may apply per bus / per booking. Customers should book
**weeks in advance** for parade-day rides.

---

## Outside-Area Travel — How It's Quoted

For wide-travel jobs going to New Orleans, Baton Rouge, Lafayette, or further:
- Hourly clock typically starts when the driver arrives at the pickup location.
- Long-distance jobs may include additional travel-time hours.
- The exact quote depends on the route — the agent should send the customer to the
  booking calendar and let Deric finalize the quote there.

---

## What The Agent Should NEVER Do

1. **Quote a price not in this document.** If a customer asks about something not listed (a different bus, a different package, a different service), hand off.
2. **Round prices.** $135/hr stays $135/hr. Don't quote "about $140."
3. **Offer a discount without Deric's approval.**
4. **Quote a "total package" price that bundles multiple buses or services** — hand off to Deric.
5. **Quote without confirming hours.** Always confirm "for how many hours?" before giving a total.

---

## The Pricing Pitch (How To Quote)

The clean format for quoting a customer is:

> "[Bus name] is **$[rate]/hr**, fits **40**, [minimum if applicable], driver and fuel included. For **[X] hours** that's **$[total]**. Want me to send the booking link?"

Example:
> "Orange Juice is $135/hr, fits 40, no minimum, driver and fuel included. For 5 hours that's $675. Want me to send the booking link?"

Clear, fast, no junk math, no hidden fees.
