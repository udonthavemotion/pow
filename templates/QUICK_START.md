# Quick Start - Copy Design Rules to New Project

## 🚀 Fastest Method

### Option 1: Copy Scripts (Recommended)

**Windows (PowerShell):**
```powershell
cd templates/design-rules
.\copy-to-project.ps1 ..\..\your-new-project\
```

**Mac/Linux (Bash):**
```bash
cd templates/design-rules
./copy-to-project.sh ../../your-new-project/
```

### Option 2: Manual Copy

**Windows:**
```powershell
Copy-Item templates/design-rules/.cursorrules ./
Copy-Item templates/design-rules/DESIGN_PREFERENCES.md ./
```

**Mac/Linux:**
```bash
cp templates/design-rules/.cursorrules ./
cp templates/design-rules/DESIGN_PREFERENCES.md ./
```

## ✅ Verify Setup

After copying, check that these files exist in your project root:
- `.cursorrules` (hidden file)
- `DESIGN_PREFERENCES.md`

Cursor will automatically read `.cursorrules` and apply the design preferences!

## 📚 More Info

See `templates/design-rules/README.md` for detailed documentation.

