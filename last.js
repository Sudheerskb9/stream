const fs=require('fs');
const http=require('http');
const server=http.createServer();
server.on('request', (req,res)=>{
    const rstream=fs.createReadStream('last.txt');
    rstream.pipe(res);
});
server.listen(5000,'127.0.0.1');