import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app =express()
app.use(cors())
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended : true,limit : "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

import userRouter from "./routes/user.routes.js"

app.use("/api/user",userRouter)

//http://localhost:8000/api/v1/users/register

export { app }