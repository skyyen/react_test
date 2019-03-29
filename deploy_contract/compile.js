const paths = require('path');
const fs = require('fs');
const solc1 = require('solc');
//const filepath = paths.resolve(__dirname, 'contracts', 'HelloWorld.sol');
const filepath = paths.resolve(__dirname, 'contracts', 'Lottery.sol');
console.log(filepath);

const source = fs.readFileSync(filepath, "utf8");

//console.log(source);
//console.log(solc1.compile(source,1).contracts[':HelloWorld']);

//module.exports = solc1.compile(source,1).contracts[':HelloWorld'];
module.exports = solc1.compile(source,1).contracts[':Lottery'];
