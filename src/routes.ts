import { Router, request } from 'express'
import { userRouter } from './routers'

const router = Router()

router.use('/user', userRouter)


export { router }
