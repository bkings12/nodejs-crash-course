const http = require('http');
const fs = require('fs');
const { error } = require('console');
const _ = require ('lodash');

const server = http.createServer((req, res)=>{
    console.log(req.url, req.method);

    let path = ('./views/');
    switch (req.url){
        case'/':
        path += 'index.html';
        res.statusCode = 200;
        break;
        case'/about':
        path += 'about.html';
        res.statusCode = 200;
        break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }
    // response
    res.setHeader('content-Type', 'text/html');
    fs.readFile(path, (error, data)=>{
        if(error){
            console.log(error);
            res.end();

        }else{
            res.write(data);
            res.end();
        }

    });
});
server.listen(3000, 'localhost',()=>{
    console.log('listening activated port 3000');
});