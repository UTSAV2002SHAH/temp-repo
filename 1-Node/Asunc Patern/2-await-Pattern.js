const {readFile, writeFile} = require('fs').promises

// const util = require('util');
// const readfilepromise = util.promisify(readFile) 
// const writefilepromise = util.promisify(writeFile)

const start = async()=>{
    try {
        // const first = await readfilepromise('./content/first.txt', 'utf8');
        // const second = await readfilepromise('./content/second.txt', 'utf8');
        // await writefilepromise('./content/result.txt', `IT IS WORKING MF : ${first} ${second}`);

        const first = await readFile('./content/first.txt', 'utf8');
        const second = await readFile('./content/second.txt', 'utf8');
        await writeFile('./content/result.txt', `IT IS WORKING MF : ${first} ${second}`);
        console.log(first, second);    
    } catch (error) {
        console.log(error);
    }
}
start()

// const gettext = (path) =>{
//     return new Promise( (resolve, reject)=>{
//         readFile(path, 'utf8', (err, data)=>{
//             if(err){
//                 reject(err);
//             }
//             else{
//                 resolve(data);
//             }            
//         });
//     })
// }

// gettext('./content/firt.txt').then(result => console.log(result)).catch(err =>  console.log(err));