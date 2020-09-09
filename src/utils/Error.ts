import { Response } from "express"

export class Error {
    
    status: number
    message: string

    constructor(props?: Error) {
        this.status = props.status
        this.message = props.message
    }

    static throw(res: Response, error: Error) {
        return res.status(error.status || 500).send({message: error.message})
    }

    
}