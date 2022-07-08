const fs = require('fs');

/**
 * Create a new file
 */
// fs.writeFileSync('read.txt', 'welcome to my channel');
// fs.writeFileSync('read.txt', 'jangid ,welcome to my channel');

// fs.appendFileSync('read.txt', 'kabuter ,welcome to my channel');

// fs.readFileSync('read.txt');

// const buff_data = fs.readFileSync('read.txt').toString();
// console.log(buff_data);

// fs.renameSync("read.txt", "readwrite.txt");

fs.mkdirSync('jangid');
fs.writeFileSync('jangid/bio.txt', 'my name lokesh jangid');