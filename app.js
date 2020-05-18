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
console.log('RESULTS')
// 1 
getAllFiles = (path) => {
    return fs.readdirSync(path);
};

// 2
console.info('Get all files in the directory')
printAllFiles = (path='./') => {
    console.log(getAllFiles(path));
};

// 3 
console.info('Get files sorted')
getFilesSorted = (path = './test/') => {
    try {
        let files = fs.readdirSync(path).sort();
        return files;
    } catch (error) {
        console.log('We cannot sort the array...')
        console.log(error)
    }
}

// 4
console.info('Get files with request letter')
getFilesWith = (letter = 'a', path = './test/') => {
}

printAllFiles()
console.log(getFilesSorted())
// console.log(getFilesWith('a', './test/'))