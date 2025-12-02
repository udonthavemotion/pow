# Quick copy script for design rules (PowerShell)
# Usage: .\copy-to-project.ps1 [project-path]

param(
    [string]$ProjectPath = "."
)

Write-Host "📋 Copying design rules to project..." -ForegroundColor Cyan
Write-Host "   Target: $ProjectPath" -ForegroundColor Gray

# Copy .cursorrules
Copy-Item -Path ".cursorrules" -Destination "$ProjectPath\.cursorrules" -Force
Write-Host "   ✅ Copied .cursorrules" -ForegroundColor Green

# Copy DESIGN_PREFERENCES.md
Copy-Item -Path "DESIGN_PREFERENCES.md" -Destination "$ProjectPath\DESIGN_PREFERENCES.md" -Force
Write-Host "   ✅ Copied DESIGN_PREFERENCES.md" -ForegroundColor Green

# Create .cursor directory if it doesn't exist
if (-not (Test-Path "$ProjectPath\.cursor")) {
    New-Item -ItemType Directory -Path "$ProjectPath\.cursor" | Out-Null
}

Write-Host ""
Write-Host "✨ Done! Design rules have been copied to your project." -ForegroundColor Green
Write-Host "   Cursor will automatically apply these rules." -ForegroundColor Gray

