# How to Use Design Rules Across Projects

This guide explains how to apply the "No Transparent Boxed Cards" design preference universally across all your projects.

## Quick Setup (3 Steps)

### Step 1: Copy the Rule Files

Copy these files to any new project:

1. **`.cursorrules`** - Cursor AI will automatically read this file
2. **`DESIGN_PREFERENCES.md`** - Detailed documentation for reference
3. **`.cursor/design-rules.md`** - Quick reference (optional)

### Step 2: Verify Cursor is Reading Rules

Cursor automatically reads `.cursorrules` from your project root. You can verify by:
- Opening Cursor settings
- Checking if rules are being applied
- Or simply mention "follow design preferences" in your prompts

### Step 3: Reference in Prompts

When starting a new project or component, you can say:
- "Follow the design preferences in `.cursorrules`"
- "Avoid transparent boxed cards per design rules"
- "Use flat design as specified in DESIGN_PREFERENCES.md"

## File Structure

```
your-project/
├── .cursorrules              ← Cursor AI reads this automatically
├── DESIGN_PREFERENCES.md     ← Detailed documentation
└── .cursor/
    └── design-rules.md       ← Quick reference (optional)
```

## Making It Truly Universal

### Option 1: Global Cursor Rules (Recommended)

1. Find your Cursor global config directory:
   - **Windows:** `%APPDATA%\Cursor\User\globalStorage\`
   - **Mac:** `~/Library/Application Support/Cursor/User/globalStorage/`
   - **Linux:** `~/.config/Cursor/User/globalStorage/`

2. Create a global `.cursorrules` file there (if supported)

### Option 2: Template Repository

Create a template repository with these files:
- `.cursorrules`
- `DESIGN_PREFERENCES.md`
- `.cursor/design-rules.md`

Then clone this template when starting new projects.

### Option 3: Copy on Project Init

Add to your project initialization script:
```bash
# Copy design rules to new project
cp ~/templates/.cursorrules ./.
cp ~/templates/DESIGN_PREFERENCES.md ./.
mkdir -p .cursor
cp ~/templates/.cursor/design-rules.md ./.cursor/.
```

## Testing the Rules

To verify rules are working:

1. **Ask Cursor to create a component:**
   ```
   Create a stats component showing 3 metrics
   ```

2. **Check the output:**
   - ✅ Should use flat design with drop shadows
   - ❌ Should NOT have transparent boxes with backdrop blur

3. **If it creates boxes, remind it:**
   ```
   Follow the design preferences - no transparent boxed cards
   ```

## Updating Rules

If you want to modify the rules:

1. Edit `.cursorrules` for immediate effect
2. Update `DESIGN_PREFERENCES.md` for documentation
3. Commit both files to your project

## Sharing with Team

If working with a team:

1. Commit `.cursorrules` and `DESIGN_PREFERENCES.md` to your repo
2. Team members get the rules automatically when they clone
3. Everyone follows the same design preferences

## Troubleshooting

**Cursor not following rules?**
- Ensure `.cursorrules` is in project root
- Try mentioning "follow .cursorrules" explicitly in prompts
- Check Cursor settings for rule file location

**Rules too strict?**
- Edit `.cursorrules` to add exceptions
- Update `DESIGN_PREFERENCES.md` with clarification

**Want to disable temporarily?**
- Rename `.cursorrules` to `.cursorrules.backup`
- Or add exception comments in the file

---

**Pro Tip:** Keep a master copy of these files in a "templates" folder or GitHub gist for easy access across projects.

