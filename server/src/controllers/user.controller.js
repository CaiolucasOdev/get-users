import { findAllUsers } from "../services/user.service.js";

export function getAllUsers(res){
 const users = findAllUsers(res);   

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, {'content-type': 'application/json'});
    res.end(JSON.stringify(users))
}