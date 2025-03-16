Write-Host "🎶 Welcome to the Project Jam, JamUtilities Interactive Installer! 🚀" -ForegroundColor Cyan
Write-Host "------------------------------------------------------------"
Write-Host "Let’s get you set up with everything you need. 😊"
Write-Host "------------------------------------------------------------"

# Check if Node.js is installed
$nodeVersion = node -v
if (-not $nodeVersion) {
    Write-Host "Node.js is not installed! Let's install it using winget." -ForegroundColor Yellow
    Write-Host "Installing Node.js..."
    winget install --id OpenJS.NodeJS -e --source winget
}

# Ask where to install the project
$installPath = Read-Host "Where would you like to install JamUtilities? (Provide the directory path)"
if (-not (Test-Path $installPath)) {
    Write-Host "Creating directory at $installPath" -ForegroundColor Green
    New-Item -Path $installPath -ItemType Directory
}

Write-Host "Cloning JamUtilities repository..." -ForegroundColor Cyan
git clone https://github.com/project-jam/jamutilities $installPath

# Change to the project directory
Set-Location -Path $installPath

# Check for Bun, pnpm, or fall back to npm
$bunInstalled = Get-Command bun -ErrorAction SilentlyContinue
$pnpmInstalled = Get-Command pnpm -ErrorAction SilentlyContinue

if ($bunInstalled) {
    Write-Host "Bun is already installed. Using Bun for installation." -ForegroundColor Cyan
    bun install
} elseif ($pnpmInstalled) {
    Write-Host "pnpm is already installed. Using pnpm for installation." -ForegroundColor Cyan
    pnpm install
} else {
    Write-Host "Neither Bun nor pnpm are installed. Using npm instead." -ForegroundColor Yellow
    npm install
}

Write-Host "Installation complete!" -ForegroundColor Green
Write-Host "------------------------------------------------------------"
Write-Host "Now, we’ll configure your environment... 🌱"
Write-Host "------------------------------------------------------------"

# Ask for environment variables
$discordToken = Read-Host "Please enter your Discord token (hidden)"
$clientId = Read-Host "Please enter your client ID"
$userId = Read-Host "Please enter your Discord user ID"
$apiUrl = Read-Host "If you want to use the JamBalt (local API), please provide the API URL (or press Enter to skip)"
$ignoreUserIds = Read-Host "If you want to ignore some slaps using the User ID, put it here (or press Enter to skip)"
$disabledCommands = Read-Host "If you want to disable any commands, type them here, separated by commas (or press Enter to skip)"

# Create .env file with the user inputs
$envContent = @"
DISCORD_TOKEN=$discordToken
CLIENT_ID=$clientId
USER_ID=$userId
API_URL=$apiUrl
IGNORE_USER_IDS=$ignoreUserIds
DISABLED_COMMANDS=$disabledCommands
"@

# Write to .env file
$envFile = "$installPath\.env"
$envContent | Out-File -FilePath $envFile -Encoding UTF8

Write-Host "Your .env file has been created!" -ForegroundColor Green
Write-Host "------------------------------------------------------------"
Write-Host "🎉 Installation complete! 🎉"
Write-Host "------------------------------------------------------------"
Write-Host "Now, you need to restart the PowerShell shell for the changes to take effect."

# Provide instructions to restart the shell
Write-Host "To restart, simply close this PowerShell window and open a new one. Then, you can start the bot!"

# Optional: Auto-close the script
Start-Sleep -Seconds 3
Exit
