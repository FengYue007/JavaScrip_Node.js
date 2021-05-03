const fs = require('fs').promises

const filename = process.argv[2];
if (!filename) {
  console.error("Please provide json filename");
  process.exit(127)
}

async function main(jsonFilename) {
  // let's start coding
}

main(filename);
