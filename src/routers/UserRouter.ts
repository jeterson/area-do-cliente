import { Router } from "express";
import { userController } from "@useCases/User";

const userRouter = Router()

userRouter.post('/', (req, res) => {
    return userController.insert(req, res)
})

export {userRouter}