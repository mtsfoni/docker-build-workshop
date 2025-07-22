const fs = require('fs');
const chalk = require('chalk');

if (fs.existsSync('./debug.txt')) {
  console.error(chalk.yellow("🚨 Found debug.txt — remaining in debug mode!"));
  process.exit(1);
}

if (process.getuid && process.getuid() === 0) {
  console.error(chalk.red("🚨 App is running as root! Please use a non-root user."));
  process.exit(1);
}

console.log(chalk.green("✅ App is running!"));
