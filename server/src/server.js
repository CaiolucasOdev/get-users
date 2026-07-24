import http from "node:http"; 
//server.mjs (mjs) é o novo modo de importação que o node não reconhece a não ser que o arquivo js seja MJS
import routerUsers from "./routers/user.router.js";




http.createServer((req, res) => {
    if (req.url === '/users')
       return routerUsers(req, res);

    res.writeHead(404, {'content-type': 'application/json'});
    res.end(JSON.stringify({Message: 'pagina não encontrada.'}));


    
}).listen(3000);// é importante que resguarde a ordem req, res.