const fs = require('fs');
const path = require('path');

// Create folder
// fs stands for file system
// Uses mkdir and path join to state where we want to create the folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if (err) throw err;
//     console.log('Folder created...')
// });

// // Create and write to file
// // Creates file hello.txt in folder test with content Hello World!
// // Overwrites if content already there
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => {
//     if (err) throw err;
//     console.log('File written to...')

//     // File append
//     // Written within the writeFile as writeFile is ran asynchronously
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'I love Node.js!', err => {
//         if (err) throw err;
//         console.log('File written to...')
//     });

// });

// Read file
// put utf8 as character encoding
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
})

// Rename file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), (err) => {
    if (err) throw err;
    console.log('File renamed...');
});