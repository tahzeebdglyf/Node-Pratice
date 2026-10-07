const fs = require('fs');
let text = fs.readFileSync('file.txt', 'utf-8');
text = text.replace('malik', 'Khan');

console.log("This file content is")
console.log(text);

console.log("creating a new file");
fs.writeFileSync('file2.txt', text);
