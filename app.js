const fs = require('fs');
const http = require('http');
const path = require('path');

let rootPath = path.join('__dirname','www');

let server = http.createServer((request,response)=>{
    response.end('hello world!');
    let targetPath = pain.join(rootPath,request.url);
    if(fs.existsSync(targetPath)){
        let stats = fs.stat(targetPath); console.log(stats);
    }else {
        response.statusCode = 404;
        response.setHeader('content-type','text/html;charset-utf-8');
        response.end(`
            <!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
            <html><head>
            <title>404 Not Found</title>
            </head><body>
            <h1>Not Found</h1>
            <p>你请求的${request.url} 不在服务器上哦,检查一下呗</p>
            </body></html>
        `)
    }
})

server.listen('8848','127.0.0.1',()=>{
    console.log('开启成功');
})