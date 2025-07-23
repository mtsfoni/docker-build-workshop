const fs = require('fs');
const colors = require('colors');

if (fs.existsSync('./debug.txt')) {
  console.error("🚨 Found debug.txt — remaining in debug mode!".yellow);
  process.exit(1);
}

if (process.getuid && process.getuid() === 0) {
  console.error("🚨 App is running as root! Please use a non-root user.".red);
  process.exit(1);
}

console.log("✅ App is running!".green);// touched at Wed Jul 23 07:56:17 PM UTC 2025
