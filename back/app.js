import express from "express"
import { connectDB } from "./config/db.js"
import dotenv  from "dotenv"
import { todoRouter } from "./routes/todo.js"
import cors from "cors"

const app = express()
const PORT =   process.env.PORT || 5000

//Load ENV vars

dotenv.config()

//ConnectDb
connectDB()

//middlewares
app.use(express.json())
app.use(cors())//cors(para usar la api en otro dominio)

//Routes
app.use("/api/v1/todo", todoRouter)

app.get("/", (req,res)=>{
    res.json({messege: "Deberias iniciar los request en /api/v1/<entidad> "})
})

const server = app.listen(PORT, (req, res)=>{
    console.log (`listening in port ${PORT} `)
})


