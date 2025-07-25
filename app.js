const fs = require("fs");
const http = require("http");
const path = require("path");
const os = require("os");
const url = require("url");
const crypto = require("crypto");
const sayName = require("./greetings.js");
const math = require("./math.js");
const lodash = require("lodash");

// fs.readFile('example.txt','utf-8',(err, data) =>{
//     if(err){
//         console.log(err);
//     } else{
//         console.log(data);
//     }
// })


// const content = 'Hello, Nodejs'

// fs.writeFile('output.txt', content, (err)=>{
//     if(err){
//         console.log(err);
//         return
//     };
//     console.log('The file written successfully!');
// })


// const server = http.createServer((req, res)=>{
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html'); // text/plain
//     res.end('Hello, Node.js Server!');
// });

// server.listen(3000, () => {
//     console.log('Server running at http://localhost:3000');
// });


// const directory = '/user/local'
// const fileName = 'example.txt'

// const fullPath = path.join(directory, fileName)
// console.log(fullPath);


// console.log('Platform: ', os.platform());
// console.log('CPU Architecture: ', os.arch());
// console.log('Total memory: ', os.totalmem());
// console.log('Free memory: ', os.freemem());


// const myUrl = new URL('http://mywebsite.com:8000/path/name?query=string#hash');

// console.log(myUrl.host);
// console.log(myUrl.pathname);
// console.log(myUrl.search);
// console.log(myUrl.searchParams.get('query'));
// console.log(myUrl.hash);


// const hash = crypto.createHash('sha256');
// hash.update('Hello world');
// console.log(hash.digest('hex'));


// const message = sayName("Nodejs");
// console.log(message);

// console.log(math.add(10, 2));
// console.log(math.subtract(10, 2));
// console.log(math.multiply(10, 2));
// console.log(math.divide(10, 2));


// const array = [1, 2, 3, 4, 5];
// const reversed = lodash.reverse(array);
// console.log(reversed);


// const readableStream = fs.createReadStream('example.txt', {encoding: 'utf-8'});
// readableStream.on('data', (chunk) => {
//     console.log(chunk);
// })
// readableStream.on('end', () => {
//     console.log("Done!");
// })
// readableStream.on('error', (err) => {
//     console.log(err);
// })

// const writableStream = fs.createWriteStream('output2.txt'); // it automatically creates the file
// writableStream.write('Hello, Nodejs');
// writableStream.end();
// writableStream.on('finish', () => {
//     console.log("Done!");
// })



// const readableStream = fs.createReadStream('example.txt', {encoding: 'utf-8'});
// const writableStream = fs.createWriteStream('output3.txt');
// readableStream.pipe(writableStream);
// writableStream.on('finish', () => {
//     console.log("Done!");
// })

// const readline = require('readline');
// const readableStream2 = fs.createReadStream('example.txt');
// const rl = readline.createInterface({
//     input: readableStream2
// });

// rl.on('line', (line) => {
//     console.log('Line: ',line);
// })

// rl.on('close', () => {
//     console.log("Done!");
// })


// // Creating a directory
// fs.mkdir('newDirectory', (err) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('Directory created successfully!');
// })

// fs.mkdirSync("newDirectory2");
// console.log('Directory created successfully!');

// // Reading a directory
// fs.readdir('./', (err, files) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(files);
// })

// const files = fs.readdirSync('./');
// console.log(files);

// // Checking if a directory exists
// const dirName = 'newDirectory';
//     if(fs.existsSync(dirName)){
//         console.log('Directory exists!');
//         return;
//     } else {
//     console.log('Directory does not exists!');
// }

// // Deleting a directory
// fs.rmdir('newDirectory2', (err) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('Directory deleted successfully!');
// })

// fs.rm('newDirectory',{recursive: true}, (err) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('Directory deleted successfully!');
// })

// // Renaming a directory
// fs.rename('newDirectory', 'newDirectoryRenamed', (err) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('Directory renamed successfully!');
// })

// // Getting Directory Stats
// fs.stat('./', (err, stats) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(stats);
//     console.log(stats.isDirectory());
// })

// // watching a directory
// fs.watch('./', (event, filename) => {
//     console.log(event);
//     if(filename){
//         console.log(filename);
//     }
// })
