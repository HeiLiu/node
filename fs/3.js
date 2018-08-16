const fs = require('fs');
const zlib = require('zlib');

const gzip = zlib.createGzip();
// readFile 读文件， 如果要一边读一边写入另一个文件 stream
const inFile = fs.createReadStream('./a.txt');
const outFile = fs.createWriteStream('./a.txt.gz');
inFile.pipe(gzip).pipe(outFile);