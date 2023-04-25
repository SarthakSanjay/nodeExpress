//async
const {readFile , writeFile} = require('fs') // built-in module
console.log("start")
readFile('./content/first.txt','utf-8',(err, result)=>{
    if(err){
        console.log(err)
        return
    }
    // console.log(result)
    const first = result
    readFile('./content/second.txt','utf-8', (err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/fourth.txt' , `here is the result : ${first} , ${second}`,
        (err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log('done with the task')
        })
    })
});
console.log("start next task")