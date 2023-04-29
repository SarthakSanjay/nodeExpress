console.log(__dirname)
// gives full path  - C:\Users\hp\Desktop\server_practice

console.log(__filename)
//gives full path with file name - C:\Users\hp\Desktop\server_practice\practice.js

const {readFileSync , writeFileSync , readFile} = require('fs')
// writeFileSync("./content/text.txt","world")
// writeFileSync("./content/text.txt","world is about to end")

// console.log(readFileSync('./content/first.txt', "utf-8"))
// console.log(readFile('./content/first.txt', "utf-8"))
readFile('./content/first.txt', 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
console.log("read success")