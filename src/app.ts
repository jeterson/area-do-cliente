import express from 'express'
import { router } from './routes'
// import {Api} from 'auth'

const app = express()

app.use(express.json())
app.use(router)
// app.use(Api)

export { app }
