# GoHighLevel / Zero Motion Integration Guide
## Party on Wheels Booking System

This guide walks you through connecting the Party on Wheels website to your GoHighLevel subaccount and calendars.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Calendar/Booking Setup](#calendarbooking-setup)
3. [Mapping Buses to Calendars](#mapping-buses-to-calendars)
4. [Adding Calendar Embeds to the Website](#adding-calendar-embeds-to-the-website)
5. [Pipeline Structure](#pipeline-structure)
6. [Tags and Automation](#tags-and-automation)
7. [Workflows](#workflows)
8. [Testing Checklist](#testing-checklist)

---

## Prerequisites

Before you begin, ensure you have:

- ✅ A GoHighLevel subaccount set up for Party on Wheels
- ✅ Admin access to the subaccount
- ✅ Access to the website codebase (specifically `constants.ts`)
- ✅ Four separate calendars created in GoHighLevel (one for each bus)

---

## Calendar/Booking Setup

### Step 1: Create Four Separate Calendars

In your GoHighLevel subaccount, create four separate booking calendars:

1. **Orange Juice Calendar**
2. **Green Light Calendar**
3. **Bus 3 Calendar** (The White Knight)
4. **Bus 4 Calendar** (Big Blue)

### Step 2: Configure Each Calendar

For each calendar, set up the following:

#### Service Details
- **Service Name**: Use the bus name (e.g., "Orange Juice Party Bus Rental")
- **Duration**: Set based on minimum hours (e.g., 4 hours minimum)
- **Price**: Set the hourly rate (e.g., $150/hour)
- **Description**: Copy the bus description from `constants.ts`

#### Booking Form Fields
Recommended fields to include:
- First Name (required)
- Last Name (required)
- Email (required)
- Phone Number (required)
- Event Type (dropdown: Wedding, Birthday, Bachelor/Bachelorette, Mardi Gras, Saints Game, Other)
- Number of Guests (number field)
- Pickup Location (text area)
- Drop-off Location (text area)
- Special Requests (text area, optional)
- Preferred Date/Time (handled by calendar)

#### Availability Settings
- Set your business hours
- Block out unavailable dates
- Set buffer time between bookings (recommended: 1-2 hours)

---

## Mapping Buses to Calendars

The website has four buses defined in `constants.ts`:

| Bus ID | Bus Name | Calendar Variable |
|--------|----------|-------------------|
| `b1` | Orange Juice | `calendarEmbedCode` |
| `b2` | Green Light | `calendarEmbedCode` |
| `b3` | The White Knight | `calendarEmbedCode` |
| `b4` | Big Blue | `calendarEmbedCode` |

Each bus object has a `calendarEmbedCode` property where you'll paste the GoHighLevel embed code.

---

## Adding Calendar Embeds to the Website

### Step 1: Get Your Calendar Embed Code

For each calendar in GoHighLevel:

1. Navigate to **Settings** → **Calendars** → Select your calendar
2. Click on **"Embed"** or **"Widget"** tab
3. Copy the iframe embed code (it will look something like this):

```html
<iframe src="https://api.leadconnectorhq.com/widget/booking/YOUR_CALENDAR_ID" 
        style="width: 100%; border:none; overflow: hidden;" 
        scrolling="no" 
        id="ghl_calendar_YOUR_ID"></iframe>
```

### Step 2: Update `constants.ts`

Open `constants.ts` and locate each bus object. Find the `calendarEmbedCode` property and replace the placeholder with your actual embed code.

#### Example for Orange Juice:

```typescript
{
  id: 'b1',
  name: 'Orange Juice',
  // ... other properties ...
  
  // ------------------------------------------------------------------
  // PASTE YOUR GOHIGHLEVEL CALENDAR EMBED CODE FOR "ORANGE JUICE" BELOW
  // ------------------------------------------------------------------
  calendarEmbedCode: `<iframe src="https://api.leadconnectorhq.com/widget/booking/YOUR_ORANGE_JUICE_CALENDAR_ID" 
      style="width: 100%; border:none; overflow: hidden;" 
      scrolling="no" 
      id="ghl_calendar_orange"></iframe>`
}
```

#### Example for Green Light:

```typescript
{
  id: 'b2',
  name: 'Green Light',
  // ... other properties ...
  
  calendarEmbedCode: `<iframe src="https://api.leadconnectorhq.com/widget/booking/YOUR_GREEN_LIGHT_CALENDAR_ID" 
      style="width: 100%; border:none; overflow: hidden;" 
      scrolling="no" 
      id="ghl_calendar_green"></iframe>`
}
```

**Important Notes:**
- Keep the backticks (`` ` ``) around the HTML code
- Make sure each calendar has a unique `id` attribute
- The iframe will automatically resize to fit the modal container

### Step 3: Test Each Calendar

After adding each embed code:

1. Save `constants.ts`
2. Run `npm run dev` to start the development server
3. Click "Book This Bus" on each bus card
4. Verify the calendar loads correctly in the modal
5. Test booking a time slot (use a test contact)

---

## Pipeline Structure

### Recommended Pipeline Stages

Create a pipeline in GoHighLevel with these stages:

1. **New Inquiry** (default stage)
   - Color: Blue
   - Auto-assign when calendar booking is created

2. **Booking Confirmed**
   - Color: Green
   - Move here after payment/deposit received

3. **Pre-Event Reminder**
   - Color: Yellow
   - Move here 48 hours before event

4. **Event Day**
   - Color: Orange
   - Move here on the day of the event

5. **Completed**
   - Color: Gray
   - Move here after event is finished

6. **Follow-up**
   - Color: Purple
   - For review requests and upsells

### Pipeline Automation

Set up automation to:
- **Auto-move to "New Inquiry"** when a calendar booking is created
- **Auto-move to "Pre-Event Reminder"** 48 hours before the scheduled time
- **Auto-move to "Event Day"** on the day of the event

---

## Tags and Automation

### Recommended Tags

Create these tags in GoHighLevel:

#### Bus-Specific Tags
- `bus-orange-juice`
- `bus-green-light`
- `bus-white-knight`
- `bus-big-blue`

#### Event Type Tags
- `event-wedding`
- `event-birthday`
- `event-bachelor`
- `event-bachelorette`
- `event-mardi-gras`
- `event-saints-game`
- `event-corporate`
- `event-other`

#### Status Tags
- `deposit-paid`
- `balance-due`
- `fully-paid`
- `cancelled`

### Tagging Automation

Set up workflows to automatically tag contacts based on:

1. **Which calendar they booked from** → Apply corresponding bus tag
2. **Event type selected in form** → Apply corresponding event tag
3. **Payment status** → Apply payment tags

**How to Set Up:**
1. Go to **Automation** → **Workflows**
2. Create a new workflow triggered by "Calendar Booking Created"
3. Add condition: "If calendar = Orange Juice Calendar"
4. Add action: "Add Tag: bus-orange-juice"
5. Repeat for each calendar/event type

---

## Workflows

### Workflow 1: Booking Confirmation & Reminder

**Trigger:** Calendar booking created

**Actions:**
1. Send immediate confirmation email/SMS:
   ```
   "Thanks for booking [BUS NAME] with Party on Wheels! 
   Your ride is scheduled for [DATE] at [TIME]. 
   We'll send a reminder 48 hours before. 
   Questions? Call 985-555-0123"
   ```

2. Add tag: `bus-[bus-name]` (based on calendar)

3. Move to pipeline stage: "Booking Confirmed"

4. Create task: "Follow up with [CONTACT NAME] - [EVENT TYPE]"

### Workflow 2: Pre-Event Reminder

**Trigger:** 48 hours before scheduled booking time

**Actions:**
1. Send reminder SMS/Email:
   ```
   "Hey [FIRST NAME]! Your Party on Wheels ride is coming up in 48 hours. 
   Date: [DATE]
   Time: [TIME]
   Bus: [BUS NAME]
   Pickup: [LOCATION]
   
   Need to make changes? Call us at 985-555-0123"
   ```

2. Move to pipeline stage: "Pre-Event Reminder"

3. Create task: "Confirm pickup location with [CONTACT NAME]"

### Workflow 3: Post-Event Follow-up

**Trigger:** Move to "Completed" stage (manual or automated)

**Actions:**
1. Wait 24 hours

2. Send review request email:
   ```
   "Hope you had an amazing time on [BUS NAME]! 
   We'd love to hear about your experience. 
   Leave us a review: [REVIEW LINK]
   
   Planning another event? Book again and get 10% off your next ride!"
   ```

3. Add tag: `completed-event`

4. Move to pipeline stage: "Follow-up"

### Optional: Upsell Workflow

**Trigger:** Contact tagged with `completed-event`

**Actions:**
1. Wait 7 days

2. Send special offer:
   ```
   "Miss the party? Book again and save 15% on your next Party on Wheels rental. 
   Use code: LOYAL15
   Valid for 30 days."
   ```

---

## Testing Checklist

Use this checklist to verify everything works correctly:

### Calendar Integration Testing

- [ ] **Orange Juice Calendar**
  - [ ] Embed code added to `constants.ts`
  - [ ] Calendar loads in modal when clicking "Book This Bus"
  - [ ] Can select a date and time
  - [ ] Booking form displays correctly
  - [ ] Can submit a test booking
  - [ ] Test contact appears in GoHighLevel subaccount
  - [ ] Contact is tagged with `bus-orange-juice`
  - [ ] Contact moves to correct pipeline stage

- [ ] **Green Light Calendar**
  - [ ] Embed code added to `constants.ts`
  - [ ] Calendar loads in modal when clicking "Book This Bus"
  - [ ] Can select a date and time
  - [ ] Booking form displays correctly
  - [ ] Can submit a test booking
  - [ ] Test contact appears in GoHighLevel subaccount
  - [ ] Contact is tagged with `bus-green-light`
  - [ ] Contact moves to correct pipeline stage

- [ ] **Bus 3 Calendar (The White Knight)**
  - [ ] Embed code added to `constants.ts`
  - [ ] Calendar loads in modal when clicking "Book This Bus"
  - [ ] Can select a date and time
  - [ ] Booking form displays correctly
  - [ ] Can submit a test booking
  - [ ] Test contact appears in GoHighLevel subaccount
  - [ ] Contact is tagged with `bus-white-knight`
  - [ ] Contact moves to correct pipeline stage

- [ ] **Bus 4 Calendar (Big Blue)**
  - [ ] Embed code added to `constants.ts`
  - [ ] Calendar loads in modal when clicking "Book This Bus"
  - [ ] Can select a date and time
  - [ ] Booking form displays correctly
  - [ ] Can submit a test booking
  - [ ] Test contact appears in GoHighLevel subaccount
  - [ ] Contact is tagged with `bus-big-blue`
  - [ ] Contact moves to correct pipeline stage

### Workflow Testing

- [ ] **Confirmation Workflow**
  - [ ] Test booking triggers confirmation email/SMS
  - [ ] Correct bus tag is applied
  - [ ] Contact moves to "Booking Confirmed" stage
  - [ ] Task is created

- [ ] **Reminder Workflow**
  - [ ] Reminder sends 48 hours before event (test with future date)
  - [ ] Contact moves to "Pre-Event Reminder" stage
  - [ ] Confirmation task is created

- [ ] **Follow-up Workflow**
  - [ ] Review request sends 24 hours after completion
  - [ ] Contact moves to "Follow-up" stage
  - [ ] `completed-event` tag is applied

### Mobile Testing

- [ ] Calendar displays correctly on mobile devices
- [ ] Modal is responsive and easy to close
- [ ] Booking form is easy to fill on mobile
- [ ] All buttons are tappable and visible

### Cross-Browser Testing

- [ ] Test in Chrome
- [ ] Test in Safari
- [ ] Test in Firefox
- [ ] Test in Edge

---

## Troubleshooting

### Calendar Not Loading

**Issue:** Calendar iframe shows blank or error

**Solutions:**
1. Check that the calendar ID in the embed URL is correct
2. Verify the calendar is published/active in GoHighLevel
3. Check browser console for iframe errors
4. Ensure the calendar has availability set

### Tags Not Applying

**Issue:** Contacts aren't getting tagged automatically

**Solutions:**
1. Verify workflow is active in GoHighLevel
2. Check workflow trigger conditions match calendar name
3. Ensure tags exist in GoHighLevel (Settings → Tags)
4. Test workflow manually to see if it runs

### Pipeline Stage Not Updating

**Issue:** Contacts stay in default stage

**Solutions:**
1. Verify pipeline stages exist
2. Check workflow actions include "Move to Pipeline Stage"
3. Ensure stage names match exactly (case-sensitive)
4. Test workflow manually

### Modal Not Closing

**Issue:** Can't close booking modal

**Solutions:**
1. Check that `onClose` handler is properly connected
2. Verify Escape key listener is working
3. Ensure click-outside-to-close is functioning
4. Check for JavaScript errors in console

---

## Support

If you encounter issues not covered in this guide:

1. Check GoHighLevel documentation: https://help.gohighlevel.com
2. Review browser console for JavaScript errors
3. Verify all calendar IDs and embed codes are correct
4. Test workflows manually in GoHighLevel to isolate issues

---

## Next Steps

After completing integration:

1. ✅ Test all four calendars end-to-end
2. ✅ Set up all recommended workflows
3. ✅ Configure pipeline stages
4. ✅ Create and test tags
5. ✅ Train team on GoHighLevel interface
6. ✅ Monitor first few bookings to ensure everything works smoothly
7. ✅ Collect feedback and iterate on workflows

---

**Last Updated:** [Current Date]
**Version:** 1.0
**Maintained By:** Zero Motion Marketing


