const logger = require('./logger.js');
const path = require('path');
const os = require('os');
const fs = require('fs');

let pathObject = path.parse(__filename);

logger.log('path', pathObject);

let freeMem = os.freemem();
let totalMem = os.totalmem();

logger.log('free',freeMem);
logger.log('total',totalMem);

let rootDir = fs.readdirSync('./'); // get all files inside the root specified
console.log(rootDir);

fs.readdir('./',(err,files) => {
    (err) ? console.log(err) : console.log('async', files);
})

console.log('sync', rootDir);

