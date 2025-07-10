const readline = require("node:readline");

// maak een container om input te kunnen krijgen
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// vraag stellen in console - callback zorgt voor afhandeling
rl.question(`What's your name?`, (name) => {
  console.log(`Hi ${name}!`);
  rl.close();
});


