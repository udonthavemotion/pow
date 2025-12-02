#!/bin/bash
# Quick copy script for design rules
# Usage: ./copy-to-project.sh [project-path]

PROJECT_PATH="${1:-.}"

echo "📋 Copying design rules to project..."
echo "   Target: $PROJECT_PATH"

# Copy .cursorrules
cp .cursorrules "$PROJECT_PATH/.cursorrules"
echo "   ✅ Copied .cursorrules"

# Copy DESIGN_PREFERENCES.md
cp DESIGN_PREFERENCES.md "$PROJECT_PATH/DESIGN_PREFERENCES.md"
echo "   ✅ Copied DESIGN_PREFERENCES.md"

# Create .cursor directory if it doesn't exist
mkdir -p "$PROJECT_PATH/.cursor"

echo ""
echo "✨ Done! Design rules have been copied to your project."
echo "   Cursor will automatically apply these rules."

