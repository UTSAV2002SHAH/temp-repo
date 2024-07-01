const {createReadStream} = require('fs');

const stream = createReadStream('./content/big.txt', {
    highWaterMark: 90000,
    encoding : 'utf-8',
})

// default size of Buffer is 64bk

stream.on('data', (result)=>{
    console.log(result);
});

stream.on('error', (err)=>{
    console.log(err);
});