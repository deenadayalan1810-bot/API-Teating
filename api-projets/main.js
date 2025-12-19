import express from "express"
import cors from "cors"
import iplRoutes from "./routes/Ipl.route.js"
import connectDB from "./lib/db.js"

const app = express()
app.use(express.json())
app.use(cors())

connectDB();

app.get('/', (req, res)=>{
    res.json("hello Users")
})

app.use("/ipl", iplRoutes)

app.listen(5000, ()=>{
    console.log("app running at http://localhost:5000")
})