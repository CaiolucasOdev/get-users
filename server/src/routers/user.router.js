import { getAllUsers } from "../controllers/user.controller.js"

export default function routerUsers(req, res){
    if(req.method === 'GET') return getAllUsers(res);
}