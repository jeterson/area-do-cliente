import { UserService } from "./UserService";
import { Response } from "express";


export class UserController {

    
    
    constructor(private service: UserService) {        
        
    }


    async insert(req, res: Response) {
        // try {
        //     await this.service.insert(req.body)
        //    return res.sendStatus(201)
        // } catch (error) {
        //     return Error.throw(res, error)
        // }
    }
}