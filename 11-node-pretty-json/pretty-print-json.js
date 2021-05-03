const fs = require('fs').promises

console.log(process.argv)
const filename = process.argv[2];
if (!filename) {
  console.error("Please provide json filename");
  process.exit(127)
}

async function main(jsonFilename) {
  // let's start coding
  // console.log(jsonFilename)
  const jsonContent = await fs.readFile(jsonFilename, { encoding: 'utf8'});
  const json = JSON.parse(jsonContent)
  process.stdout.write(JSON.stringify(json, null, 2))
}

// main(filename);

// to run on terminal;
// node pretty-print-json.js posts.json