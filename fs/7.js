const fs = require('fs');

fs.appendFile('./c.txt', 'hello it is me', 'utf8', (err)=>{
    if(err) throw err;
    console.log('貔貅，去追他一击');
} )