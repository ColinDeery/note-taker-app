const fs = require('fs');
const util = require('util');

const readFromFile = util.promisify(fs.readFile);

const writeToFile = fs.writeFile('/db.json', JSON.stringify)




module.exports = { readFromFile, writeToFile, readAndAppend };