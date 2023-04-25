const {readFileSync , writeFileSync} = require('fs') // built-in module

const first = readFileSync('./content/first.txt' ,'utf-8')
const second = readFileSync('./content/second.txt' ,'utf-8')

writeFileSync('./content/third.txt',`this is the third file ${first} , ${second}`, {flag :"a"})
// {flag : 'a'} used to append
console.log(first);
console.log(second);
