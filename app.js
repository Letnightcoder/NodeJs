const fs = require("fs");

fs.readFile('example.txt','utf-8',(err, data) =>{
    if(err){
        console.log(err);
    } else{
        console.log(data);
    }
})


const content = 'Hello, Nodejs'

fs.writeFile('output.txt', content, (err)=>{
    if(err){
        console.log(err);
        return
    };
    console.log('The file written successfully!');
})