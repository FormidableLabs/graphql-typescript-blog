const asoaif = require("asoiaf-api");

async function main() {
  const char = await asoaif.getCharacterByName("Jon Snow");
  console.log(char);
}

main();
