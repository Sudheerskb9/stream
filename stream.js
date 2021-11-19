const fs=require('fs');
const http=require('http');
const server=http.createServer();
server.on('request',(req,res)=>{
    const rstream=fs.createReadStream('input.txt');
    rstream.on('data',(chunkdata)=>{
        res.write(chunkdata);
    });
    rstream.on('end',()=>{
        res.end();
    });
});
server.listen(3000,"127.0.0.1");