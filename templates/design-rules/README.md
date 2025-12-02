# Design Rules Template

This folder contains universal design preference rules that can be copied to any project to ensure consistent design patterns.

## 📁 Files Included

- **`.cursorrules`** - Cursor AI automatically reads this file from project root
- **`DESIGN_PREFERENCES.md`** - Detailed documentation and examples
- **`README.md`** - This file (setup instructions)

## 🚀 Quick Setup

### For a New Project:

1. **Copy `.cursorrules` to project root:**
   ```bash
   cp templates/design-rules/.cursorrules ./
   ```

2. **Copy `DESIGN_PREFERENCES.md` to project root:**
   ```bash
   cp templates/design-rules/DESIGN_PREFERENCES.md ./
   ```

3. **Done!** Cursor will automatically apply the rules.

### One-Line Setup (Bash):

```bash
cp templates/design-rules/.cursorrules ./ && cp templates/design-rules/DESIGN_PREFERENCES.md ./
```

### PowerShell (Windows):

```powershell
Copy-Item templates/design-rules/.cursorrules ./
Copy-Item templates/design-rules/DESIGN_PREFERENCES.md ./
```

### Using Copy Scripts (Easiest):

**Bash/Linux/Mac:**
```bash
cd templates/design-rules/
./copy-to-project.sh [path-to-project]
```

**PowerShell (Windows):**
```powershell
cd templates/design-rules/
.\copy-to-project.ps1 [path-to-project]
```

**From project root:**
```powershell
.\templates\design-rules\copy-to-project.ps1
```

## 📋 What These Rules Do

These rules enforce a **flat design preference** that:
- ❌ Prevents transparent boxed card components
- ❌ Avoids glassmorphism effects on content containers
- ✅ Encourages flat, integrated designs
- ✅ Uses drop shadows for text visibility
- ✅ Lets content sit directly on backgrounds

## 🔄 Updating Rules

If you update these template files:
1. Edit the files in `templates/design-rules/`
2. Copy updated files to existing projects as needed
3. New projects will automatically get the latest version

## 📚 Documentation

See `DESIGN_PREFERENCES.md` for:
- Detailed examples
- Implementation guidelines
- Exception cases
- Design philosophy

## 💡 Pro Tips

- **Keep templates updated:** Maintain one source of truth here
- **Version control:** Commit these templates to your repo
- **Team sharing:** Everyone can use the same design rules
- **Quick reference:** Check `.cursorrules` for the condensed version

---

**Location:** `templates/design-rules/`
**Last Updated:** 2025-01-XX

