import http from "node:http"; 
//server.mjs (mjs) é o novo modo de importação que o node não reconhece a não ser que o arquivo js seja MJS

const users = [
    {
        name: "Carlos",
        age: 30,
        status: true
    },{
        name: "Carol",
        age: 22,
        status: false
    },{
        name: "Ceci",
        age: 2,
        status: true
    }
];



http.createServer((req, res) => {
    if (req.url === '/users'){res.writeHead(200, {'content-type': 'application/json'});
    res.end(JSON.stringify(users));
} else {
    res.writeHead(404, {'content-type': 'application/json'});
    res.end(JSON.stringify({Message: 'pagina não encontrada.'}));

}
    
}).listen(3000);// é importante que resguarde a ordem req, res.