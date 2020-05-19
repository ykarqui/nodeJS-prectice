// modules
const logger = require('./logger.js');
const path = require('path');
const os = require('os');
const fs = require('fs');

// let pathObject = path.parse(__filename);

// logger.log('path', pathObject);

// let freeMem = os.freemem();
// let totalMem = os.totalmem();

// logger.log('free',freeMem);
// logger.log('total',totalMem);

// let rootDir = fs.readdirSync('./'); // get all files inside the root specified
// console.log(rootDir);

/*fs.readdir('./',(err,files) => {
    (err) ? console.log(err) : console.log('async', files);
})

console.log('sync', rootDir);*/

/*
1- crear un metodo para que se obtengan todos lso archivos
2- crear un metodo para que haga un print en consola de todos los archivos
3- a partir de un path determinado , ordenar los archivos de acuerdo al nombre de los archivos
4- imprimir en consola todos los archivos que empiecen con la letra que mandan por parámentro
*/

console.log('RESULTS:\n')
// 1 
getAllFiles = (path) => {
    return fs.readdirSync(path);
};

// 2
console.info('Getting all files in the directory...')
printAllFiles = (path='./') => {
    console.log(getAllFiles(path));
};

// 3 
console.info('Getting files sorted...')
getFilesSorted = (path = './pathToTest/') => {
    try {
        let files = fs.readdirSync(path).sort().reverse()
        return files
    } catch (error) {
        console.log('We cannot sort the array...')
        console.log(error)
    }
}

// 4
console.info('Counting files with request letter...')
countFilesWith = (letter = 'a', path = './pathToTest/') => {
    files = getFilesSorted(path)
    count = 0
    files.forEach(elem => {
        if (elem.charAt(0) === letter) {
            count++
        }
    });
    return count
}

exports = countFilesWith;

console.info('2 > Get all files in the directory')
printAllFiles()

console.info('3 > Get files sorted')
console.log(getFilesSorted())

console.info('4 > Count files with request letter')
console.log(countFilesWith('d', './pathToTest/'))