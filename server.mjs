import http from "node:http"; 

//server.mjs (mjs) é o novo modo de importação que o node não reconhece a não ser que o arquivo js seja MJS

http.createServer((req, res) => {
    res.end('Hello Client!')
}).listen(3000);// é importante que resguarde a ordem req, res.