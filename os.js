const path = require('path');
console.log(path.sep);
// console.log(require('path').sep)

const filePath = path.join('/content/','test.txt');
console.log(filePath);

//base name
const base = path.basename(filePath);
console.log(base);

//absolute 

console.log(__dirname);
const absolute = path.resolve(__dirname,'content','text.txt');
console.log(absolute);