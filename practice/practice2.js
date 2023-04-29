const fs = require('fs')
fs.writeFileSync('./content/task1.txt','this was my first task')
// if there in no file with the name text1.txt it will create one and write the following text to it

let read = fs.readFileSync('./content/task1.txt','utf-8')
console.log(read)
//it is used to read the content of the file provided

// fs.mkdir('./content2' , (err)=>{
//    if(err){console.log(err)}else{console.log("successfully created directory")}
// })

// fs.rename('./content2', './content/content2' , (err)=>{
//     if(err){
//         console.log(err)

//     }else{
//         console.log("directory move successfully")
//     }
// })

// fs.rename('./content/task1.txt','./content/task2.txt',(err)=>{
//     if(err){console.log(err)}else{console.log("file renamed successfully")}
// } )

//deletes a file
// fs.unlink('./content/task2.txt', (err) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log('File deleted successfully');
//     }
//   });


//deletes the directory
// fs.rmdir('./content/content2', (err) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log('Directory deleted successfully');
//     }
//   });


// Copy a file
// fs.copyFile('./content/task1.txt', './content/subfolder/task1.txt', (err) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log('File copied successfully');
//     }
//   });
 
//this deletes the copied file
//   fs.unlink("./content/subfolder/task1.txt",(err)=>{
//     if(err){console.log(err)}else{console.log("file deleted")}
//   })
  
  
  
  
  
  
  