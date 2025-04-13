#!/bin/sh

# Ensure script runs cleanly
echo -e "\033[36mWelcome to the Project Jam, JamUtilities Interactive Installer!\033[0m"
echo "------------------------------------------------------------"
echo "Let’s get you set up with everything you need."
echo "------------------------------------------------------------"

# Check if Node.js is installed
if ! command -v node >/dev/null 2>&1; then
    echo -e "\033[33mNode.js is not installed! Please install it manually.\033[0m"
    echo "Visit https://nodejs.org (or use Node Version Manager: https://github.com/nvm-sh/nvm) to download and install Node.js."
    exit 1
fi

# Ask where to install the project
printf "Where would you like to install JamUtilities? (Provide the directory path): "
read installPath

if [ ! -d "$installPath" ]; then
    echo -e "\033[32mCreating directory at $installPath\033[0m"
    mkdir -p "$installPath"
fi

echo -e "\033[36mCloning JamUtilities repository...\033[0m"
git clone https://github.com/project-jam/jamutilities "$installPath"

# Change to the project directory
cd "$installPath" || exit

# Check for Bun, pnpm, or fallback to npm
if command -v bun >/dev/null 2>&1; then
    echo -e "\033[36mBun is already installed. Using Bun for installation.\033[0m"
    bun install
elif command -v pnpm >/dev/null 2>&1; then
    echo -e "\033[36mpnpm is already installed. Using pnpm for installation.\033[0m"
    pnpm install
else
    echo -e "\033[33mNeither Bun nor pnpm are installed. Using npm instead.\033[0m"
    npm install
fi

echo -e "\033[32mInstallation complete!\033[0m"
echo "------------------------------------------------------------"
echo "Now, we’ll configure your environment..."
echo "------------------------------------------------------------"

# Ask for environment variables
printf "Please enter your Discord token (input will be hidden): "
stty -echo
read discordToken
stty echo
echo

printf "Please enter your client ID: "
read clientId

printf "Please enter your Discord user ID: "
read userId

printf "If you want to use the JamBalt (local API), please provide the API URL (or press Enter to skip): "
read apiUrl

printf "If you want to ignore some slaps using the User ID, put it here (or press Enter to skip): "
read ignoreUserIds

printf "If you want to disable any commands, type them here, separated by commas (or press Enter to skip): "
read disabledCommands

# Write to .env file
cat > .env <<EOF
DISCORD_TOKEN=$discordToken
CLIENT_ID=$clientId
USER_ID=$userId
API_URL=$apiUrl
IGNORE_USER_IDS=$ignoreUserIds
DISABLED_COMMANDS=$disabledCommands
EOF

echo -e "\033[32mYour .env file has been created!\033[0m"
echo "------------------------------------------------------------"
echo "Installation complete!"
echo "------------------------------------------------------------"
echo "Now, you need to restart your terminal session for changes to take effect."
